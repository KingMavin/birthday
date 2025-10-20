import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface ShrinkingButtonProps {
  children: React.ReactNode;
  onShrink?: () => void;
}

export default function ShrinkingButton({ children, onShrink }: ShrinkingButtonProps) {
  const [scale, setScale] = useState(1);

  const shrink = () => {
    if (scale > 0) {
      const newScale = Math.max(0, scale - 0.15);
      setScale(newScale);
      if (onShrink) onShrink();
    }
  };

  useEffect(() => {
    if (scale === 0) {
      const timer = setTimeout(() => {}, 500);
      return () => clearTimeout(timer);
    }
  }, [scale]);

  if (scale === 0) return null;

  return (
    <Button
      variant="outline"
      size="lg"
      className="px-8 py-4 rounded-full text-lg transition-all duration-300"
      style={{
        transform: `scale(${scale})`,
      }}
      onClick={shrink}
      data-testid="button-shrinking"
    >
      {children}
    </Button>
  );
}
