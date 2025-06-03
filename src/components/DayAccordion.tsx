import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Check } from 'lucide-react';

interface Question {
  title: string;
  description: string;
  leetCodeLink: string;
}

interface DayAccordionProps {
  dayNumber: number;
  date: string;
  topic: string;
  questions: Question[];
}

export const DayAccordion: React.FC<DayAccordionProps> = ({
  dayNumber,
  date,
  topic,
  questions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [completedQuestions, setCompletedQuestions] = useState<Record<string, boolean>>({});

  const localStorageKey = `codeElevate-day-${dayNumber}`;

  useEffect(() => {
    const storedValue = localStorage.getItem(localStorageKey);
    if (storedValue) {
      setCompletedQuestions(JSON.parse(storedValue));
    }
  }, [localStorageKey]);

  const toggleQuestionCompletion = (questionTitle: string) => {
    const newCompletedQuestions = {
      ...completedQuestions,
      [questionTitle]: !completedQuestions[questionTitle],
    };
    setCompletedQuestions(newCompletedQuestions);
    localStorage.setItem(localStorageKey, JSON.stringify(newCompletedQuestions));
  };

  const allQuestionsCompleted = questions.length > 0 && 
    questions.every(q => completedQuestions[q.title]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-amber-100 overflow-hidden">
      <div 
        className={`px-6 py-4 cursor-pointer flex items-center justify-between transition-colors ${
          allQuestionsCompleted ? 'bg-amber-50' : 'hover:bg-amber-50'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <div className="bg-amber-500/10 text-amber-600 w-12 h-12 rounded-lg flex items-center justify-center font-semibold">
            {dayNumber}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{date}</h3>
            <p className="text-amber-600 text-sm font-medium">{topic}</p>
          </div>
        </div>
        <div className="text-amber-600">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>
      
      {isOpen && (
        <div className="animate-fadeIn">
          <div className="px-6 py-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-amber-100">
                    <th className="py-2 px-4 text-left w-16">Status</th>
                    <th className="py-2 px-4 text-left">Question</th>
                    <th className="py-2 px-4 text-left w-32">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {questions.map((question, index) => (
                    <tr key={index} className="border-b border-amber-50 last:border-0">
                      <td className="py-3 px-4">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleQuestionCompletion(question.title);
                          }}
                          className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
                            completedQuestions[question.title]
                              ? 'bg-amber-500 text-white' 
                              : 'border-2 border-amber-200 text-transparent hover:border-amber-300'
                          }`}
                        >
                          <Check size={14} />
                        </button>
                      </td>
                      <td className="py-3 px-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">{question.title}</h4>
                          <p className="text-sm text-gray-600">{question.description}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <a 
                          href={question.leetCodeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
                        >
                          <span>Solve</span>
                          <ExternalLink size={14} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};