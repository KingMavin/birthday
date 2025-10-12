import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import WelcomePage from "@/pages/WelcomePage";
import MemoriesPage from "@/pages/MemoriesPage";
import BirthdayPoemPage from "@/pages/BirthdayPoemPage";
import ReactionPage from "@/pages/ReactionPage";
import SweetSurprisePage from "@/pages/SweetSurprisePage";
import QuestionPage from "@/pages/QuestionPage";
import FinalPage from "@/pages/FinalPage";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <WelcomePage onContinue={() => setCurrentPage(1)} />,
    <MemoriesPage onNext={() => setCurrentPage(2)} />,
    <BirthdayPoemPage onNext={() => setCurrentPage(3)} />,
    <ReactionPage onYes={() => setCurrentPage(4)} />,
    <SweetSurprisePage onNext={() => setCurrentPage(5)} />,
    <QuestionPage onYes={() => setCurrentPage(6)} />,
    <FinalPage />,
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen">
          {pages[currentPage]}
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
