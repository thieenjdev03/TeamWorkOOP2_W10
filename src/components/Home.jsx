import "../assets/css/main.css";
import { IoIosArrowDropright } from "react-icons/io";
import SideBar from "./SideBar";

export default function Home() {
  return (
    <div className="h-full">
      <div className="Wrapper min-h-full ">
        <div className="flex">
          <SideBar></SideBar>
          <h1 className="welcomeText w-full">
            Chào Mừng Bạn Đến Website Quản Lý Bất Động Sản Của Chúng Tôi
          </h1>
        </div>
      </div>
    </div>
  );
}
