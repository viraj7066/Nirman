import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function GoToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="icon"
        className="rounded-full bg-orange hover:bg-orange/90 shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Go to top"
        data-testid="button-go-to-top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </Button>
    </div>
  );
}


