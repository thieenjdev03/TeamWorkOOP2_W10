import { IoIosArrowDropright } from "react-icons/io";

function SideBar() {
  return (
    <div className="h-full w-72">
      <div className="SideBar bg-neutral-800 pt-10">
        <div className="LogoSection w-full h-26 flex justify-center items-center">
          <img
            className="h-16"
            src="https://vuainnhanh.com/wp-content/uploads/2023/02/logo-van-lang-896x1024-1.png"
            alt=""
          />
        </div>
        <ul className="flex flex-col gap-6 p-6 menuItems mt-28">
          <a href="/Property">
            <li className="flex items-center gap-2 w-full relative sideBarItem">
              <button className="text-16-500 pr-9 text-custom text-white navText w-28">
                Property
              </button>
              <IoIosArrowDropright className="text-white absolute right-4" />
            </li>
          </a>
          <a href="/ListProperty">
            <li className="flex items-center gap-2 w-full relative sideBarItem">
              <button className="text-16-500 pr-9 text-custom text-white navText w-28">
                List Property
              </button>
              <IoIosArrowDropright className="text-white absolute right-4" />
            </li>
          </a>
          <a href="/FullContract">
            <li className="flex items-center gap-2 w-full relative sideBarItem">
              <button className="text-16-500 pr-9 text-custom text-white navText w-28">
                Full Contract
              </button>
              <IoIosArrowDropright className="text-white absolute right-4" />
            </li>
          </a>
          <a href="/ListFullContract">
            <li className="flex items-center gap-2 w-full relative sideBarItem">
              <button className="text-16-500 pr-9 text-custom text-white navText w-28">
                List Full Contract
              </button>
              <IoIosArrowDropright className="text-white absolute right-4" />
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
