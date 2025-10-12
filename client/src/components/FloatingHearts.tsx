import { Heart } from "lucide-react";

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(15)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-primary/20 animate-float-up"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
            fontSize: `${20 + Math.random() * 30}px`,
          }}
          fill="currentColor"
        />
      ))}
    </div>
  );
}
