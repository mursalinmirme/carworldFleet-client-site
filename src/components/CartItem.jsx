import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CartItem = ({ cart, myCarts, setMyCarts }) => {
  console.log(cart);
  const handleRemoveCart = (deleteId) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete '${cart?.name}' from cart`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://car-world-fleet-server-site.vercel.app/carts/${deleteId}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                position: "center-center",
                icon: "success",
                title: "Your cart delete successfully.",
                showConfirmButton: false,
                timer: 2000,
              });
              const updateCarts = myCarts.filter(
                (singleCart) => singleCart._id !== deleteId
              );
              setMyCarts(updateCarts);
            }
          });
      }
    });
  };
  return (
    <div className="flex items-center border rounded-lg shadow-md gap-6 p-5">
      <img className="w-40 h-36" src={cart?.image} alt="" />
      <div className="">
        <Link to={`/brandsCar/${cart?.brand}/${cart?._id}`}>
          <h6 className="text-xl font-semibold">{cart?.name}</h6>
        </Link>
        <h5 className="font-medium mt-3">Type: {cart?.type}</h5>
        <h5 className="font-medium mt-3">Price: {cart?.price}</h5>
        <ReactStars
          count={5}
          edit={false}
          half={true}
          value={parseInt(cart?.rating)}
          size={25}
          activeColor="#CC6119"
        ></ReactStars>
        <button
          onClick={() => handleRemoveCart(cart?._id)}
          className="px-5 rounded-md mt-2 bg-[#CC6119] text-white h-10 capitalize hover:bg-[#fd8433]"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
