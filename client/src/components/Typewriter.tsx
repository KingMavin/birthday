import React from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  showCursor?: boolean;
}

export default function Typewriter({
  text,
  speed = 50,
  startDelay = 0,
  className,
  showCursor = true
}: TypewriterProps) {
  const { displayedText, isTyping } = useTypewriter({
    text,
    speed,
    startDelay
  });

  return (
    <span className={cn(className, 'whitespace-pre-line inline-block')}>
      {displayedText}
      {(isTyping || showCursor) && (
        <span 
          className="inline-block w-0.5 h-5 bg-current align-middle ml-0.5 animate-cursor-blink" 
          aria-hidden="true"
        />
      )}
    </span>
  );
}