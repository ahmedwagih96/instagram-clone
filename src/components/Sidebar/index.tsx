import React from "react";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";

type Props = {};

function Sidebar({}: Props) {
  return (
    <div className="fixed w-[380px]">
      <MiniProfile />
      <Suggestions />
    </div>
  );
}

export default Sidebar;
