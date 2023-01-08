import React, { useState } from "react"
import NavBar from "../../components/navBar/navBar";

const about = () => {
  

  return (
    <>
      <NavBar />
      <main className="w-full h-full flex justify-center items-center">
        <div className="bg-white/10 h-104 w-160 select-none rounded-2xl text-3xl font-medium text-white
        flex items-center justify-center text-center"
        >
          This is web Calculator<br/>
          depend on ReactJS, nextJS<br/>
          and tailwind css as css framework :)
        </div>
      </main>
    </>
  )
}

export default about;