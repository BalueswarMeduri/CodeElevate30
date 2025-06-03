import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ChallengeSection } from './components/ChallengeSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ChallengeSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;