import Image from "next/image";
import Menu from "./Menu";
import logo from '/public/logo.png';
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <main className="w-full bg-white h-24 text-[#0D0D0D] justify-between flex items-center px-4 sticky top-0 left-0 right-0 z-10">
      {/* Logo */}
      <Link href='/' className="flex-shrink-0 md:">
        <Image src={logo} width={100} height={100} alt="BNA Logo"/>
      </Link>

      {/* Menu */}
      <div className="flex-1">
        <div className="hidden md:flex justify-end">
          <Menu />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </main>
  );
};

export default Navbar;
