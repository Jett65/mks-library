// This data will be feched from the api in the funcher
export type book = {
    id: number;
    title: string;
    isRead: boolean;
    review: string;
    rating: number
}

export const bookList: book[] = [
    {
        id: 1,
        title: "book 1",
        isRead: false,
        review: "",
        rating: 3,
    },

    {
        id: 2,
        title: "book 2",
        isRead: false,
        review: "",
        rating: 4,
    },

    {
        id: 3,
        title: "book 3",
        isRead: true,
        review: "I loved This book",
        rating: 5,
    },

    {
        id: 4,
        title: "book 4",
        isRead: false,
        review: "",
        rating: 5,
    },

    {
        id: 5,
        title: "book 5",
        isRead: true,
        review: "This book is not good",
        rating: 2,
    },

]
