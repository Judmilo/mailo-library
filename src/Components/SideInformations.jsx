import React from "react";
import { useLibrary } from "../Context/LibraryContext";
import RecomendItem from "./RecomendItem";

export default function SideInformations() {
    const { authors, weekly} = useLibrary();
    return (
        <aside className="flex flex-col w-[800px] gap-20 mt-20">
            <div className="flex flex-col gap-2">
                <h2>Authors</h2>
                <div className="flex flex-col gap-3">
                    {authors.map((author) => (
                    <span className="cursor-pointer font-medium shadow-md w-[300px] p-2 hover:text-orange-600 text-[.8rem]">
                        {author}
                    </span>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h2>Recommendations of the Week</h2>
                <div className="flex flex-col gap-6">
                    {weekly?.works
                    ? weekly?.works.map((book) => (
                        <RecomendItem
                            title={book?.title}
                            author={book?.author_name}
                            cover={book?.cover_i}
                        />
                        ))
                    : null}
                </div>
            </div>
        </aside>
    );
}
