import { Button } from "@/components/ui/button";
import PageContainer from "@/components/PageContainer";
import FloatingHearts from "@/components/FloatingHearts";
import { Sparkles } from "lucide-react";
import Typewriter from "@/components/Typewriter";

interface BirthdayPoemPageProps {
  onNext: () => void;
}

export default function BirthdayPoemPage({ onNext }: BirthdayPoemPageProps) {
  return (
    <PageContainer>
      <FloatingHearts />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-primary/30 animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${15 + Math.random() * 20}px`,
            }}
          />
        ))}
      </div>
      <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
        <img
          src="https://media.giphy.com/media/yoJC2GnSClbPOkV0eA/giphy.gif"
          alt="Heart bear"
          className="w-64 h-64 mx-auto rounded-2xl object-cover"
          data-testid="img-heart-bear"
        />
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-foreground" data-testid="text-poem-title">
            Happy Birthday, Marshy
          </h2>
          <p
            className="text-2xl text-foreground leading-relaxed min-h-[16rem]"
            style={{ lineHeight: 2 }}
            data-testid="text-birthday-poem"
          >
            <Typewriter
              text={`Happy Birthday, my sweetest chaos,
the calm in my storm, the melody in my noise.
You walk into days and make them softer,
turning ordinary moments into quiet joy.

You're laughter wrapped in light,
a heart that hums peace even when tired.
You love like prayer, gentle, steady, real,
and somehow, you brought God closer too.

You made me believe in better things:
in love and passion for God,
in purpose that grows stronger,
in futures worth building, brick by hopeful brick.

You're got me chasing goals that lead to you,
working harder, dreaming louder,
becoming more of the man you already see in me.

So here's to you,
to your softness, your fire,
your sugar-fueled chaos and that proud little grin.
You're my favorite kind of miracle,
the one that feels new everyday.

May your days be filled with love and cheer,
And may happiness follow you throughout the years.`}
              speed={50}
              startDelay={500}
              showCursor={true}
            />
          </p>
        </div>
        <Button
          size="lg"
          className="px-8 py-4 rounded-full text-lg"
          onClick={onNext}
          data-testid="button-thank-you"
        >
          Thank you
        </Button>
      </div>
    </PageContainer>
  );
}
