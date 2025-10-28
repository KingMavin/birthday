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
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzdkbjRqZHVyZjRrMmhhdzB2bnBrcHdkcnUyZWdkc2Rrdzkwd2w4biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l4Ki4biBSwhjyrS48/giphy.gif",
    poem: "Every moment with you feels like a dream,\nYour smile lights up my world with its gleam.",
  },
  {
    image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW80cTNzb3Y1cWUzdmIxMnRzMnA0eXEyZGd1b3l5c21zMjB5b2MyMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H0tF6mNgMxdMqUrOTA/giphy.gif",
    poem: "In your eyes I see the stars above,\nA universe of beauty, warmth, and love.",
  },
  {
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzY3d294MGN4aGV5NTVwczEwMXlqajg4YzdyeHI3cW5waHBhMnlhaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Z7hAjvqppsuVG/giphy.gif",
    poem: "Your laughter is the sweetest song,\nWith you is where I belong.",
  },
   {
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODhyYW5udGVodHo4aTZka2ljdTZ1YXI5YnZiNngwaTlleXdwMmZ4dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/nRNF5nlDgr8bK/giphy.gif",
    poem: "In your eyes I see the stars above,\nA universe of beauty, warmth, and love.",
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
