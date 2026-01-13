import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { ArrowUpToLine } from "lucide-react";


export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center"
            >
            <ArrowUpToLine className="w-8 h-8text-gray-600" />
        </button>

  );
}
