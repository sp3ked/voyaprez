import React from 'react';
import './App.css';
import Silk from './components/Silk';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Animated Background Fallback */}
      <div className="fixed inset-0 z-[-2] bg-gradient-to-br from-purple-900 via-gray-900 to-indigo-900 animate-gradient-x"></div>
      
      {/* Silk Background */}
      <div className="silk-background">
        <Silk
          speed={5}
          scale={1}
          color="#8B5CF6"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Purple Particles */}
      <div className="purple-particles"></div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-8xl md:text-9xl font-bold mb-6 gradient-text">
              voya.
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-16">
              a better way to travel
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Voya - AI Travel Assistant
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Voya transforms travel planning from an overwhelming task into an effortless experience. 
              Using a sophisticated multi-agent AI system, it automates every aspect of trip planning—from 
              flight bookings and hotel reservations to transportation scheduling and delay management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Key Features */}
            <div className="liquid-glass p-8">
              <h3 className="text-2xl font-bold mb-4" style={{color: '#8B5CF6'}}>Key Features</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#8B5CF6'}}></span>
                  AI-powered autonomous agents for different travel aspects
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#EC4899'}}></span>
                  Seamless integration with Google Calendar
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#3B82F6'}}></span>
                  Real-time flight and hotel searches via Amadeus API
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#06B6D4'}}></span>
                  Natural language processing for conversational interactions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#8B5CF6'}}></span>
                  Automated booking and scheduling system
                </li>
              </ul>
            </div>

            {/* Technical Stack */}
            <div className="liquid-glass p-8">
              <h3 className="text-2xl font-bold mb-4" style={{color: '#EC4899'}}>Technical Stack</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Backend:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Flask (Python) with modular API</li>
                    <li>• Multi-agent AI system</li>
                    <li>• OpenAI API integration</li>
                    <li>• Google OAuth authentication</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Frontend:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• React Native with Expo</li>
                    <li>• TypeScript</li>
                    <li>• AsyncStorage for persistence</li>
                    <li>• Moti for animations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Project Status */}
            <div className="liquid-glass p-8">
              <h3 className="text-2xl font-bold mb-4" style={{color: '#3B82F6'}}>Project Status</h3>
              <div className="space-y-4">
                <div className="glass-card rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Current Progress</h4>
                  <p className="text-gray-300 text-sm">
                    3 weeks into development with a working prototype that generates real itineraries 
                    with flights, hotels, restaurants, and activities.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Team Status</h4>
                  <p className="text-gray-300 text-sm">
                    Rising juniors in undergrad, devoting every spare minute to this project. 
                    Ready to go full-time when momentum builds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="liquid-glass p-8">
              <h3 className="text-3xl font-bold mb-6" style={{color: '#8B5CF6'}}>The Problem</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Planning a trip today is chaotic. People spend hours bouncing between flight sites, 
                hotel listings, TikTok travel recs, and outdated blogs only to end up stressed and 
                uncertain. Most tools overload users with options and leave all the decision making 
                to them. For all travellers, this isn't just inefficient, it's exhausting. We're 
                solving the gap between wanting to travel and actually being able to plan confidently 
                and affordably. Travel should be exciting and we're building Voya to bring clarity 
                to the entire travel experience.
              </p>
            </div>

            <div className="liquid-glass p-8">
              <h3 className="text-3xl font-bold mb-6" style={{color: '#EC4899'}}>Our Solution</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Voya is an AI-powered travel planner that builds custom trips from the ground up. 
                We combine real-time data from flight and hotel APIs, Yelp for top-rated experiences, 
                and a conversational AI layer that interacts directly with the user to learn their 
                preferences and constraints. Based on this dialogue, Voya curates complete travel 
                plans that actually fit by budget, by timing, and by taste. Think of it as a smart 
                travel agent that doesn't sleep. Instead of overwhelming people with choices, we 
                deliver an intelligent, hour-by-hour itinerary with everything booked and thought through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Customer & Unique Insight */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="liquid-glass p-8">
              <h3 className="text-3xl font-bold mb-6" style={{color: '#3B82F6'}}>Target Customer</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                We're focused on young professionals and students who want to travel but don't have 
                time to obsess over every detail. They're budget-conscious and often planning their 
                first few trips without help: no travel agent, no spreadsheet, just stress. These 
                users want curated plans that don't feel generic. They want to feel in control but 
                not buried in tabs. They already use AI in daily life, and they're ready for something 
                smarter than Google and more personal than Expedia. We're building for people who 
                care deeply about how they travel, not just where they go.
              </p>
            </div>

            <div className="liquid-glass p-8">
              <h3 className="text-3xl font-bold mb-6" style={{color: '#06B6D4'}}>Unique Insight</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                In 2025 alone, our team has traveled over 50,000 miles across dozens of countries. 
                We've booked dozens of flights, hotels, and experiences sometimes seamlessly, sometimes 
                painfully. We've seen firsthand how fragmented the travel industry has become, with 
                unreliable platforms and endless noise. One of us was nearly stranded in Rome when 
                a major booking platform "lost" a reservation. Travelers don't need more options. 
                They need smarter ones. The future of travel is intelligent, AI-powered curation, 
                and no one's doing that well yet. That's what we are building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Taglines */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-12 gradient-text">
              Travel, simplified instantly.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Plan smarter. Travel better.",
              "Your trip, perfectly mapped.",
              "AI-crafted itineraries that just make sense.",
              "Where you go, how you get there — handled.",
              "Design your journey. Leave the details to us.",
              "Minimal effort. Maximum adventure.",
              "Built for travelers who don't do spreadsheets.",
              "From idea to itinerary — instantly.",
              "Think it. Plan it. Go."
            ].map((tagline, index) => (
              <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform">
                <p className="text-gray-300 font-medium">{tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 gradient-text">Why We're Building This</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="liquid-glass p-8">
              <h4 className="text-2xl font-bold mb-4" style={{color: '#8B5CF6'}}>Why Are We Equipped?</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our team combines technical skill with lived experience. We are full time 
                engineering/AI students and part time obsessive travelers who know the pain of 
                bad booking platforms. We've spent hours (and sometimes days) fine-tuning 
                itineraries, troubleshooting bookings, and searching for that perfect balance 
                of price and fun. We're not guessing what users need, we are the users and 
                we're building the product we wish existed.
              </p>
            </div>

            <div className="liquid-glass p-8">
              <h4 className="text-2xl font-bold mb-4" style={{color: '#EC4899'}}>Why This Project?</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                Because this is the product we wish existed. Because we've felt the frustration 
                firsthand, and we know millions of others have too. Travel is supposed to be 
                fun and right now, planning it is anything but. We're building Voya not just 
                to solve a problem, but to create something lasting that empowers people to 
                explore the world without friction. This is the company we want to dedicate 
                ourselves to. With the right support, we can move faster, build smarter, and 
                become the go-to platform for planning better travel everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Development */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 gradient-text">Future Development</h3>
          </div>
          <div className="liquid-glass p-8 max-w-4xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              Planned enhancements include expanded AI agent capabilities, improved weather 
              integration, a natural language chat interface, and personalized planning 
              based on user preferences and trip history.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center space-x-8 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                View on Devpost ↗
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                View GitHub ↗
              </a>
            </div>
            <p className="text-gray-500">
              © 2025 Voya. Built by passionate travelers for travelers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
