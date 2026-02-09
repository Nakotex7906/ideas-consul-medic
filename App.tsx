import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import VideoSection from './components/VideoSection';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone bg-paper-texture selection:bg-sage/20 font-sans text-moss overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <VideoSection />
        <HowItWorks />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;