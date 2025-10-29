import { useState, useEffect } from 'react';

interface TypewriterOptions {
  text: string;
  speed?: number;
  startDelay?: number;
}

export function useTypewriter({
  text,
  speed = 50,
  startDelay = 0
}: TypewriterOptions) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setInterval> | undefined;
    let currentIndex = 0;

    // Reset state when text prop changes
    setDisplayedText('');
    setIsTyping(true);
    currentIndex = 0;

    const startTyping = () => {
      timeoutId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(prev => prev + text[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(timeoutId);
          setIsTyping(false);
        }
      }, speed);
    };

    // Start typing after optional delay
    const delayTimeout = setTimeout(startTyping, startDelay);

    return () => {
      clearTimeout(delayTimeout as unknown as number);
      if (timeoutId !== undefined) clearInterval(timeoutId as unknown as number);
    };
  }, [text, speed, startDelay]);

  return { displayedText, isTyping };
}