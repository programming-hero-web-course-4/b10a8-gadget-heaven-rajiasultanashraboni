import toast from "react-hot-toast";

// get all from local
const getAllCarts = () => {
  const data = localStorage.getItem("cart");
  if (data) {
    const getAllCarts = JSON.parse(data);
    return getAllCarts;
  } else {
    return [];
  }
};
// add cart local storage
const addCarts = (cart) => {
  const cartArray = getAllCarts();
  const isExist = cartArray.find((item) => item.product_id == cart.product_id);
  if (isExist) {
    return toast.error("Your products is all ready exists in Cart");
  }
  cartArray.push(cart);
  localStorage.setItem("cart", JSON.stringify(cartArray));
  toast.success("Your Products is Successfully added in Cart!");
};
// remove
const removeLocal = (id) => {
  const cartArray = getAllCarts();
  const reamin = cartArray.filter((data) => data.product_id != id);
  localStorage.setItem("cart", JSON.stringify(reamin));
  toast.error("Your Products is Successfully Removed from Cart!");
};
// all clean
const allClean = () => {
  localStorage.removeItem("cart");
};
export { addCarts, getAllCarts, removeLocal, allClean };
