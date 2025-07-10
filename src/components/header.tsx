import { IoSearchSharp } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

export default function Header() {
    return (
        <header className="w-full h-15 flex justify-between items-center px-5 border-b border-gray-600 bg-primary-background text-light-text">
            <h1 className="font-semibold">Ecom App</h1>
            <form action="/search"
                method="GET"
                className="max-w-3xl border-1 border-gray-600 rounded-lg flex grow shrink overflow-hidden"
            >
                <input type="text" name="q" placeholder="Search for products" className="py-2 px-4 flex grow bg-primary-foreground text-dark-text" />
                <button type="submit" className="py-2 px-4 bg-secondary-accent-color text-dark-text">
                    <IoSearchSharp size={20} />
                </button>
            </form>
            <div className="flex gap-5">
                <button>Login</button>
                <button>
                    <LuShoppingCart size={25} />
                </button>
            </div>
        </header>
    )
}