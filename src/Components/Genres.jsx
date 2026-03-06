import React from "react";
import { useLibrary } from "../Context/LibraryContext";

export default function Genres() {
    const { getBooks, selected } = useLibrary();
    console.log(selected);
    return (
        <ul className="flex items-center text-xs mx-4 mt-6 lg:ml-60">
            <h2 className="w-[20%] lg:w-[40%] lg:text-[1rem]">Genres</h2>
            <div className="flex gap-1 justify-between items-center w-[80%] lg:w-[60%] cursor-pointer text-[9px] lg:text-sm">
                <li
                    onClick={() => getBooks("all")}
                    className={selected === "all" ? "border-b-4 border-b-orange-300 pb-2" : ""}
                >
                    <span>Popular</span>
                </li>
                <li
                    onClick={() => getBooks("business")}
                    className={selected === "business" ? "border-b-4 border-b-orange-300 pb-2" : ""}
                >
                    Business
                </li>
                <li>
                    <select
                        class="block w-[50px] h-[30px] lg:w-full lg:h-full
                                p-3
                                pr-10
                                text-gray-700
                                bg-white
                                border border-gray-300
                                rounded-lg
                                shadow-sm
                                focus:outline-none
                                focus:ring-2 focus:ring-blue-500
                                focus:border-blue-500
                                appearance-none"
                    >
                        <option disabled selected >--Select--</option>
                        <option onClick={() => getBooks("fiction")}>Fiction</option>
                        <option onClick={() => getBooks("fantasy")}>Fantasy</option>
                        <option onClick={() => getBooks("mystery")}>Mystery</option>
                        <option onClick={() => getBooks("romance")}>Romance</option>
                        <option onClick={() => getBooks("novel")}>Novel</option>
                        <option onClick={() => getBooks("horror")}>Horror</option>
                        <option onClick={() => getBooks("science fiction")}>Sci-fi</option>
                        <option onClick={() => getBooks("suspense")}>Suspense</option>
                        <option onClick={() => getBooks("action")}>Action</option>
                    </select>
                </li>
                <li
                    onClick={() => getBooks("philosophy")}
                    className={
                        selected === "philosophy" ? "border-b-4 border-b-orange-300 pb-2" : ""
                    }
                >
                    Philosophy
                </li>
                <li
                    onClick={() => getBooks("biography")}
                    className={selected === "biography" ? "border-b-4 border-b-orange-300 pb-2" : ""}
                >
                    Biography
                </li>
            </div>
        </ul>
    );
}
