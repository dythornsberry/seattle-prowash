import { cn } from "@/lib/utils";

type BrandWordmarkProps = {
  surface?: "light" | "dark";
  compact?: boolean;
};

const BrandWordmark = ({ surface = "light", compact = false }: BrandWordmarkProps) => (
  <span
    data-brand-wordmark
    className={cn(
      compact ? "text-sm" : "text-[22px]",
      "inline-block shrink-0 whitespace-nowrap text-left font-heading font-bold leading-[1.1] tracking-normal",
    )}
  >
    <span className={cn("block", surface === "dark" ? "text-white" : "text-brand-navy")}>Seattle</span>
    {" "}
    <span className={cn("block", surface === "dark" ? "text-brand-orange" : "text-[#bc4b00]")}>ProWash</span>
  </span>
);

export default BrandWordmark;
