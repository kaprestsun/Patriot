import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-6 left-6 flex items-center text-white">
      {/* Container for logo and text */}
      <div className="flex items-center space-x-3">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Stripe Press Logo" width={40} height={40} />
        </Link>
        
        {/* Text container in a column */}
        <div className="flex flex-col">
          <span className="text-lg font-bold">Stripe Press</span>
          <span className="text-sm italic text-gray-400">Ideas for progress</span>
        </div>
      </div>
    </header>
  );
}
