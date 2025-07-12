import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform vec2 resolution;
  varying vec2 vUv;

  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    float t = time * 0.1; // Slowed down animation
    
    // Create base pattern
    float pattern = 0.0;
    for(float i = 1.0; i < 4.0; i++) {
      vec2 offset = vec2(
        sin(t * 0.3 * i) * 0.3,
        cos(t * 0.2 * i) * 0.3
      );
      pattern += noise(uv * (2.0 * i) + offset + t) / i;
    }
    
    // Darker purple gradient
    vec3 darkPurple = vec3(0.05, 0.0, 0.1); // Almost black
    vec3 purple = vec3(0.2, 0.0, 0.4); // Deep purple
    vec3 color = mix(darkPurple, purple, pattern * 0.5); // Reduced intensity
    
    // Add very subtle highlights
    float highlight = smoothstep(0.8, 0.95, pattern);
    color = mix(color, vec3(0.3, 0.1, 0.5), highlight * 0.2);
    
    // Strong vignette effect
    float vignette = 1.0 - length((uv - 0.5) * 1.8);
    color *= smoothstep(0.0, 0.5, vignette);

    // Add noise texture
    float noise = noise(uv * 100.0 + time) * 0.02;
    color += noise;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function Scene() {
  const mesh = useRef<THREE.Mesh>();
  const { viewport, size } = useThree();
  const [uniforms] = useState({
    time: { value: 0 },
    resolution: { value: new THREE.Vector2() }
  });

  useEffect(() => {
    uniforms.resolution.value.set(size.width, size.height);
  }, [size, uniforms.resolution]);

  useFrame((state) => {
    if (mesh.current) {
      uniforms.time.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={mesh} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function Silk() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Scene />
      </Canvas>
    </div>
  );
} 