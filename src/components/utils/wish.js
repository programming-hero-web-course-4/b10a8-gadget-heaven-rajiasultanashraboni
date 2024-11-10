import toast from "react-hot-toast";

// get all from local
const getAllWish = () => {
  const data = localStorage.getItem("wish");
  if (data) {
    const getAllCarts = JSON.parse(data);
    return getAllCarts;
  } else {
    return [];
  }
};
// add cart local storage
const addWish = (cart) => {
  const cartArray = getAllWish();
  const isExist = cartArray.find((item) => item.product_id == cart.product_id);
  if (isExist) {
    return toast.error("Your products is all ready exists");
  }
  cartArray.push(cart);
  localStorage.setItem("wish", JSON.stringify(cartArray));
  toast.success("Your Products is Successfully added in wish lists!");
};
// remove
const removeWish = (id) => {
  const cartArray = getAllWish();
  const reamin = cartArray.filter((data) => data.product_id != id);
  localStorage.setItem("wish", JSON.stringify(reamin));
  //   toast.error("Your Products is Successfully Removed!");
};
// all clean
const allClean = () => {
  localStorage.clear();
};
export { addWish, getAllWish, removeWish, allClean };
