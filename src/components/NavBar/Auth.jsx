import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

function Auth() {
  const user = {
    name: "Mert Yazıcı",
    avatar: "https://i.scdn.co/image/ab67757000003b82953b1990f385738c7ec2c8ef",
  };

  return (
    <Menu>
      <MenuButton className="flex items-center space-x-2">
        <img
          src={user.avatar}
          alt=""
          className="w-8 h-8 rounded-full bg-gray-500 hover:bg-gray-200"
        />
        <span>{user.name}</span>
      </MenuButton>
      <MenuItems anchor="bottom">
        <MenuItem>
          <a
            className="flex flex-col justify-center align-middle block font-bold  data-[focus]:bg-gray-100 text-opacity-30 text-darkgreen bg-backdrop"
            href="/profile"
          >
            Profile
          </a>
        </MenuItem>
        <MenuItem>
          <a
            className="flex flex-col justify-center align-middle block font-bold  data-[focus]:bg-gray-100 text-opacity-30 text-darkgreen bg-backdrop"
            href="/settings"
          >
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a
            className="flex flex-col justify-center align-middle block font-bold  data-[focus]:bg-gray-100 text-opacity-30 text-darkgreen bg-backdrop"
            href="/logout?logout"
          >
            Log Out
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}

export default Auth;
