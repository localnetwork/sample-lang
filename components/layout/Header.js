import Link from "next/link";
export default function Header() {
  return (
    <header className="py-[15px] top-0 left-0 w-full">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex justify-between">
          <div className="logo">Logo</div>
          <div className="navigation flex flex-wrap">
            <div className="item px-[5px]">
              <Link href="/">Home</Link>
            </div>
            <div className="item px-[5px]">
              <Link href="/about">About</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
