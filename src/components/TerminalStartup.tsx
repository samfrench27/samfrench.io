"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { FaTerminal } from 'react-icons/fa';

type Command = {
  text: string;
  delay: number;
  execution?: string[];
  executionDelay?: number;
};

export default function TerminalStartup({ 
  onComplete,
  isExiting = false
}: { 
  onComplete: () => void;
  isExiting?: boolean;
}) {
  const [commands, setCommands] = useState<Command[]>([
    { text: "echo 'Welcome to Sam French's Portfolio'", delay: 70, execution: [
      "Welcome to Sam French's Portfolio",
      "Loading digital experience...",
    ], executionDelay: 500 },
    { text: "portfolio --info", delay: 70, execution: [
      "Sam French",
      "Director of Product at Token.io",
      "Specializing in Account-to-Account Payments and Open Banking",
    ], executionDelay: 300 },
    { text: "portfolio --show-skills", delay: 70, execution: [
      "Product Strategy | Team Leadership | API Development",
      "Open Banking | Payment Technology | Account-to-Account Payments",
    ], executionDelay: 400 },
    { text: "npm run dev", delay: 70, execution: [
      "> samfrench.io@1.0.0 dev",
      "> next dev",
      "",
      "- ready started server on localhost:3000",
      "- event compiled client and server successfully",
      "- initializing portfolio components...",
      "- loading assets... ✓",
      "- preparing content... ✓",
      "- initializing interactive features... ✓",
      "",
      "Portfolio is ready to view! Enjoy your visit."
    ], executionDelay: 250 }
  ]);
  
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionLineIndex, setExecutionLineIndex] = useState(0);
  const [isCompleting, setIsCompleting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  // Cursor blink effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(blinkInterval);
  }, []);
  
  // Main typing animation logic
  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      // All commands completed, trigger the onComplete callback after a short delay
      if (!isCompleting) {
        setIsCompleting(true);
        
        // Show success message after last command is completed
        setTimeout(() => {
          setShowSuccessMessage(true);
        }, 800);
        
        // Call onComplete after showing the success message
        setTimeout(() => {
          setAnimationComplete(true);
          // Wait a bit longer before triggering the completion callback
          setTimeout(() => {
            onComplete();
          }, 1000);
        }, 3000);
      }
      return;
    }
    
    const currentCommand = commands[currentCommandIndex];
    
    // If we're typing a command
    if (isTyping && currentCharIndex < currentCommand.text.length) {
      const typingTimeout = setTimeout(() => {
        setCurrentCharIndex(prev => prev + 1);
      }, currentCommand.delay);
      
      return () => clearTimeout(typingTimeout);
    }
    
    // If we finished typing a command
    if (isTyping && currentCharIndex === currentCommand.text.length) {
      const enterKeyTimeout = setTimeout(() => {
        setOutputLines(prev => [...prev, `$ ${currentCommand.text}`]);
        setIsTyping(false);
        
        // If this command has execution output
        if (currentCommand.execution && currentCommand.execution.length > 0) {
          setIsExecuting(true);
          setExecutionLineIndex(0);
        } else {
          // No execution output, move to next command
          moveToNextCommand();
        }
      }, 700); // Pause after typing before execution
      
      return () => clearTimeout(enterKeyTimeout);
    }
    
    // If we're executing command output
    if (isExecuting && currentCommand.execution) {
      if (executionLineIndex < currentCommand.execution.length) {
        const executionTimeout = setTimeout(() => {
          setOutputLines(prev => [...prev, currentCommand.execution![executionLineIndex]]);
          setExecutionLineIndex(prev => prev + 1);
        }, currentCommand.executionDelay || 150);
        
        return () => clearTimeout(executionTimeout);
      } else {
        // Finished executing, move to next command
        const nextCommandTimeout = setTimeout(() => {
          moveToNextCommand();
        }, 800); // Pause after execution
        
        return () => clearTimeout(nextCommandTimeout);
      }
    }
  }, [currentCommandIndex, currentCharIndex, isTyping, isExecuting, executionLineIndex, commands, onComplete, isCompleting]);
  
  // Helper function to move to the next command
  const moveToNextCommand = useCallback(() => {
    setCurrentCommandIndex(prev => prev + 1);
    setCurrentCharIndex(0);
    setIsTyping(true);
    setIsExecuting(false);
    setExecutionLineIndex(0);
  }, []);
  
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black ${animationComplete ? 'terminal-fade-out' : 'fade-in'}`}>
      <div className="terminal-window w-full max-w-4xl h-3/4 shadow-2xl overflow-hidden flex flex-col">
        {/* Terminal header with clear indication this is a portfolio */}
        <div className="terminal-header">
          <div className="flex items-center space-x-2">
            <FaTerminal className="text-green-400" />
            <span className="text-white font-medium">Sam French Portfolio | Interactive Experience</span>
          </div>
          <div className="terminal-buttons">
            <div className="terminal-button terminal-close"></div>
            <div className="terminal-button terminal-minimize"></div>
            <div className="terminal-button terminal-maximize"></div>
          </div>
        </div>
        
        {/* Terminal content */}
        <div className="terminal-body flex-1 bg-black text-green-400 font-mono p-4 overflow-y-auto">
          {/* Welcome message at the top */}
          <div className="mb-4 text-center text-cyan-400 font-bold">
            Welcome to my interactive portfolio experience!
            <div className="text-sm text-gray-400 mt-1">Loading personalized content...</div>
          </div>
          
          {outputLines.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap break-all">
              {line.startsWith('- loading') || line.startsWith('- preparing') || line.startsWith('- initializing') ? (
                <span className="text-cyan-400">{line}</span>
              ) : line.includes('dev') || line.includes('next') ? (
                <span className="text-blue-400">{line}</span>
              ) : line.includes('Welcome') || line.includes('Portfolio is ready') ? (
                <span className="text-yellow-400 font-semibold">{line}</span>
              ) : (
                line
              )}
            </div>
          ))}
          
          {currentCommandIndex < commands.length && (
            <div className="flex terminal-prompt">
              <span>
                {commands[currentCommandIndex].text.substring(0, currentCharIndex)}
                {isTyping && showCursor && (
                  <span className="terminal-cursor"></span>
                )}
              </span>
            </div>
          )}
          
          {showSuccessMessage && (
            <div className="mt-4 typewriter terminal-success-message">
              Portfolio loaded successfully. Welcome to samfrench.io!
            </div>
          )}
          
          {/* Reassurance message at the bottom */}
          <div className="mt-4 text-sm text-gray-500">
            This is just a creative way to showcase my portfolio. No files are being downloaded.
          </div>
        </div>
      </div>
    </div>
  );
} 