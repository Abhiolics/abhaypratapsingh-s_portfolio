"use client";
import React, { useEffect, useState } from 'react';
import { TextGenerateEffect } from './ui/TextGenerateEffect'; // Make sure you have this component
import { AuroraBackground } from './ui/aurora-background';

interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      finishLoading(); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, [finishLoading]);

  if (!isVisible) return null;

  return (
    <AuroraBackground>
      <div className="flex items-center justify-center min-h-screen bg-gray-900 w-full">
        <TextGenerateEffect className="text-[40px] sm:text-[60px] md:text-5xl lg:text-6xl text-white text-center" words="Turning ideas into intuitive experiences." />
      </div>
    </AuroraBackground>
  );
};

export default SplashScreen;



