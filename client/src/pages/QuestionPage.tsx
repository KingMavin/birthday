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

  const sendNotification = async (response: "yes" | "no", countOverride?: number) => {
    if (notificationSent.current) return;

    // Prevent duplicate sends / in-flight races
    notificationSent.current = true;

    const payload = { response, noClickCount: typeof countOverride === 'number' ? countOverride : noClickCount };

    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        console.log("✅ Notification sent successfully");
      } else {
        console.warn("Notification request finished with non-OK status:", res.status);
      }
    } catch (error) {
      console.error("Failed to send notification:", error);
    }
  };

  const handleYesClick = async () => {
    // Ensure the notification is attempted before navigating away so it's not cancelled by route change
    await sendNotification("yes");
    onYes();
  };

  const handleNoClick = () => {
    const newCount = noClickCount + 1;
    setNoClickCount(newCount);

    // Send notification after 15 "No" clicks. Pass the newCount to avoid stale state.
    if (newCount >= 15) {
      void sendNotification("no", newCount);
    }
  };

  return (
    <PageContainer>
      <FloatingHearts />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 pointer-events-none" />
      <div className="max-w-2xl mx-auto text-center space-y-12 relative z-10">
        <h2 className="text-5xl font-bold text-foreground animate-pulse-heart" data-testid="text-question">
          Will you let me be your 1 Corinthians 13:4–7??
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
              Maybe,bleh
            </DodgingButton>
          </div>
           <div onClick={handleNoClick}>
            <DodgingButton>
              NO
            </DodgingButton>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
