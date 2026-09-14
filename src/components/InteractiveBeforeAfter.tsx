import { useState, memo } from "react";
import * as Slider from "@radix-ui/react-slider";
import { ChevronsLeftRight } from "lucide-react";

interface InteractiveBeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeImageWebP?: string;
  afterImageWebP?: string;
  beforeAlt: string;
  afterAlt: string;
}

const InteractiveBeforeAfter = ({ beforeImage, afterImage, beforeImageWebP, afterImageWebP, beforeAlt, afterAlt }: InteractiveBeforeAfterProps) => {
  const [position, setPosition] = useState([50]);
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
      <picture>
        {afterImageWebP && <source srcSet={afterImageWebP} type="image/webp" />}
        <img src={afterImage} alt={afterAlt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />
      </picture>
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position[0]}% 0 0)` }}>
        <picture>
          {beforeImageWebP && <source srcSet={beforeImageWebP} type="image/webp" />}
          <img src={beforeImage} alt={beforeAlt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />
        </picture>
      </div>
      <span className="pointer-events-none absolute left-3 top-3 rounded bg-white px-3 py-1 text-xs font-semibold text-charcoal">Before</span>
      <span className="pointer-events-none absolute right-3 top-3 rounded bg-brand-navy px-3 py-1 text-xs font-semibold text-white">After</span>
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white" style={{ left: `${position[0]}%` }} />
      <Slider.Root value={position} onValueChange={setPosition} min={0} max={100} step={1} className="absolute inset-0 flex cursor-ew-resize touch-pan-y select-none items-center">
        <Slider.Track className="relative h-full grow"><Slider.Range /></Slider.Track>
        <Slider.Thumb aria-label="Before and after comparison" aria-valuetext={`${position[0]}% before`} className="flex h-11 w-11 items-center justify-center rounded-full border bg-white text-charcoal shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange">
          <ChevronsLeftRight className="h-5 w-5" aria-hidden="true" />
        </Slider.Thumb>
      </Slider.Root>
    </div>
  );
};

export default memo(InteractiveBeforeAfter);
