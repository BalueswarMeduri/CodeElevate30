import React from 'react';
import { DayAccordion } from './DayAccordion';
import { challengeData } from '../data/challengeData';

export const ChallengeSection: React.FC = () => {
  return (
    <section id="challenges" className="py-16 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Challenge Timeline</h2>
            <p className="text-lg text-gray-600">
              Track your progress through all 30 days of the CodeElevate challenge.
            </p>
          </div>
          
          <div className="space-y-4">
            {challengeData.map((day) => (
              <DayAccordion 
                key={day.day}
                dayNumber={day.day}
                date={day.date}
                topic={day.topic}
                questions={day.questions}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};