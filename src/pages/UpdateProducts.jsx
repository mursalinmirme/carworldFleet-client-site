import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProducts = () => {
  const getupdateItem = useLoaderData();
  const [updateItem, setupdateItem] = useState(getupdateItem);
  const { _id, name, image, brand, type, price, rating, description } =
    updateItem;

  const handleUpdateProdutc = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const updateProduct = {
      image,
      name,
      brand,
      type,
      price,
      rating,
      description,
    };
    fetch(`https://car-world-fleet-server-site.vercel.app/cars/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center-center",
            icon: "success",
            title: "Product update successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <div className="border bg-base-200 w-2/3 mx-auto pt-14 pb-20 p-10 mt-7 rounded-lg">
        <h2 className="text-center font-bold text-2xl text-gray-800">
          Update Product
        </h2>
        <form onSubmit={handleUpdateProdutc}>
          <div className="flex gap-7 items-center mt-10">
            <div className="flex-1">
              <label className="block font-medium" htmlFor="">
                Image
              </label>
              <input
                className="border w-full px-3 text-lg py-2 outline-none mt-2"
                type="text"
                name="image"
                placeholder="Product image"
                defaultValue={image}
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium" htmlFor="">
                Name
              </label>
              <input
                className="border w-full px-3 text-lg py-2 outline-none mt-2"
                type="text"
                name="name"
                placeholder="Product name"
                defaultValue={name}
              />
            </div>
          </div>
          <div className="flex gap-7 items-center mt-10">
            <div className="flex-1">
              <label className="block font-medium" htmlFor="">
                Brand
              </label>
              <input
                className="border w-full px-3 text-lg py-2 outline-none mt-2"
                type="text"
                name="brand"
                placeholder="Product brand"
                defaultValue={brand}
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium" htmlFor="">
                Type
              </label>
              <input
                className="border w-full px-3 text-lg py-2 outline-none mt-2"
                type="text"
                name="type"
                placeholder="Product type"
                defaultValue={type}
              />
            </div>
          </div>
          <div className="flex gap-7 items-center mt-10">
            <div className="flex-1">
              <label className="block font-medium" htmlFor="">
                Price
              </label>
              <input
                className="border w-full px-3 text-lg py-2 outline-none mt-2"
                type="text"
                name="price"
                placeholder="Product price"
                defaultValue={price}
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium" htmlFor="">
                Rating
              </label>
              <input
                className="border w-full px-3 text-lg py-2 outline-none mt-2"
                type="text"
                name="rating"
                placeholder="Product rating"
                defaultValue={rating}
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block font-medium" htmlFor="">
              Description
            </label>
            <input
              className="border w-full px-3 text-lg py-2 outline-none mt-2"
              type="text"
              name="description"
              placeholder="Product description"
              defaultValue={description}
            />
          </div>
          <button className="btn bg-[#CC6119] text-white hover:bg-[#64391c] w-full mt-8">
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProducts;
