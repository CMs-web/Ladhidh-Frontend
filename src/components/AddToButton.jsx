import { useNavigate } from "react-router-dom";
import { useAddCart } from "../features/Cart/useAddCart";
import Spinner from "./Spinner";

function AddToButton({ redirect = "/cart", ...props }) {
  const navigate = useNavigate();

  const { addToCart, isLoading } = useAddCart();

  const handleClick = async () => {
    const formData = {
      productId: props.id || props._id,
      quantity: 1,
    };

   addToCart(formData, {
      onSuccess: () => {
        navigate("/cart");
      },
    });
  };

  return (
    <button
      onClick={handleClick}
      className="border border-primary-dark text-sm font-semibold px-3 py-1 rounded-lg hover:text-white hover:bg-primary-dark transition flex justify-center"
    >
      {isLoading ? <Spinner /> : "Add"}
    </button>
  );
}

export default AddToButton;
