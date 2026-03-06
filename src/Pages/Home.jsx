import React from "react";
import { useLibrary } from "../Context/LibraryContext";
import { Circles } from "react-loader-spinner";
import BookItem from "../Components/BookItem";
import SideInformations from "../Components/SideInformations";

export default function Home() {
    const { books, loading, isSearch, getSynopsis } = useLibrary();
    return (
        <section className="flex flex-col lg:flex-row gap-4 mt-10 mx-5 w-full max-w-full">
            <div className="grid lg:grid-cols-2 lg:order-2 gap-3">
                {loading ? (
                <div className="min-h-screen w-full flex justify-center items-center">
                    <Circles
                    height={"200"}
                    width={"200"}
                    color="rgb(230, 200, 10)"
                    visible={true}
                    />
                </div>
                ) : isSearch && books?.docs ? (
                books?.docs.map((book) => (
                    <BookItem
                    authors={book?.author_name}
                    title={book?.title}
                    cover={book?.cover_id || book?.cover_i}
                    bookKey={book?.key}

                    />
                ))
                ) : books?.works ? (
                books?.works.map((book) => (
                    <BookItem
                    authors={book?.authors || book?.author_name}
                    title={book?.title}
                    cover={book?.cover_id || book?.cover_i}
                    Synopsis={() => getSynopsis(book?.key)}
                    />
                ))
                ) : (
                <span>Nada Encontrado</span>
                )}
            </div>
            <SideInformations/>
        </section>
    );
}
