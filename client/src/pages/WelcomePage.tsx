import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageContainer from "@/components/PageContainer";
import FloatingHearts from "@/components/FloatingHearts";

interface WelcomePageProps {
  onContinue: () => void;
}

export default function WelcomePage({ onContinue }: WelcomePageProps) {
  const [showSadCat, setShowSadCat] = useState(false);

  return (
    <PageContainer>
      <FloatingHearts />
      <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
        {!showSadCat ? (
          <>
            <img
              src="https://giphy.com/gifs/happy-birthday-poku-meow-6WFScxN6fi95z3YVQD"
              alt="Dancing cat"
              className="w-48 h-48 mx-auto rounded-2xl object-cover"
              data-testid="img-dancing-cat"
            />
            <h1 className="text-6xl font-bold text-foreground" data-testid="text-hello">
              Hello Marshy
            </h1>
            <p className="text-2xl text-muted-foreground" data-testid="text-question">
              Do you want to see your gift?
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                className="px-8 py-4 rounded-full text-lg"
                onClick={onContinue}
                data-testid="button-yes"
              >
                Yes please
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 rounded-full text-lg"
                onClick={() => setShowSadCat(true)}
                data-testid="button-no"
              >
                No thanks
              </Button>
            </div>
          </>
        ) : (
          <>
            <img
              src="https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif"
              alt="Sad cat"
              className="w-48 h-48 mx-auto rounded-2xl object-cover"
              data-testid="img-sad-cat"
            />
            <p className="text-2xl text-foreground" data-testid="text-promise">
              I promise you'll like it 🥺
            </p>
            <Button
              size="lg"
              className="px-8 py-4 rounded-full text-lg"
              onClick={() => setShowSadCat(false)}
              data-testid="button-try-again"
            >
              Try again
            </Button>
          </>
        )}
      </div>
    </PageContainer>
  );
}
