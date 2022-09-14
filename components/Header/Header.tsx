import Image from "next/image";
import React from "react";
import { FaBell } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { FcMenu } from "react-icons/fc";
import { FiSettings } from "react-icons/fi";
import { IoMdApps } from "react-icons/io";
import { Dropdown, Menu } from "antd";

type Props = {
  sideBarCollapsed: boolean;
  setSideBarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Notifications
          </a>
        ),
      },
    ]}
  />
);

const Header = ({ sideBarCollapsed, setSideBarCollapsed }: Props) => {
  return (
    <div className="flex flex-row justify-between  items-center px-2 bg-zinc-900 h-10 border-b border-purple-500">
      {/* Search */}
      <div className="relative">
        <FcMenu
          className="cursor-pointer rounded transition-all ease-out h-10 w-6"
          onClick={() => setSideBarCollapsed(!sideBarCollapsed)}
        />
      </div>

      {/* Right */}
      <div className="flex items-center justify-end flex-grow text-white">
        <FiSettings className="cursor-pointer rounded mr-3 hover:bg-gray-500 transition-all ease-out" />
        <IoMdApps className="cursor-pointer rounded mr-3   hover:bg-gray-500 transition-all ease-out" />
        <BiMenuAltRight className="cursor-pointer rounded mr-3  hover:bg-gray-500 transition-all ease-out" />
        <FaBell className="cursor-pointer rounded mr-3  hover:bg-gray-500 transition-all ease-out" />
        {/* Profile */}

        <Dropdown overlay={menu} placement="bottom">
          <Image
            src="/profile.jpeg"
            width="24"
            height="24"
            objectFit="contain"
            className="rounded-full cursor-pointer"
          />
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
