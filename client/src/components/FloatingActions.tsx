import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <a href="https://wa.me/918888883257" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" data-testid="button-whatsapp">
        <div className="rounded-full shadow-lg w-14 h-14 flex items-center justify-center bg-transparent">
          <WhatsAppIcon className="w-10 h-10" />
        </div>
      </a>

      <Button
        className="rounded-full bg-orange hover:bg-orange/90 shadow-lg w-14 h-14"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Go to top"
        data-testid="button-go-to-top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </Button>
    </div>
  );
}


