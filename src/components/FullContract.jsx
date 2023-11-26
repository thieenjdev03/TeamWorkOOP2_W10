import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/css/main.css";
import SideBar from "./SideBar";

export default function FullContract() {
  const [formData, setFormData] = useState({
    customerName: "Nguyễn Văn A",
    yearOfBirth: 1990,
    ssn: "123",
    customerAddress: "123 Đường ABC, Quận XYZ, Thành phố Hồ Chí Minh",
    mobile: "0901234567",
    propertyID: 1,
    dateOfContract: "2023-11-24",
    price: 1500000,
    deposit: 300000,
    remain: 1200000,
    status: true,
  });

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
        "https://streamapi.com:7060/api/FullContract/AddFullContract",
        formData,
      );

      console.log(response.data);
      // Handle success, e.g., redirect or show a success message
    } catch (error) {
      console.error("Error adding property:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div className="w-full flex min-h-full:">
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
          ADD FULL CONTRACT
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 ml-5">
          <label className="mt-6">
            Customer Name:
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
          </label>
          <label>
            Year Of Birth:
            <input
              type="text"
              name="yearOfBirth"
              value={formData.yearOfBirth}
              onChange={handleChange}
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
          </label>
          <label>
            SSN:
            <input
              type="date"
              name="ssn"
              value={formData.ssn}
              onChange={handleChange}
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
          </label>

          <label>
            Customer Address:
            <input
              type="text"
              name="customerAddress"
              value={formData.customerAddress}
              onChange={handleChange}
              className="border border-orange-600 rounded-lg h-10 mt-2 ml-0 w-full"
            />
          </label>

          <label>
            Mobile:
            <input
              type="number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
          </label>
          <label>
            PropertyID:
            <input
              type="text"
              name="propertyID"
              value={formData.propertyID}
              onChange={handleChange}
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
          </label>

          <label>
            Date Of Contract:
            <input
              type="date"
              name="dateOfContract"
              value={formData.dateOfContract}
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
            Deposit:
            <input
              type="number"
              name="deposit"
              value={formData.deposit}
              onChange={handleChange}
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
          </label>
          <label>
            Remain:
            <input
              type="number"
              name="remain"
              value={formData.remain}
              onChange={handleChange}
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
          </label>
          <label>
            Status:
            <input
              type="checkbox"
              name="status"
              checked={formData.status} // For controlled components, use checked instead of value for checkboxes
              onChange={(e) =>
                handleChange({ name: "status", value: e.target.checked })
              }
              className="border border-orange-600 rounded-lg mt-2 ml-0 w-full"
            />
          </label>
          {/* Add more fields based on your JSON structure */}
          <div className="flex flex-col items-center">
            <div className="flex">
              <Link
                to="/ListFullContract"
                className="py-1 flex items-center space-x-4 rounded-md group"
              >
                <button
                  type="submit"
                  className=" py-2 my-6 w-60 rounded-3xl text-sm text-center font-medium text-amber-600 focus:outline-none bg-white border border-orange-600 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
                  className=" ml-10 py-2 my-6 w-60 rounded-3xl text-sm text-center font-medium text-amber-600 focus:outline-none bg-white border border-orange-600 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
