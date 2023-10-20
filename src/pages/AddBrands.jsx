import Swal from "sweetalert2";

const AddBrands = () => {
  const handleAddBrands = (e) => {
    e.preventDefault();
    const form = e.target;
    const brandName = form.brandName.value;
    const brandImg = form.brandImg.value;
    const newBrand = { brandName, brandImg };
    console.log(newBrand);
    fetch(
      "https://car-world-fleet-server-site-eehj3on19-mursalinmirme.vercel.app/brands",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newBrand),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            position: "center-center",
            icon: "success",
            title: "Brand Added Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <div className="border bg-base-200 w-[550px] mx-auto pt-14 pb-20 p-10 mt-7 rounded-lg">
        <h2 className="text-center font-bold text-2xl text-gray-800">
          Add a New Brand
        </h2>
        <form onSubmit={handleAddBrands}>
          <div className="mt-10">
            <label className="block font-medium" htmlFor="">
              Brand Name
            </label>
            <input
              className="border w-full px-3 text-lg py-3 outline-none mt-2"
              type="text"
              name="brandName"
              placeholder="Brand Name"
            />
          </div>
          <div className="mt-10">
            <label className="block font-medium" htmlFor="">
              Brand Image
            </label>
            <input
              className="border w-full px-3 text-lg py-3 outline-none mt-2"
              type="text"
              name="brandImg"
              placeholder="Brand Image"
            />
          </div>
          <button className="btn mt-12 bg-[#CC6119] text-white hover:bg-[#64391c] w-full h-[52px]">
            Add Brand
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBrands;
