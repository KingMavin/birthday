import PageContainer from "@/components/PageContainer";
import FloatingHearts from "@/components/FloatingHearts";
import { Heart } from "lucide-react";

export default function FinalPage() {
  return (
    <PageContainer>
      <FloatingHearts />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-primary/20 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/40 animate-pulse-heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 1.5}s`,
              fontSize: `${20 + Math.random() * 40}px`,
            }}
            fill="currentColor"
          />
        ))}
      </div>
      <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
        <img
          src="https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif"
          alt="Kissing bears"
          className="w-64 h-64 mx-auto rounded-2xl object-cover"
          data-testid="img-kissing-bears"
        />
        <h1 className="text-6xl font-bold text-foreground" data-testid="text-thank-you-final">
          Thank you 💖
        </h1>
      </div>
    </PageContainer>
  );
}
