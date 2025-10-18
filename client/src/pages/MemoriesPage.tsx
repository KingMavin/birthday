import { Button } from "@/components/ui/button";
import PageContainer from "@/components/PageContainer";
import FloatingHearts from "@/components/FloatingHearts";

interface MemoriesPageProps {
  onNext: () => void;
}

const memories = [
  {
    image: "/images/pho1.jpg",
    poem: "Every moment with you feels like a dream,\nYour smile lights up my world with its gleam.",
  },
  {
    image: "/images/pho2.jpg",
    poem: "In your eyes I see the stars above,\nA universe of beauty, warmth, and love.",
  },
  {
    image: "/images/pho3.jpg",
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
              className="flex flex-col md:flex-row gap-6 items-center md:items-start"
              data-testid={`memory-${index}`}
            >
              <img
                src={memory.image}
                alt={`Memory ${index + 1}`}
                className="w-full md:w-[268px] h-auto md:h-[224px] object-cover rounded-2xl flex-none"
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
