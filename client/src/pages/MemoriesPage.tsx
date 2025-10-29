import React from "react";
import { Button } from "@/components/ui/button";
import PageContainer from "@/components/PageContainer";
import FloatingHearts from "@/components/FloatingHearts";
import { useScrollFadeInOut } from "@/hooks/useScrollFadeInOut";

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
    image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG0zNWVvYjlqeDcxNjh4MWZ6b2UzNjR0cGtna3N4bzhpZ3FoMnlzbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PoqwD8dUq49hLVChGZ/giphy.gif",
    poem: "The first time i looked pasted the quiet girl with creativity at her fingertip,\ntime didn't stop, but it slowed down \njust enough for me to be stunned",
  },
  {
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODhyYW5udGVodHo4aTZka2ljdTZ1YXI5YnZiNngwaTlleXdwMmZ4dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/nRNF5nlDgr8bK/giphy.gif",
    poem: "U fell, It wasn't one big moment, just quiet ones that built up,\nA laugh here, a gaze there...\nand suddenly, i was gone\nhopelessly, beautifully fallen and gone",
  },
  {
    image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW80cTNzb3Y1cWUzdmIxMnRzMnA0eXEyZGd1b3l5c21zMjB5b2MyMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H0tF6mNgMxdMqUrOTA/giphy.gif",
    poem: "You brought God into my chaos,\nYour faith lit something in me i didn't know was dim, \nand somehow, everything started to make sense, \n you showed me what grace looks like, \nWhen it walks, smiles, cares, works, talks and loves. \n And i thank God for you every day.",
  },
  {
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzY3d294MGN4aGV5NTVwczEwMXlqajg4YzdyeHI3cW5waHBhMnlhaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Z7hAjvqppsuVG/giphy.gif",
    poem: "I don't know what kind of spell you cast,\nbut im chasing dreams that lead straight to you. \nYou made me want more out of life than i ever thought possible.",
  },
];

export default function MemoriesPage({ onNext }: MemoriesPageProps) {
  // Title ref (hook called consistently)
  const titleRef = useScrollFadeInOut<HTMLHeadingElement>({ threshold: 0.5, duration: 0.8 });

  function MemoryCard({ memory, index }: { memory: typeof memories[number]; index: number }) {
    const ref = useScrollFadeInOut<HTMLDivElement>({ threshold: 0.2, duration: 0.8, delay: index * 0.2 });

    return (
      <div
        ref={ref}
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
    );
  }

  return (
    <PageContainer>
      <FloatingHearts />
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <h2 ref={titleRef} className="text-5xl font-bold text-center text-foreground" data-testid="text-memories-title">
          Beautiful Memories
        </h2>
        <div className="space-y-8">
          {memories.map((memory, index) => (
            <MemoryCard key={index} memory={memory} index={index} />
          ))}
        </div>
        <div className="text-center pt-8">
          <Button size="lg" className="px-8 py-4 rounded-full text-lg" onClick={onNext} data-testid="button-next">
            Next
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
