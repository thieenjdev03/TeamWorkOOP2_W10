import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

export default function Property() {
  const [formData, setFormData] = useState({
    property_Name: "",
    description: "",
    address: "",
    area: 0,
    bed_Room: 0,
    bath_Room: 0,
    price: 0,
    installment_Rate: 0.05,
    avatar: "",
    album: "",
    type: "",
    status: "",
    service_Name: "",
    city_Name: "",
    district_Name: "",
  });

  const handleImageChange = (e, fieldName) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: URL.createObjectURL(file),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming you have an endpoint for adding properties
      const response = await axios.post(
        "https://streamapi.com:7060/api/Property/AddProperty",
        formData,
        {
          headers: {
            "Content-Type": "application/json", // Adjust the content type if needed
            // Include any other headers or authentication tokens if required
          },
        },
      );

      console.log(response.data);
      // Handle success, e.g., redirect or show a success message
    } catch (error) {
      console.error("Error adding property:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div className="w-full flex min-[2000px]:">
      <SideBar></SideBar>
      <div
        id="Content"
        className="max-w-4xl text-16 mx-auto bg-white p-8 mt-10 rounded-lg shadow-md "
      >
        <img
          className="w-full h-56 mb-4 flex flex-col items-center"
          src="https://img.freepik.com/free-vector/vietnam-ho-chi-minh-hanoi-other-skyline-with-panorama-sky-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-banner-web-site_596401-165.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699660800&semt=ais"
          alt="success"
        ></img>
        <h2 className="text-amber-800 font-semibold text-56 flex flex-col items-center">
          ADD PROPERTY
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 ml-5">
          <label>
            Avatar:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "avatar")}
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
            {formData.avatar && <img src={formData.avatar} alt="Avatar" />}
          </label>

          <label>
            Album:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "album")}
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
            {formData.album && <img src={formData.album} alt="Album" />}
          </label>
          <label>
            Property Name:
            <input
              type="text"
              name="property_Name"
              value={formData.property_Name}
              onChange={handleChange}
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
          </label>

          <label>
            Description:
            <input
              type="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border border-orange-600 rounded-lg h-10 mt-2 ml-0 w-full"
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
          </label>
          <label>
            Area:
            <input
              type="number"
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
          </label>
          <label>
            City Name:
            <input
              type="text"
              name="city_Name"
              value={formData.city_Name}
              onChange={handleChange}
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
          </label>
          <label>
            District Name:
            <input
              type="text"
              name="district_Name"
              value={formData.district_Name}
              onChange={handleChange}
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
          </label>
          <label>
            Bed_Room:
            <input
              type="number"
              name="bed_Room"
              value={formData.bed_Room}
              onChange={handleChange}
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
          </label>
          <label>
            Bath_Room:
            <input
              type="number"
              name="bath_Room"
              value={formData.bath_Room}
              onChange={handleChange}
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
          </label>

          <label>
            Price:
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
          </label>
          <label>
            Installment_Rate:
            <input
              type="number"
              name="installment_Rate"
              value={formData.installment_Rate}
              onChange={handleChange}
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
          </label>
          <label>
            Type:
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
          </label>
          <label>
            Status:
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
          </label>
          <label>
            Service Name:
            <input
              type="text"
              name="service_Name"
              value={formData.service_Name}
              onChange={handleChange}
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
          </label>
          <div className="flex flex-col items-center">
            <div className="flex">
              <Link
                to="/"
                className="py-1 flex items-center space-x-4 rounded-md group"
              >
                <button
                  type="submit"
                  className="py-2 my-6 w-60 rounded-3xl text-sm text-center font-medium text-amber-600 focus:outline-none bg-white border border-orange-600 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={() => handleClick("ListProperty")}
                >
                  Submit
                </button>
              </Link>
              <Link
                to="/home"
                className="py-1 flex items-center space-x-4 rounded-md group"
              >
                <button
                  type="submit"
                  className="ml-10 py-2 my-6 w-60 rounded-3xl text-sm text-center font-medium text-amber-600 focus:outline-none bg-white border border-orange-600 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
