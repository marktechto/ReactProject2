const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// const { title, publicationDate, author } = book;
// console.log(title, author, publicationDate);
// const updateBook = {
//   ...book,
//   moviePublicationDate: "2001-12-19",
//   pages: 1210,
// };
// console.log(0 && "Jonas");

// function getReiewCount(book) {
//   const reviewsCount = book.reviews.goodreads.reviewsCount;
//   const librarything = book.reviews.librarything?.reviewsCount ?? 0;
//   return reviewsCount + librarything;
// }
// console.log(getReiewCount(book));
// console.log("Hi");
const books = getBooks();
const titles = books.map((book) => book.title);
console.log(titles);
const products = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Smartphone", price: 499, inStock: false },
  { id: 3, name: "Tablet", price: 299, inStock: true },
  { id: 4, name: "Headphones", price: 199, inStock: false },
  { id: 5, name: "Smartwatch", price: 249, inStock: false },
  { id: 6, name: "TV", price: 999, inStock: true },
  { id: 7, name: "Pc Charger", price: 4990, inStock: false },
  { id: 8, name: "Radio", price: 299, inStock: true },
  { id: 9, name: "Desktop", price: 199, inStock: false },
  { id: 10, name: "Clock", price: 249, inStock: false },
];
const stockProducts = products.filter((product) => product.inStock);
const stockProductNames = stockProducts.map((product) => product.name);
const longPages = books.filter((book) => book.pages > 500);
const totalPages = books.reduce((acc, book) => acc + book.pages, 10);
console.log(totalPages);
const arr = [87, 98, 99, 100, 67, 76, 98];
const sorted = arr.sort((a, b) => a - b);
sorted;
sorted.length;
const newBook = {
  id: 8,
  title: "Fikr Eske Mekabr",
  author: "Haddis Alemayehu",
};
const UpdatedBooks = [...books, newBook];
UpdatedBooks;
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => console.log(json));
