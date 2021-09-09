import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/client";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  const [session] = useSession();

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 py-2 flex-grow">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow justify-between cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 px-4 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none "
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="flex items-center text-xs space-x-6 mx-6 whitespace-nowrap text-white">
          <div>
            <a
              onClick={!session ? signIn : signOut}
              className="link font-extrabold"
            >
              <span className="link font-light block">
                {session ? `Hello ${session.user.name}` : "Sign In"}
              </span>
              Account & Lists
            </a>
          </div>
          <div>
            <Link href="">
              <a className="link block font-extrabold">Returns</a>
            </Link>
            <Link href="">
              <a className="link block font-extrabold"> & Orders</a>
            </Link>
          </div>
          <div>
            <Link href="">
              <a className="link relative flex items-center mt-2">
                <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center text-black font-bold rounded-full">
                  4
                </span>
                <ShoppingCartIcon className="h-10" />
                <span className="hidden md:inline font-extrabold">Basket</span>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <nav className="flex items-center p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <ul className="flex items-center space-x-3">
          <li>
            <button className="link flex items-center">
              <MenuIcon className="h-6 mr-1" /> All
            </button>
          </li>
          <li>
            <Link href="">
              <a className="link "> Prime Video</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="link "> Amazon Business</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="link "> Today's Deals</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="link hidden lg:inline-flex"> Food & Grocery</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="link hidden lg:inline-flex"> Prime</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="link hidden lg:inline-flex"> Buy Again</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="link hidden lg:inline-flex"> Shopper Toolkit</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="link hidden lg:inline-flex">
                Health & Personal Care
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
