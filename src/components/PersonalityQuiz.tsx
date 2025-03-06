"use client";
import React, { useState } from 'react';

const PersonalityQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const questions = [
    {
      question: "How would you prefer to build a new product?",
      options: [
        { text: "Research thoroughly, then create a detailed plan", value: "methodical" },
        { text: "Start with MVP, iterate based on feedback", value: "agile" },
        { text: "Brainstorm with team, collaborate on best ideas", value: "collaborative" },
        { text: "Disrupt the market with innovative approach", value: "innovative" }
      ]
    },
    {
      question: "What aspect of payments technology interests you most?",
      options: [
        { text: "Customer experience and user journeys", value: "ux" },
        { text: "Technical infrastructure and systems", value: "technical" },
        { text: "Compliance and regulatory aspects", value: "compliance" },
        { text: "Market opportunities and business models", value: "business" }
      ]
    },
    {
      question: "How do you approach problem-solving?",
      options: [
        { text: "Analyze data for insights", value: "analytical" },
        { text: "Brainstorm creative solutions", value: "creative" },
        { text: "Consult experts and stakeholders", value: "collaborative" },
        { text: "Test multiple approaches quickly", value: "experimental" }
      ]
    },
    {
      question: "Which project would you be most excited to work on?",
      options: [
        { text: "Revolutionizing payment experiences", value: "payments" },
        { text: "Building data analytics platforms", value: "data" },
        { text: "Creating seamless API integrations", value: "integration" },
        { text: "Developing new business models", value: "business" }
      ]
    },
    {
      question: "How do you prefer to communicate about products?",
      options: [
        { text: "Visual presentations with clear metrics", value: "visual" },
        { text: "Detailed documentation and specifications", value: "detailed" },
        { text: "Interactive demos and experiences", value: "interactive" },
        { text: "Strategic narratives connecting to business goals", value: "strategic" }
      ]
    }
  ];

  const handleAnswer = (answerValue: string) => {
    const newAnswers = [...answers, answerValue];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  // Calculate result based on answers
  const calculateResult = () => {
    // Count the occurrences of each answer type
    const counts = answers.reduce((acc: { [key: string]: number }, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {});
    
    // Find the most frequent answer
    let maxCount = 0;
    let result = '';
    
    for (const [key, value] of Object.entries(counts) as [string, number][]) {
      if (value > maxCount) {
        maxCount = value;
        result = key;
      }
    }
    
    // Results mapping
    const results = {
      methodical: {
        title: "Strategic Planner",
        description: "You're thoughtful and methodical in your approach to products. You'd enjoy working with me on developing long-term strategies and roadmaps for payment solutions.",
        compatibility: "High compatibility with my product strategy approach at Token.io, where planning is balanced with execution.",
        suitableProjects: "VRP proposition, Road mapping exercises, Market expansion planning"
      },
      agile: {
        title: "Agile Innovator",
        description: "You value speed and iteration. We'd work well together implementing rapid testing and learning cycles for new payment features.",
        compatibility: "Perfect fit for my iterative approach to product development, constantly refining based on market feedback.",
        suitableProjects: "A2A payment optimization, Conversion rate improvements, Feature experimentation"
      },
      collaborative: {
        title: "Team Connector",
        description: "You understand the power of diverse perspectives. We'd excel at building cross-functional initiatives across product and technology teams.",
        compatibility: "Aligns with my leadership style, where I bring technical and business stakeholders together.",
        suitableProjects: "Bank connectivity expansion, API platform development, Cross-functional initiatives"
      },
      innovative: {
        title: "Disruptive Thinker",
        description: "You're focused on breakthrough ideas. We could work on next-generation payment concepts that challenge industry norms.",
        compatibility: "Matches my focus on pushing boundaries in the payments space while maintaining practical implementation.",
        suitableProjects: "New payment models, Emerging technologies exploration, Strategic partnerships"
      },
      technical: {
        title: "Technical Champion",
        description: "You're interested in the underlying systems. We could collaborate on optimizing payment infrastructure and technical implementations.",
        compatibility: "Complements my product background with deeper technical focus, creating balanced solutions.",
        suitableProjects: "Payment infrastructure optimization, Technical architecture design, Performance improvements"
      },
      analytical: {
        title: "Data-Driven Decision Maker",
        description: "You rely on evidence and analysis. Together we could excel at optimizing payment metrics and analyzing performance data.",
        compatibility: "Aligns perfectly with my metrics-focused approach to product development and optimization.",
        suitableProjects: "Payment analytics dashboard, Performance metrics optimization, Data-driven improvements"
      }
    };
    
    // Default result if no clear pattern
    const defaultResult = {
      title: "Versatile Product Thinker",
      description: "You bring a balanced perspective to product development. We'd work well together on various aspects of payment technology and product strategy.",
      compatibility: "Great overall match with my multifaceted approach to product leadership.",
      suitableProjects: "Any of my current initiatives would benefit from your balanced perspective"
    };
    
    return results[result as keyof typeof results] || defaultResult;
  };

  const result = calculateResult();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
        How Would We Work Together?
        <span className="block w-20 h-1 bg-cyan-500 mx-auto mt-4"></span>
      </h2>
      
      {!quizStarted ? (
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Discover Your Product Personality</h3>
          <p className="text-gray-700 mb-6">
            Curious about how we might collaborate? Take this quick quiz to discover your product personality
            and see how we could work together on payment and fintech initiatives.
          </p>
          <button
            onClick={startQuiz}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-md"
          >
            Start Quiz
          </button>
        </div>
      ) : (
        !showResults ? (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between mb-8">
              <span className="text-sm text-gray-500">Question {currentQuestion + 1}/{questions.length}</span>
              <span className="text-sm text-blue-600 cursor-pointer hover:underline" onClick={resetQuiz}>
                Reset
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-blue-800 mb-6">
              {questions[currentQuestion].question}
            </h3>
            
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full text-left p-4 border border-gray-200 rounded-md hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  {option.text}
                </button>
              ))}
            </div>
            
            <div className="mt-6 h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-end">
              <span className="text-sm text-blue-600 cursor-pointer hover:underline" onClick={resetQuiz}>
                Take Quiz Again
              </span>
            </div>
            
            <div className="text-center mb-6">
              <div className="inline-block bg-blue-100 text-blue-800 text-xl font-bold px-4 py-2 rounded-full mb-4">
                {result.title}
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Your Product Personality</h3>
            </div>
            
            <div className="space-y-6 mt-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Collaboration Style</h4>
                <p className="text-gray-700">
                  {result.description}
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Compatibility</h4>
                <p className="text-gray-700">
                  {result.compatibility}
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Potential Collaboration Areas</h4>
                <p className="text-gray-700">
                  {result.suitableProjects}
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-md"
              >
                Let's Connect
              </a>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default PersonalityQuiz;