import React from "react";
import { Button } from "@/components/ui/button";
import PageContainer from "@/components/PageContainer";
import FloatingHearts from "@/components/FloatingHearts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

interface MemoriesPageProps {
  onNext: () => void;
}

const memories = [
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    poem: "Every moment with you feels like a dream,\nYour smile lights up my world with its gleam.",
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    poem: "In your eyes I see the stars above,\nA universe of beauty, warmth, and love.",
  },
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
    poem: "Your laughter is the sweetest song,\nWith you is where I belong.",
  },
];

export default function MemoriesPage({ onNext }: MemoriesPageProps) {
  return (
    <PageContainer>
      <FloatingHearts />
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <h2 className="text-5xl font-bold text-center text-foreground" data-testid="text-memories-title">
          Beautiful Memories
        </h2>
        <div className="space-y-8">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-center"
              data-testid={`memory-${index}`}
            >
              <img
                src={memory.image}
                alt={`Memory ${index + 1}`}
                className="w-full md:w-64 h-64 object-cover rounded-2xl"
                data-testid={`img-memory-${index}`}
              />
              <p
                className="text-xl text-foreground leading-relaxed flex-1 text-center md:text-left"
                style={{ lineHeight: 1.8 }}
                data-testid={`text-poem-${index}`}
              >
                {memory.poem}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center pt-8">
          <Button
            size="lg"
            className="px-8 py-4 rounded-full text-lg"
            onClick={onNext}
            data-testid="button-next"
          >
            Next
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
