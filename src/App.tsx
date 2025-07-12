import { Suspense } from 'react';
import Silk from './components/Silk';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        <Silk />
      </Suspense>

      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center px-8 py-6">
        <div className="text-2xl font-bold">
          <span className="text-white">voya</span><span className="text-purple-400">.</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
            Learn more
          </button>
          <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
            Start Planning
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-8 relative z-10">
        {/* Hero Section */}
        <div className="py-20 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-400 to-purple-600 text-transparent bg-clip-text tracking-tight">
            Travel, simplified<br />instantly.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Build your dream trip with AI — in minutes. No more bouncing between flight sites, 
            hotel listings, and outdated blogs. Just tell us what you want, and we'll create 
            your perfect itinerary.
          </p>
          <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105">
            Start Planning Your Trip
          </button>
        </div>

        {/* Core Features */}
        <section id="features" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Choose<br />Voya?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Feature 01 */}
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] group">
              <div className="text-purple-400 text-sm font-bold mb-4">01</div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Drag-and-Drop Itinerary Builder
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Visual timeline interface where you can add, remove, and edit destinations, 
                restaurants, and events. AI suggests realistic pacing and logistics as you build.
              </p>
            </div>

            {/* Feature 02 */}
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] group">
              <div className="text-purple-400 text-sm font-bold mb-4">02</div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Smart Suggestions
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Natural-language prompts like "Find me 3 cool things near Lake Como that don't feel touristy" 
                and AI adds them directly into your draft itinerary with links, times, and booking options.
              </p>
            </div>

            {/* Feature 03 */}
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] group">
              <div className="text-purple-400 text-sm font-bold mb-4">03</div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Conflict Resolver
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Real-time AI validation of travel distances and overlaps. 
                "You won't make it from Milan to Venice in 2 hours — shift this activity or leave earlier?"
              </p>
            </div>

            {/* Feature 04 */}
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] group">
              <div className="text-purple-400 text-sm font-bold mb-4">04</div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Export & Share
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Google Calendar sync, PDF download, and shareable links. 
                Trip Style Profiles adapt suggestions based on whether you're a fast-paced adventurer or slow foodie traveler.
              </p>
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
              The Problem We're Solving
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-white">Travel Planning Is Chaotic</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                People spend hours bouncing between flight sites, hotel listings, TikTok travel recs, 
                and outdated blogs only to end up stressed and uncertain. Most tools overload users with 
                options and leave all the decision making to them. For all travellers, this isn't just 
                inefficient, it's exhausting.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-white">Our AI-Powered Solution</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Voya builds custom trips from the ground up using real-time data from flight and hotel APIs, 
                Yelp for top-rated experiences, and conversational AI that learns your preferences. 
                Instead of overwhelming you with choices, we deliver an intelligent, hour-by-hour itinerary 
                with everything booked and thought through.
              </p>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section id="about" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Built For Modern Travelers
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-12 border border-white/10 text-center">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                We're focused on <span className="text-purple-400 font-semibold">young professionals and students</span> who 
                want to travel but don't have time to obsess over every detail. They're budget-conscious and often 
                planning their first few trips without help: no travel agent, no spreadsheet, just stress.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                These users want curated plans that don't feel generic. They want to feel in control but not 
                buried in tabs. They already use AI in daily life, and they're ready for something smarter 
                than Google and more personal than Expedia.
              </p>
            </div>
          </div>
        </section>

        {/* Team & Experience */}
        <section id="team" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
              Why We're Building This
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-white">Our Unique Insight</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                In 2025 alone, our team has traveled over 50,000 miles across dozens of countries. 
                We've seen firsthand how fragmented the travel industry has become. One of us was 
                nearly stranded in Rome when a major booking platform "lost" a reservation. 
                Travelers don't need more options. They need smarter ones.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-white">Why We're Equipped</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our team combines technical skill with lived experience. We are full time engineering/AI 
                students and part time obsessive travelers who know the pain of bad booking platforms. 
                We're not guessing what users need, we are the users and we're building the product we wish existed.
              </p>
            </div>
          </div>
        </section>

        {/* Status & CTA */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Travel Planning?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              We've built a working prototype that takes your travel preferences and creates 
              real itineraries with flights, hotels, restaurants, and activities. 
              3 weeks in, and we're just getting started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105">
                Start Planning Your Trip
              </button>
              <button className="px-8 py-4 border border-white/20 text-white rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">
              <span className="text-white">voya</span><span className="text-purple-400">.</span>
            </div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Demo</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Voya. Built by passionate travelers for travelers.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
