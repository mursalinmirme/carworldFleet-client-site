import Swal from "sweetalert2";

const AddTestimonial = () => {
  const handleSubmitTestimonials = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const userImg = form.userImg.value;
    const reviewTxt = form.reviewTxt.value;
    const newReview = { userName, userImg, reviewTxt };
    console.log(newReview);
    fetch("https://car-world-fleet-server-site.vercel.app/testimonials", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            position: "center-center",
            icon: "success",
            title: "Review submite Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <div className="border bg-base-200 w-[550px] mx-auto pt-14 pb-12 p-10 mt-7 rounded-lg">
        <h2 className="text-center font-bold text-2xl text-gray-800">
          Give a Experience Review
        </h2>
        <form onSubmit={handleSubmitTestimonials}>
          <div className="mt-10">
            <label className="block font-medium" htmlFor="">
              User Name
            </label>
            <input
              className="border w-full px-3 text-lg py-3 outline-none mt-2"
              type="text"
              name="userName"
              placeholder="User Name"
              required
            />
          </div>
          <div className="mt-6">
            <label className="block font-medium" htmlFor="">
              User Image
            </label>
            <input
              className="border w-full px-3 text-lg py-3 outline-none mt-2"
              type="text"
              name="userImg"
              placeholder="User Image"
              required
            />
          </div>
          <div className="mt-6">
            <label className="block font-medium" htmlFor="">
              Review Text
            </label>
            <textarea
              className="resize-none border-none p-3 outline-none mt-2 w-full h-32"
              name="reviewTxt"
              required
              id=""
            ></textarea>
            {/* <input
              className="border w-full px-3 text-lg py-3 outline-none mt-2"
              type="text"
              name="brandImg"
              placeholder="Brand Image"
            /> */}
          </div>
          <button className="btn mt-12 bg-[#CC6119] text-white hover:bg-[#64391c] w-full h-[52px]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTestimonial;
