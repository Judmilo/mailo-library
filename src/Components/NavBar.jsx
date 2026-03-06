import React from "react";
import { BsSearch } from "react-icons/bs";
import { useLibrary } from "../Context/LibraryContext";

export default function NavBar() {
    const {searchTitle, title, setTitle} = useLibrary()

    return (
        <>
        <nav className="flex w-full justify-around items-center lg:px-10 py-5 bg-blue-800 text-white sm:px-2">
            <h1 className="font-bold font-[Open Sans] text-xl text-center max-[400px]:text-sm lg:text-2xl">
                Mailo Library
            </h1>
            <div className="flex items-center rounded-2xl bg-white">
                <input
                    type="text"
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Search a Book Title"
                    className="text-xs lg:w-[500px] text-black lg:p-1 lg:px-4 bg-transparent lg:text-xl outline-none w-full max-[400px]:p-2"
                />
                <button onClick={() => searchTitle(title)} className="text-xl font-bold bg-yellow-400 p-1 h-8 px-2 rounded-2xl">
                    <BsSearch />
                </button>
            </div>
        </nav>
        </>
    );
}
