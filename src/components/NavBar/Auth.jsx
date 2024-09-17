import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

function Auth() {
  const { user } = {
    name: "Mert Yazıcı",
    avatar: "https://i.scdn.co/image/ab67757000003b82953b1990f385738c7ec2c8ef",
  };
  return (
    <Menu>
      <MenuButton>
        <img src={user.avatar} alt="" />
        <span>{user.name}</span>
      </MenuButton>
      <MenuItems anchor="bottom">
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/settings">
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/license">
            License
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}

export default Auth;
