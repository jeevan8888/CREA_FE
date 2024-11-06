import Image from 'next/image'
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import Link from 'next/link'

function Footer() {
    return (
        <footer className="bg-white">
            <div className='mx-auto max-w-screen-2xl p-6'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='flex flex-col md:flex-row gap-5 items-center'>
                        <div>
                            <Link href='/'>
                                <Image src="/logo.svg" alt="logo" width={100} height={100} />
                            </Link>
                        </div>
                        <div className='border border-1 py-4 border-black hidden md:block' />
                        <div>
                            <h1 className="text-center md:text-left">CREATIVE CATALYST</h1>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center items-center gap-4 mt-4 md:mt-0'>
                        <Link href='https://discord.com/invite/c7hBh426'>
                            <FaDiscord size={48} />
                        </Link>
                        <Link href='https://t.me/mycreativecatalyst'>
                            <div className='h-10 w-10 bg-black text-white flex justify-center items-center rounded-md'>
                                <FaTelegramPlane size={30} />
                            </div>
                        </Link>
                        <Link href='https://vk.com/creative_catalyst'>
                            <FaVk size={48} />
                        </Link>
                        <Link href='https://www.linkedin.com/company/creative-catalyst-crea/'>
                            <IoLogoLinkedin size={48} />
                        </Link>
                        <Link href='https://www.instagram.com/crea_web3/profilecard/?igsh=ZXl5ZHZlNXBhaDQw'>
                            <FaSquareInstagram size={48} />
                        </Link>
                        <Link href='https://x.com/crea_catalyst?t=njikCzOCkFeYNmVLjfBtxA&s=09'>
                            <div className='h-10 w-10 bg-black text-white flex justify-center items-center rounded-md'>
                                <BsTwitterX size={30} />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='border border-1 my-4 border-black' />
                <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                    <p className="text-center md:text-left">Copyright © 2024 . All rights reserved</p>
                    <div className='flex gap-5'>
                        <Link href='/privacy-policy'>
                            <span>
                                Privacy Policy
                            </span>
                        </Link>
                        <Link href='/terms-of-use'>
                            <span>
                                Terms of Use
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer