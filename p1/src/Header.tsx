import React from "react";

type PropsType = {
  course: string;
}
const Header = (props: PropsType) => (
  <h1>{props.course}</h1>
);

export default Header;