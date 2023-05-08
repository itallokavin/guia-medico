import Sidebar from "@/components/Sidebar/sidebar"
import Navbar from "@/components/Sidebar/navbar"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import Logo from "../../assets/img/logo.png"

export default function Home() {
  return (
      <main className="">
        <div className="hidden max-sm:block">
          <Navbar />
        </div>
        <div className="max-sm:hidden">
          <Sidebar />
        </div>
        
      </main>
      
    )
}
