import Link from "next/link";
import { FacebookIcon, InstagramIcon, Twitter, YoutubeIcon } from "lucide-react";
import { menuItems } from "@/lib/constants";
import { SignedIn } from "@clerk/nextjs";

const SecondaryNav = () => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  return (
    <main className="h-12 bg-[#0D0D0D] flex items-center justify-between py-2 px-4">
      <div className="flex items-center gap-4">
      <ul className="flex flex-col gap-1 md:gap-6 items-center text-white" >
          <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-[#F20707] text-[#F2F2F2]' : 'hover:bg-[#F20707] hover:text-[#F2F2F2]',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <FacebookIcon className="text-white" />
        <Twitter className="text-white" />
        <YoutubeIcon className="text-white" />
        <InstagramIcon className="text-white" />
      </div>
    </main>
  );
};

export default SecondaryNav;
