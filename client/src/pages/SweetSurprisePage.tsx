import { Button } from "@/components/ui/button";
import PageContainer from "@/components/PageContainer";
import FloatingHearts from "@/components/FloatingHearts";

interface SweetSurprisePageProps {
  onNext: () => void;
}

export default function SweetSurprisePage({ onNext }: SweetSurprisePageProps) {
  return (
    <PageContainer>
      <FloatingHearts />
      <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
        <img
          src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
          alt="Blushing bear"
          className="w-64 h-64 mx-auto rounded-2xl object-cover"
          data-testid="img-blushing-bear"
        />
        <p className="text-3xl text-foreground" data-testid="text-thank-you-message">
          Thank you for liking it 💕<br />
          But one more thing…
        </p>
        <Button
          size="lg"
          className="px-8 py-4 rounded-full text-lg"
          onClick={onNext}
          data-testid="button-next-surprise"
        >
          Next
        </Button>
      </div>
    </PageContainer>
  );
}
