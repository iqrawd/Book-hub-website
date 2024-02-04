// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// import { getDatabase, ref, push, set, onChildAdded } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js';

// document.addEventListener("DOMContentLoaded", function () {
//     const firebaseConfig = {
//         apiKey: "AIzaSyCog3iTo-dbPq_32zI0UUq_W5-T9JOW8gk",
//         authDomain: "shopping-cart-f7ca7.firebaseapp.com",
//         databaseURL: "https://shopping-cart-f7ca7-default-rtdb.firebaseio.com",
//         projectId: "shopping-cart-f7ca7",
//         storageBucket: "shopping-cart-f7ca7.appspot.com",
//         messagingSenderId: "678738300841",
//         appId: "1:678738300841:web:2eedd3fe4859a2e861beb8"
//     };
//     const app = initializeApp(firebaseConfig)
//     const database = getDatabase(app)
//     const auth = getAuth(app);
//     const BooksInDBForm = ref(database, "Books")

//     const bookList = document.getElementById('book-list');
//     const addBookForm = document.getElementById('add-book-form');
//     let displayedBooks = []; // Array to keep track of displayed books
//     let user;


//     onAuthStateChanged(auth, (_user) => {
//         user = _user;
//         if (user) {
//             // User is logged in
//             console.log("User is logged in:", user.uid);

//         } else {
//             // User is logged out
//             console.log("User is logged out");
//             // Clear any data or UI related to the user
//         }
//     });

//     addBookForm.addEventListener("submit", function (event) {
//         event.preventDefault();

//         // Retrieve form values
//         const titleValue = document.getElementById('add-title').value.trim();
//         const authorValue = document.getElementById('add-author').value.trim();
//         const imageUrlValue = document.getElementById('add-image').value.trim();
//         const BookUrlValue = document.getElementById('book-url').value.trim();

//         if (titleValue === '' || authorValue === '' || imageUrlValue === '') {
//             alert('Fields cannot be empty! Please fill in both Title and Author.');
//         } else {
//             const newBook = {
//                 title: titleValue,
//                 author: authorValue,
//                 imageUrl: imageUrlValue,
//                 BookUrl: BookUrlValue,
//             };

//             const isBookDisplayed = displayedBooks.some(book => book.title === newBook.title && book.author === newBook.author);

//             const userBooksRef = ref(database, `Users/${user.uid}/userBooks`);
//             const newBookRef = push(userBooksRef);
//             set(newBookRef, newBook);

//             bookList.addEventListener("click", function (event) {
//                 const readBookLink = event.target.closest('.read-book-link');
//                 if (readBookLink) {
//                     event.preventDefault();

//                     const bookUrl = readBookLink.getAttribute('href');

//                     // Check if the book has a valid URL
//                     if (bookUrl) {
//                         window.open(bookUrl, '_blank');
//                     } else {
//                         alert('No link available to read the book.');
//                     }
//                 }
//             });

//             if (!isBookDisplayed) {
//                 displayedBooks.push(newBook);

//                 const bookDiv = document.createElement('div');
//                 bookDiv.innerHTML = `<div class="w-full max-w-sm bg-white ms-4">
//                 <div class="flex">
//                     <div class="flex-shrink-0 mt-10 ">
//                       <img src="${newBook.imageUrl}" alt="Book Image" class="w-28 h-auto shadow-xl rounded"/>
//                     </div>
            
//                     <div class="flex flex-col justify-between ml-4">
                
//                         <div class="flex items-center space-x-1 mt-10">
//                          <div class="flex items-center space-x-1 rtl:space-x-reverse">
//                             <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                                 <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//                             </svg>
//                             <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                                 <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//                             </svg>
//                             <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                                 <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//                             </svg>
//                             <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                                 <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//                             </svg>
//                             <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                                 <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//                             </svg>
//                         </div>
//                         </div>
//                         <h5 class="text-lg font-semibold mt-1">${newBook.title}</h5>
//                         <h6 class="text-sm text-gray-600 mb-4">${newBook.author}</h6>
//                         <a href="${newBook.BookUrl}" class='read-book-link underline mb-3 text-xs text-blue-600 hover:text-blue-800' target="_blank">
//                         Read Book
//                     </a>
//                       <button type="button" class="rounded-md border border-black px-3 py-2 hover:bg-black hover:text-white text-xs font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
//                      Add To Cart
//                           </button>

//                 </div>
//             </div> 
        
//                 `;

//                 bookList.appendChild(bookDiv);

//                 // Push new book data to Firebase
//                 push(BooksInDBForm, newBook);
//                 console.log(`${newBook.title} by ${newBook.author}  added to database `);

//                 // Clear form fields after adding the book
//                 document.getElementById('add-title').value = '';
//                 document.getElementById('add-author').value = '';
//                 document.getElementById('add-image').value = '';
//                 document.getElementById('book-url').value = '';
//             } else {
//                 alert('This book is already displayed.');
//             }
//         }
//     });

//     // Listen for new book added event in Firebase
//     onChildAdded(BooksInDBForm, (snapshot) => {
//         const bookData = snapshot.val();
//         displayedBooks.push(bookData); // Add the book to the displayed books list
//     });
// });
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js"

document.addEventListener("DOMContentLoaded", function () {
const firebaseConfig = {
databaseURL: "https://iqra-website-default-rtdb.asia-southeast1.firebasedatabase.app/",
};
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const BooksInDBForm = ref(database, "Books")

const bookList = document.getElementById('book-list');
const addBookForm = document.getElementById('add-book-form');
let displayedBooks = []; // Array to keep track of displayed books

addBookForm.addEventListener("submit", function (event) {
event.preventDefault();

// Retrieve form values
const titleValue = document.getElementById('add-title').value.trim();
const authorValue = document.getElementById('add-author').value.trim();
const imageUrlValue = document.getElementById('add-image').value.trim();
const BookUrlValue = document.getElementById('book-url').value.trim();

if (titleValue === '' || authorValue === '' || imageUrlValue === '' || BookUrlValue==='') {
alert('Fields cannot be empty! Please fill in both Title and Author.');
} else {
const newBook = {
title: titleValue,
author: authorValue,
imageUrl: imageUrlValue,
BookUrl: BookUrlValue,
};


const isBookDisplayed = displayedBooks.some(book => book.title === newBook.title && book.author === newBook.author);

if (!isBookDisplayed) {
displayedBooks.push(newBook);

const bookDiv = document.createElement('div');
bookDiv.innerHTML = `<div class="w-full max-w-sm ms-4">
<div class="flex">
<div class="flex-shrink-0 mt-10 ">
<img src="${newBook.imageUrl}" alt="Book Title" class="w-28 h-auto shadow-xl rounded"/>
</div>

<div class="flex flex-col justify-between ml-4">

<div class="flex items-center space-x-1 mt-10">
<div class="flex items-center space-x-1 rtl:space-x-reverse">
<svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
</div>
</div>
<h5 class="text-lg font-semibold mt-1">${newBook.title}</h5>
<h6 class="text-sm text-gray-600 mb-4">${newBook.author}</h6>
<a href="${newBook.BookUrl}" class='underline mb-3 text-xs text-blue-600 hover:text-blue-800' target="_blank">
Read Book
</a>
<div class="flex flex-col space-y-6 md:flex-row md:space-x-2 md:space-y-0">
<button type="button" class="rounded-md border border-black px-3 py-2 hover:bg-black hover:text-white text-xs font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
Add To Cart</button>
</div>
</div>
</div>

`;

bookList.appendChild(bookDiv);

// Push new book data to Firebase
push(BooksInDBForm, newBook);
console.log(`${newBook.title} by ${newBook.author} added to database `);

// Clear form fields after adding the book
document.getElementById('add-title').value = '';
document.getElementById('add-author').value = '';
document.getElementById('add-image').value = '';
document.getElementById('book-url').value = '';
} else {
alert('This book is already displayed.');
}
}
});

// Listen for new book added event in Firebase
onChildAdded(BooksInDBForm, (snapshot) => {
const bookData = snapshot.val();
displayedBooks.push(bookData); // Add the book to the displayed books list
});
});