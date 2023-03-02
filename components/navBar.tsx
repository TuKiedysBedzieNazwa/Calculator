import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  
  return (
    <div className="flex justify-around items-center h-24 w-full absolute bg-white/10 select-none">
      <Button name="Home" />
      <Button name="Calculator" />
      <Button name="Tetris" />
      <Button name="About"/>
    </div>
  )
}

const Button = (props: any) => (
  <Link href={`/${props.name !== "Home" ? props.name.toLowerCase() : ""}`}>
    <div className={`text-white font-bold text-2xl uppercase tracking-widest
      ${useRouter().pathname == `/${props.name !== "Home" ? props.name.toLowerCase() : ""}` ? "after:w-full" : "after:w-0"}
      after:h-1 after:bg-white after:rounded-sm after:block
      hover:after:w-full after:duration-200 after:delay-200
    `}>
      {props.name}
    </div>
  </Link>
)

export default NavBar;