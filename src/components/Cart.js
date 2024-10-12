import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center  m-2 p-2">
      <h1 className=" text-5xl font-bold ">Cart</h1>
      <div>
        <button
          className="p-2 bg-black text-white font-bold shadow-lg rounded-md w-24 m-10"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>YOUR CART IS EMPTY</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
