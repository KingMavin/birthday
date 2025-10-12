import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

interface DodgingButtonProps {
  children: React.ReactNode;
}

export default function DodgingButton({ children }: DodgingButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const dodge = () => {
    const newX = Math.random() * 200 - 100;
    const newY = Math.random() * 200 - 100;
    setPosition({ x: newX, y: newY });
  };

  return (
    <Button
      ref={buttonRef}
      variant="outline"
      size="lg"
      className="px-8 py-4 rounded-full text-lg transition-all duration-300"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseEnter={dodge}
      onClick={(e) => {
        e.preventDefault();
        dodge();
      }}
      data-testid="button-dodging"
    >
      No, I won't
    </Button>
  );
}
