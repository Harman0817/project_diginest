import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import NavItems from "./NavItems"
import { Icons } from "./Icons"

const NavBar = () => {
    return (
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            {/* TODO MOBILE NAVBAR*/}
                            <div className="ml-4 flex lg:ml-0">
                                <Link href='/'>
                                    <Icons.logo className='h-10 w-10' />
                                </Link>
                            </div>
                            <div className='hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
                                <NavItems />
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default NavBar