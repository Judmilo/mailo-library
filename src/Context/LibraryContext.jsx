import React, { createContext, useContext, useEffect, useState } from "react";

const LibraryContext = createContext(null);
///trending/daily.json
export default function LibraryProvider({ children }) {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [weekly, setWeekly] = useState([]);
    const [isSearch, setIsSearch] = useState(false)
    const [title, setTitle] = useState('')
    const [selected, setSelected] = useState('')
    const [descKey, setDescKey] = useState('')
    const [description, setDescription] = useState([])

    const authors = [
        "William Shakespeare",
        "Jane Austen",
        "Charles Dickens",
        "Agatha Christie",
        "J. R. R. Tolkien",
        "J. K. Rowling",
    ];

    async function searchAuthor(authorName) {
        try {
            setIsSearch(true)
            const response = await fetch(
                `https://openlibrary.org/search/authors.json?q=${encodeURIComponent(authorName)}`,
            );

            const data = await response.json();
            if (data) {
                setLoading(false);
                console.log(data)
                setBooks(data);
            }
        } catch {
            console.log(`Erro ao carregar a API`)
        }

    }

    async function searchTitle(title) {
        try {
            setLoading(true)
            setIsSearch(true)

            if (title == '' || !title) return
            const response = await fetch(
                `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}&limit=20`,
            );

            const data = await response.json();
            if (data) {
                setLoading(false);
                setBooks(data);
            }
            setTitle('')
        } catch (e) {
            console.log(`Erro: ${e}`)
        }

    }

    async function popularBooks() {
        const response = await fetch(
            `https://openlibrary.org/trending/daily.json?limit=20`,
        );

        const data = await response.json();
        if (data) {
            setLoading(false);
            setBooks(data);
        }
    }

    async function Recommendations() {
        const response = await fetch(
            `https://openlibrary.org/trending/weekly.json?limit=5`,
        );
        const data = await response.json();

        if (data) {
            setLoading(false);
            setWeekly(data);
        }
    }

    async function getSynopsis(workKey) {
        const response = await fetch(
            `https://openlibrary.org${workKey}.json`,
        );

        const data = await response.json();
        if (data) {
            setLoading(false);
            setDescription(data);
        }
    }

    useEffect(() => {
        setLoading(true);
        popularBooks();
        Recommendations();
    }, []);

    async function getBooks(search) {
        setSelected(search)
        if (search) {
            try {
                if (search === "All") {
                    setLoading(true);
                    const response = await fetch(
                        `https://openlibrary.org/trending/daily.json?limit=20`,
                    );
                    const data = await response.json();

                    if (data) {
                        setLoading(false);
                        setBooks(data);
                    }
                } else {
                    setLoading(true);
                    const response = await fetch(
                        `https://openlibrary.org/subjects/${search}.json?limit=20`,
                    );
                    const data = await response.json();
                    if (data) {
                        setLoading(false);
                        setBooks(data);
                    }
                }
            } catch (e) {
                console.log(`Erro: ${e}`);
            }
        } else {
            console.log("Ocorreu Um Erro");
        }
    }
    return (
        <LibraryContext.Provider
            value={
                {
                    books, getBooks, popularBooks,
                    loading, authors, weekly, searchTitle,
                    setTitle, searchAuthor, isSearch, title,
                    getSynopsis, description,
                    descKey, setDescKey, selected
                }}
        >
            {children}
        </LibraryContext.Provider>
    );
}

export function useLibrary() {
    return useContext(LibraryContext);
}
