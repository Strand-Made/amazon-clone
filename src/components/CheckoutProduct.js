import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../slices/basketSlice";
import { currencyFormatter } from "../helpers/currencyHelper";
import Select from "react-select";

const CheckoutProduct = ({ item }) => {
  const { id } = item;

  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  const options = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 2, label: "2" },
  ];
  return (
    <div className="grid grid-cols-5">
      <Image src={item.image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <h3>{item.title}</h3>
        <div className="flex">
          {Array(item.rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <div></div>
        <h4>{currencyFormatter(item.price)}</h4>

        {item.hasPrime ? (
          <div className="flex items-center space-x-2">
            <img
              className="w-12"
              loading="lazy"
              src="https://links.papareact.com/fdw"
              alt="Amazon Prime Delivery"
            />
          </div>
        ) : null}
        <div className="flex items-center space-x-5">
          <Select placeholder="1" options={options} />
          <button
            onClick={removeItemFromBasket}
            className="text-xs border-l h-4 text-gray-500 hover:underline"
          >
            <span className="px-2">Delete</span>
          </button>
          <button className="text-xs border-l h-4 text-gray-500 hover:underline ">
            <span className="px-2">Save for later</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
