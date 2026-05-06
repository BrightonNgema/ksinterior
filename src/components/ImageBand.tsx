import Image from "next/image";

const images = [
  {
    src: "/images/residential/velvet-1.jpg",
    label: "Velvet Haven",
  },
  {
    src: "/images/residential/elevated-4.jpg",
    label: "Statement Pieces",
  },
  {
    src: "/images/residential/bachelor-4.jpg",
    label: "Curated Spaces",
  },
  {
    src: "/images/residential/muse-5.jpg",
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
