import PancakeLogo from "../../assets/pancakeLogo.png";
import { useState } from "react";
export default function CollapseMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };
  return (
    <>
      <div>
        <ul className="main p-0 relative list-none inline-block ">
          <li className="relative inline-block  mr-2 cursor-pointer z-5">
            <img className="h-14 w-11/12 cursor-pointer " src={PancakeLogo} alt="" />
            <ul className="drop list-none absolute w-full left-0 top-100">
              <div className="relative">
                <li className="text-white text-center block p-0 align-middle rounded-lg mt-3">
                  <a href="/">Following</a>
                </li>
                <li className="text-white  block p-0 w-full align-middle text-center rounded-lg mt-3">
                  <a href="/">Explore</a>
                </li>
                <li className="text-white text-center block p-0 w-full align-middle rounded-lg mt-3">
                  <a href="/">Favorites</a>
                </li>
                <li className="text-white text-center block p-0 w-full align-middle rounded-lg mt-3">
                  <a href="/Upload">Upload</a>
                </li>
                <li className="text-white  block p-0 w-full align-middle text-center rounded-lg mt-3">
                  <a href="/">Profile</a>
                </li>
                <li className="text-white text-center block p-0 w-full align-middle rounded-lg mt-3">
                  <a href="/">Logout</a>
                </li>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}