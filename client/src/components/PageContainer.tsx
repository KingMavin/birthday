interface PageContainerProps {
  children: React.ReactNode;
  showHearts?: boolean;
}

export default function PageContainer({ children, showHearts = true }: PageContainerProps) {
  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center p-6 animate-fade-in relative overflow-hidden">
      {children}
    </div>
  );
}
