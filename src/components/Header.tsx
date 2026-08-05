// import React from 'react'

import { useState } from "react"
import { User } from 'lucide-react';
import { Link } from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    return (
        <section className="fixed top-0 left-0 w-full z-50 ">
            <div className="bg-white/10 max-w-6xl mx-auto mt-7 px-10 py-6 rounded-2xl text-white border-2 border-amber-50 flex items-center justify-between">
                {/* logo */}
                <div>
                    <h1 className="">YogeshSabbani</h1>
                </div>


                {/* navigation */}
                <nav className="hidden md:block">
                    <ul className="flex gap-8">
                        <li><a href="#about">About</a></li>
                        <li><a href="#Reviews">Reviews</a></li>
                        <li><a href="#Contact">Contact</a></li>
                        <li><a href="#Services">Services</a></li>
                        <li><a href="#Products">Products</a></li>
                    </ul>

                </nav>


                {/* button */}
                <div className="hidden md:block md:flex md:gap-4">
                    <Link to='/cart'>
                        <button className=" px-2 py-1 rounded-xl bg-blue-400">Cart</button>

                    </Link>
                    <button><User /></button>
                </div>

                {/* profile */}

                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "✕" : "☰"}</button>
            </div>
            {menuOpen && (
                <div className="md:hidden max-w-5xl mx-auto text-2xl text-white px-10 bg-white backdrop-blur-2xl pt-4 pb-2  rounded-3xl flex flex-col  justify-between transition-all duration-300 ease-in-out">
                    {/* nav */}
                    <nav>
                        <ul className="text-black flex flex-col p-6 gap-4">
                            <li><a href="#about">About</a></li>
                            <li><a href="#Reviews">Reviews</a></li>
                            <li><a href="#Contact">Contact</a></li>
                            <li><a href="#Services">Services</a></li>
                        </ul>
                    </nav>
                    <hr className="text-black m-2" />
                    {/* button */}
                    <div className="p-6 pt-0">
                        <button className="w-full px-2 py-2 rounded-xl bg-blue-400">Cart</button>
                    </div>

                </div>
            )}

        </section>
    )
}

export default Header

