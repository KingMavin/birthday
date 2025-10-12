import { Button } from "@/components/ui/button";
import PageContainer from "@/components/PageContainer";
import FloatingHearts from "@/components/FloatingHearts";
import DodgingButton from "@/components/DodgingButton";

interface QuestionPageProps {
  onYes: () => void;
}

export default function QuestionPage({ onYes }: QuestionPageProps) {
  return (
    <PageContainer>
      <FloatingHearts />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 pointer-events-none" />
      <div className="max-w-2xl mx-auto text-center space-y-12 relative z-10">
        <h2 className="text-5xl font-bold text-foreground animate-pulse-heart" data-testid="text-question">
          Would you be mine?
        </h2>
        <div className="flex gap-6 justify-center items-center flex-wrap">
          <Button
            size="lg"
            className="px-8 py-4 rounded-full text-lg"
            onClick={onYes}
            data-testid="button-yes-i-do"
          >
            Yes, I do
          </Button>
          <DodgingButton>
            No, I don't
          </DodgingButton>
        </div>
      </div>
    </PageContainer>
  );
}
