import Image from "next/image";
export default function Services() {
  return (
    <div className="max-w-[1140px] mx-auto py-[50px]">
      <h2 className="text-center text-[green] font-bold text-[30px]">
        What I can do
      </h2>

      <div className="flex">
        <div className="w-[100px] h-[100px] bg-[#ccc] rounded-[100%]">
          <Image
            src="/HeroBanner.png"
            width="100"
            height="100"
            alt="This is alt text"
            className="h-[100px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
