import Image from "next/image";
export default function HeroBanner() {
  return (
    <div className="hero-banner min-h-[500px] bg-[red]">
      <Image
        src="/HeroBanner.png"
        width="1920"
        height="500"
        alt="This is alt text"
        className="h-[500px] object-cover"
      />
    </div>
  );
}
