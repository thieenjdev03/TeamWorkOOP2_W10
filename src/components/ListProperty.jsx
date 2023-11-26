import { useState, useEffect } from "react";
import "../assets/css/main.css";
import SideBar from "./SideBar";
export default function ListProperty() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          "https://streamapi.com:7060/api/Property/GetAllProperty",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }

        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error.message);
      }
    };

    fetchProperties();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (  
    <div className="w-full flex min-[2000px]:">
      <SideBar></SideBar>
      <div
        id="Content"
        className="max-w-4xl min-h-screen text-16 mx-auto bg-white p-8 mt-10 rounded-lg shadow-md"
      >
        <h2 className="text-amber-800 font-semibold text-48 flex flex-col items-center py-8">
          LIST PROPERTY
        </h2>
        <div className="ml-auto">
          <a
            href="/property"
            className="py-1 flex items-center space-x-4 rounded-md group"
          >
            <button
              type="submit"
              className=" py-2 ml-8 my-6 w-24 rounded-xl text-sm text-center font-medium text-amber-600 focus:outline-none bg-white border border-orange-600 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              ADD
            </button>
          </a>
        </div>
        <table className="inputFrom table-auto flex flex-col items-center">
          <thead>
            <tr>
              <th className="px-4 py-2 ">Property Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Installment Rate</th>
              <th className="px-4 py-2">Bed Room</th>
              <th className="px-4 py-2">Bath Room</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property.id}>
                <td className="border px-4 py-2">{property.property_Name}</td>
                <td className="border px-4 py-2">{property.price}</td>
                <td className="border px-4 py-2">
                  {property.installment_Rate}
                </td>
                <td className="border px-4 py-2">{property.bed_Room}</td>
                <td className="border px-4 py-2">{property.bath_Room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
