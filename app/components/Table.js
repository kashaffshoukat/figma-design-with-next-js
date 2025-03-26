"use client";
import { useState, useRef, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const FigmaDesign = () => {
  const [activeTab, setActiveTab] = useState("Cities");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const [isClient, setIsClient] = useState(false); 

  const tabs = ["Cities", "Areas", "Provinces"];
  const tabRefs = useRef([]);

  useEffect(() => {
    setIsClient(true); 

    const activeIndex = tabs.indexOf(activeTab);
    if (tabRefs.current[activeIndex]) {
      const { offsetLeft, offsetWidth } = tabRefs.current[activeIndex];
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  const tableData = [
    {
      name: "Islamabad",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5j-ENQjZTlwwLsKaQ7eorVFMU-UjPV-QEQQ&s",
      values: [7, 7, 7, 7, 7, 7, 7],
    },
    {
      name: "Karachi",
      image:
        "https://www.aku.edu/news/PublishingImages/_000_Dr%20Zainad%20web.jpg",
      values: [4, 4, 4, 4, 4, 4, 4],
    },
    {
      name: "Lahore",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4KB4OtnKAtPenyi0bLHpyJBFua6xyE3gxw&s",
      values: [2, 2, 2, 2, 2, 2, 2],
    },
    {
      name: "Faisalabad",
      image:
        "https://media.licdn.com/dms/image/v2/D4E12AQHJHiU8gwuSEQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1677763740653?e=2147483647&v=beta&t=3ZKlLU1CnLExxhj2sKAT5cDsfXhKtajd6x4zUEoaMQo",
      values: [6, 6, 6, 6, 6, 6, 6],
    },
  ];

  if (!isClient) return null; 

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-customGreen text-white h-full p-4">
        <h2 className="text-2xl font-bold mb-4 mt-12">Admin Panel</h2>
        <ul className="space-y-2">
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer mt-12">
            Platform Users
          </li>
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">
            Business Operators
          </li>
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">
            Offers
          </li>
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">
            Local scene
          </li>
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">
            Categories
          </li>
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">
            Offers
          </li>
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">
            Tags and Attributes
          </li>
        </ul>
      </div>

      <div className="flex-1 p-6">
        <div className="bg-yellow-100 p-4 rounded-lg mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Location &gt; Cities
          </h1>
        </div>

        <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
          <div className="relative flex gap-6">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                ref={(el) => (tabRefs.current[index] = el)}
                className={`relative text-lg font-semibold pb-2 transition-all ${
                  activeTab === tab ? "text-red-500" : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
            <div
              className="absolute bottom-0 h-1 bg-red-500 transition-all duration-300"
              style={{
                width: `${underlineStyle.width}px`,
                left: `${underlineStyle.left}px`,
              }}
            ></div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search here"
              className="border border-gray-300 p-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 w-40"
            />
            <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-700 font-semibold">
              SEARCH
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-4">
            <button className="border border-gray-300 px-12 py-1 rounded-md text-gray-400 font-semibold">
              Apply Filter
            </button>
            <button className="border border-red-500 text-red-400 px-8 py-1 rounded-md hover:bg-red-100 font-semibold">
              FILTER
            </button>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-gray-500">Sort By:</span>
            <select className="border border-gray-300 px-8 py-1 pr-2 rounded-md text-gray-700">
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-4 text-left">Image</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Cities</th>
                <th className="py-3 px-4 text-left">Categories</th>
                <th className="py-3 px-4 text-left">Local Scenes</th>
                <th className="py-3 px-4 text-left">Offers</th>
                <th className="py-3 px-4 text-left">Claimed</th>
                <th className="py-3 px-4 text-left">Active</th>
                <th className="py-3 px-4 text-left">Passive</th>
                <th className="py-3 px-4 text-left">Edit</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {tableData.map((row, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <img
                      src={row.image}
                      alt={row.name}
                      className="w-12 h-12 rounded-md object-cover"
                    />
                  </td>
                  <td className="py-3 px-4">{row.name}</td>
                  {row.values.map((value, idx) => (
                    <td key={idx} className="py-3 px-4 text-green-500 cursor-pointer">
                      {value}
                    </td>
                  ))}
                  <td className="py-3 px-4 mt-4 flex gap-3 items-center">
  <FaEdit className="text-green-500 hover:text-green-700 text-base cursor-pointer" />
  <FaTrash className="text-red-500 hover:text-red-700 text-base cursor-pointer" />
</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FigmaDesign;
