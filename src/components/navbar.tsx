import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6 ">
            <div className="flex flex-shrink-0 items-center">
                <h1 className="mx-2 w-10 text-4xl">AE</h1>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <Link href="https://www.linkedin.com/in/andr%C3%A9-albuquerque-ae001/">
                    <FaLinkedin />
                </Link>
                <Link href="https://github.com/andre-albuquerque01">
                    <FaGithub />
                </Link>
            </div>
        </nav>
    )
}
