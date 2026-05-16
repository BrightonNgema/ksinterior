import Image from "next/image";

import velvet1 from "@/assets/velvet-haven/IMG_6855.jpg";
import elevated4 from "@/assets/elevated-living/IMG_5522.jpg";
import bachelor3 from "@/assets/bachelors-paradise/IMG_9575.jpg";
import muse4 from "@/assets/modern-muse/IMG_5619.jpg";

const images = [
  {
    src: velvet1,
    label: "Velvet Haven",
  },
  {
    src: elevated4,
    label: "Statement Pieces",
  },
  {
    src: bachelor3,
    label: "Curated Spaces",
  },
  {
    src: muse4,
    label: "Refined Finishes",
  },
];

export default function ImageBand() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 min-h-[300px] md:h-[50vh] md:min-h-[400px] my-16 md:my-24">
      {images.map((img) => (
        <div key={img.label} className="img-hover overflow-hidden relative aspect-square md:aspect-auto">
          <Image
            src={img.src}
            alt={img.label}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/60 to-transparent">
            <span className="text-white text-[0.65rem] tracking-[0.2em] uppercase font-normal">
              {img.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
