'use client';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import { Logo } from "@/Images";

const NavbarLinks = [
    { name: "Home", url: "/" },
    { name: "White Paper", url: "/white-paper" },
    { name: "Invest", url: "/invest" },
    { name: "Blog", url: "/blog" },
    { name: "Statistics", url: "/statistics" },
    { name: "Team", url: "/team" },
    { name: "FAQ", url: "/faq" },
    { name: "Contact Us", url: "/contact-us" }
];

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="block w-full px-4 py-2 mx-auto bg-white bg-opacity-90 sticky top-0 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
            <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
                <Link href="/">
                    <Image src={Logo} alt="Logo" />
                </Link>
                <div className="hidden lg:block">
                    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        {NavbarLinks.map((link, index) => (
                            <li
                                key={index}
                                className={`flex items-center p-1 text-sm gap-x-2 ${pathname === link.url ? "text-pink-700 font-semibold" : "text-slate-600"
                                    }`}
                            >
                                <Link href={link.url}>
                                    <span className="flex items-center">{link.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div></div>
            </div>
        </nav>
    );
};
