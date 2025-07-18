import { getCategoryList } from "@/app/utils/api";
import Image from "next/image";
import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";
import CategoriesHeader from "./categoriesHeader";
import CartBtn from "./cartBtn";

export default async function Header() {
    const categories = await getCategoryList();
    return (
        <header className="flex flex-col mb-20">
            <div className="w-full h-15 flex justify-between items-center px-5 border-b border-gray-600 bg-primary-background text-light-text fixed z-10">
                <Link href="/">
                    <div className="flex flex-row items-center gap-2">
                        <Image src="/favi.png" alt="logo" width={30} height={30} className=""/>
                        <h1 className="font-semibold">Ecom App</h1>
                    </div>
                </Link>
                <form action="/search"
                    method="GET"
                    className="max-w-3xl border-1 border-gray-600 rounded-lg flex grow shrink overflow-hidden"
                >
                    <input type="text" name="q" placeholder="Search for products" className="py-2 px-4 flex grow bg-primary-foreground text-dark-text" />
                    <button type="submit" className="py-2 px-4 bg-secondary-accent-color text-dark-text cursor-pointer">
                        <IoSearchSharp size={20} />
                    </button>
                </form>
                <div className="flex gap-5">
                    <Link href="/login">
                        <button className="cursor-pointer">Login</button>
                    </Link>
                    <CartBtn/>
                </div>
            </div>
            <CategoriesHeader categories={categories} />
        </header>
    )
}