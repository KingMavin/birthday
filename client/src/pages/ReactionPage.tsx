import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageContainer from "@/components/PageContainer";
import FloatingHearts from "@/components/FloatingHearts";
import ShrinkingButton from "@/components/ShrinkingButton";

interface ReactionPageProps {
  onYes: () => void;
}

export default function ReactionPage({ onYes }: ReactionPageProps) {
  const [yesScale, setYesScale] = useState(1);

  const handleNoClick = () => {
    setYesScale((prev) => Math.min(prev + 0.2, 2));
  };

  return (
    <PageContainer>
      <FloatingHearts />
      <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
        <img
          src="https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif"
          alt="Cute cat"
          className="w-48 h-48 mx-auto rounded-2xl object-cover"
          data-testid="img-cute-cat"
        />
        <h2 className="text-4xl font-bold text-foreground" data-testid="text-did-you-like">
          Did you like it?
        </h2>
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <Button
            size="lg"
            className="px-8 py-4 rounded-full text-lg transition-all duration-300"
            style={{
              transform: `scale(${yesScale})`,
            }}
            onClick={onYes}
            data-testid="button-yes-i-did"
          >
            Yes I did
          </Button>
          <ShrinkingButton onShrink={handleNoClick}>
            No I didn't
          </ShrinkingButton>
        </div>
      </div>
    </PageContainer>
  );
}
