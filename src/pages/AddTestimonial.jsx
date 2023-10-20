
const AddTestimonial = () => {
    const handleSubmitTestimonials = () => {
        alert('hi')
    }
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
              name="brandName"
              placeholder="User Name"
            />
          </div>
          <div className="mt-6">
            <label className="block font-medium" htmlFor="">
              User Image
            </label>
            <input
              className="border w-full px-3 text-lg py-3 outline-none mt-2"
              type="text"
              name="brandImg"
              placeholder="User Image"
            />
          </div>
          <div className="mt-6">
            <label className="block font-medium" htmlFor="">
              Review Text
            </label>
            <textarea className="resize-none mt-2 w-full h-32" name="" id="" ></textarea>
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