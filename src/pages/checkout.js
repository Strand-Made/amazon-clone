import Image from "next/image";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { currencyFormatter } from "../helpers/currencyHelper";
import { useSession } from "next-auth/client";

const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [session] = useSession();
  return (
    <div className="bg-gray-100">
      <Header />
      <main class="lg:flex max-w-screen-2xl mx-auto">
        {/* left  */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? "Your Basket is Empty" : "Shopping Basket"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct key={i} item={item} />
            ))}
          </div>
        </div>
        {/* right  */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 ? (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{" "}
                <span className="font-bold"> {currencyFormatter(total)}</span>
                <button
                  className={`button mt-2 ${
                    !session
                      ? "from-gray-300 to-gray-500 border-gray-200 text-gray-300"
                      : null
                  }`}
                >
                  {!session ? "Sign in" : "Proceed to checkout"}
                </button>
              </h2>
            </>
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
