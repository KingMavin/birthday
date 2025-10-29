import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import PageContainer from "@/components/PageContainer";
import FloatingHearts from "@/components/FloatingHearts";
import DodgingButton from "@/components/DodgingButton";

interface QuestionPageProps {
  onYes: () => void;
}

export default function QuestionPage({ onYes }: QuestionPageProps) {
  const [noClickCount, setNoClickCount] = useState(0);
  const notificationSent = useRef(false);

  const sendNotification = async (response: "yes" | "no") => {
    if (notificationSent.current) return;
    
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ response, noClickCount }),
      });
      
      if (res.ok) {
        notificationSent.current = true;
        console.log("✅ Notification sent successfully");
      }
    } catch (error) {
      console.error("Failed to send notification:", error);
    }
  };

  const handleYesClick = () => {
    sendNotification("yes");
    onYes();
  };

  const handleNoClick = () => {
    const newCount = noClickCount + 1;
    setNoClickCount(newCount);
    
    // Send notification after 15 "No" clicks
    if (newCount >= 15) {
      sendNotification("no");
    }
  };

  return (
    <PageContainer>
      <FloatingHearts />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 pointer-events-none" />
      <div className="max-w-2xl mx-auto text-center space-y-12 relative z-10">
        <h2 className="text-5xl font-bold text-foreground animate-pulse-heart" data-testid="text-question">
          May i be your 1 Corinthians 13:4–7??
        </h2>
        <div className="flex gap-6 justify-center items-center flex-wrap">
          <Button
            size="lg"
            className="px-8 py-4 rounded-full text-lg"
            onClick={handleYesClick}
            data-testid="button-yes-i-do"
          >
            Pish, Yes!
          </Button>
          <div onClick={handleNoClick}>
            <DodgingButton>
              Maybe, blehh no...
            </DodgingButton>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
