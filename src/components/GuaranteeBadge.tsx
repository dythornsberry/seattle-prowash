import { Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface GuaranteeBadgeProps {
  variant?: "default" | "large";
  className?: string;
}

const GuaranteeBadge = ({ variant = "default", className = "" }: GuaranteeBadgeProps) => {
  if (variant === "large") {
    return (
      <div className={`bg-gradient-to-r from-bright-green to-emerald-600 text-white rounded-xl p-6 shadow-lg ${className}`}>
        <div className="flex items-center gap-3 justify-center">
          <Shield className="w-10 h-10" />
          <div className="text-left">
            <div className="text-2xl font-bold">12-Month</div>
            <div className="text-sm font-semibold opacity-90">Moss-Free Guarantee</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Badge 
      variant="outline" 
      className={`bg-bright-green/10 border-bright-green text-bright-green font-semibold px-3 py-1 ${className}`}
    >
      <Shield className="w-4 h-4 mr-1.5" />
      12-Month Moss-Free Guarantee
    </Badge>
  );
};

export default GuaranteeBadge;
