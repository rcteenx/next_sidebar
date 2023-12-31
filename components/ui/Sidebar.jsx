"use client";
import { useState } from "react";
import smd from "@/content/data/siteMetaData";

import {
  BsArrowLeftShort,
  BsSearch,
  BsChevronDown,
  BsFillImageFill,
  BsReverseLayoutTextSidebarReverse,
  BsPerson,
} from "react-icons/bs";
import {
  AiOutlineFileText,
  AiOutlineBarChart,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ children }) {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Pages", link: "/pages", icon: <AiOutlineFileText /> },
    {
      title: "Media",
      link: "/media",
      spacing: true,
      icon: <BsFillImageFill />,
    },
    {
      title: "Projects",
      link: "/projects",
      icon: <BsReverseLayoutTextSidebarReverse />,
    },
    { title: "Analytics", link: "/analytics", icon: <AiOutlineBarChart /> },
    { title: "Inbox", link: "/inbox", icon: <AiOutlineMail /> },
    { title: "Profile", link: "/profile", spacing: true, icon: <BsPerson /> },
    { title: "Settings", link: "/settings", icon: <AiOutlineSetting /> },
    { title: "Logout", link: "/logout", icon: <AiOutlineLogout /> },
  ];
  const pathname = usePathname();
  return (
    <div
      className={`bg-dark-purple h-screen p-2 pt-5 lg:p-5 lg:pt-8 ${
        open ? "w-72" : "w-12 lg:w-20"
      } duration-300 relative`}
    >
      <BsArrowLeftShort
        className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
          !open && "rotate-180"
        } `}
        onClick={() => setOpen(!open)}
      />
      <div className=" inline-flex">
        <img
          src={smd.siteOwner}
          alt={smd.title}
          className={` w-6 lg:w-8 rounded cursor-pointer block float-left mr-2 duration-700 ${
            !open && "rotate-[360deg]"
          }`}
        />
        <h2
          className={`text-white origin-left font-medium lg:text-2xl duration-300 ${
            !open && "scale-0"
          }`}
        >
          Workboard
        </h2>
      </div>
      <ul className="pt-2">
        {Menus.map((menu, index) => (
          <Link key={index} href={menu.link}>
            <li
              key={index}
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                menu.spacing ? "mt-4" : "mt-1"
              } ${pathname === menu.link ? "bg-light-white rounded-md" : ""}`}
            >
              <span className="text-2xl block float-left">
                {menu.icon ? menu.icon : <RiDashboardFill />}
              </span>
              <span
                className={`text-base font-medium flex-1 duration-200 ${
                  !open && "hidden"
                }`}
              >
                {menu.title}
              </span>
              {menu.submenu && open && (
                <BsChevronDown
                  className={` ${submenuOpen && "rotate-180"}`}
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                />
              )}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
