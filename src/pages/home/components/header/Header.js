import React from "react";
import { SuperInfo } from "./components/SuperInfo";
import { Menu } from "./components/Menu";

export const Header = props => (
  <header>
    <SuperInfo />
    <Menu />
  </header>
);
