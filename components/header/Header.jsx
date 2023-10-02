import Link from "next/link"

export default function Navbar() {
    return (
        <header>
        <nav>
            <div className="border-gray-200 bg-gray-300 dark:bg-gray-800 dark:border-gray-700 p-2 space-x-2">
                <Link href={"/"}>Logo</Link>
                <Link href={"/"}>Home</Link>
            </div>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href={"/"}>Page Title</Link>
                
                <div className="hidden w-full md:block md:w-auto space-x-2" id="navbar-default">
                    <Link href={"/"}>Menu 1</Link>
                    <Link href={"/"}>Menu 2</Link>
                </div>
            </div>
        </nav>
        </header>
    )
}