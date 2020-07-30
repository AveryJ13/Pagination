var books = [
    { bookId: 1, title: 'The Three Musketeers', authorName: 'Alexander Dumas' },
    { bookId: 2, title: 'A Tale of Two Cities', authorName: 'Charles Dickens' },
    { bookId: 3, title: 'Pride and Prejudice', authorName: 'Jane Austin' },
    { bookId: 4, title: 'To Kill a Mockingbird', authorName: 'Harper Lee' },
    { bookId: 5, title: '1984', authorName: 'George Orwell' },
    { bookId: 6, title: 'Wuthering Heights', authorName: 'Emily Bronte' },
    { bookId: 7, title: 'Moby-Dick', authorName: 'Herman Melville' },
    { bookId: 8, title: 'The Catcher in the Rye', authorName: 'J.D. Salinger' },
    { bookId: 9, title: 'Frankenstein', authorName: 'Mary Shelley' },
    { bookId: 10, title: 'Little Woman', authorName: 'Louisa May Alcott' },
    { bookId: 11, title: 'Leo Tolstoy', authorName: 'Anna Karenina' },
    { bookId: 12, title: 'The Adventures of Huckleberry Finn', authorName: 'Mark Twain' },
    { bookId: 13, title: 'Lord of the Flies', authorName: 'William Golding' },
    { bookId: 14, title: 'Catch-22', authorName: 'Joseph Heller' },
    { bookId: 15, title: 'The Great Gatsby', authorName: 'F. Scott Fitzgerald' },
    { bookId: 16, title: 'The Odyssey', authorName: 'Homer' },
    { bookId: 17, title: 'Crime and Punishment', authorName: 'Fyodor Dostoevsky' },
    { bookId: 18, title: 'Great Expectations', authorName: 'Charles Dickens' },
    { bookId: 19, title: 'Of Mice and Men', authorName: 'John Steinbeck' },
    { bookId: 20, title: 'Dracula', authorName: 'Bram Stoker' },
    { bookId: 21, title: 'The Picture of Dorian Gray', authorName: 'Oscare Wilde' },
    { bookId: 22, title: 'War and Peace', authorName: 'Leo Tolstoy' },
    { bookId: 23, title: 'The Grapes of Wrath', authorName: 'John Steinbeck' },
    { bookId: 24, title: 'Alices Adventures in Wonderland', authorName: 'Lewis Carrol' },
    { bookId: 25, title: 'The Scarlet Letter', authorName: 'Nathaniel Hawthorne' },
    { bookId: 26, title: 'The Count of Monte Cristo', authorName: 'Alexandre Dumas' },
    { bookId: 27, title: 'Emma', authorName: 'Jane Austin' },
    { bookId: 28, title: 'The Secret Garden', authorName: 'Frances Hodgson Burnett' },
    { bookId: 29, title: 'Slaughterhouse-Five', authorName: 'Kurt Bonnegut' },
    { bookId: 30, title: 'Don Quixote', authorName: 'Miguel de Cervantes' },
    { bookId: 31, title: 'A Christmas Carol', authorName: 'Charles Dickens' },
    { bookId: 32, title: 'Heart of Darkness', authorName: 'Joseph Conrad' },
    { bookId: 33, title: 'Beloved', authorName: 'Toni Morrison' },
    { bookId: 34, title: 'Anne of Green Gables', authorName: 'Lucy Maud Montgomery' },
    { bookId: 35, title: 'Ulysses', authorName: 'James Joyce' },
    { bookId: 36, title: 'Les Miserables', authorName: 'Victor Hugo' }
];

const element = document.getElementById('books');
const paginationElement = document.getElementById('button')

let currentPage = 1;
let rows = 6;

let pageTracker = 1;

function Display(books, bookContainer, rowsPerPage, page) {
    bookContainer.innerHTML = "";
    page--;

    let start = rowsPerPage * page;
    let end = start + rowsPerPage;
    let displayItems = books.slice(start, end);

    for (let i = 0; i < displayItems.length; i++) {
        let id = displayItems[i].bookId
        let bookName = displayItems[i].title
        let authorName = displayItems[i].authorName

        let bookElement = document.createElement('div')
        bookElement.classList.add('book')
        bookElement.innerText = id + " " + bookName + " by " + authorName;

        bookContainer.appendChild(bookElement);

    }
}

function SetupPagination(items, buttonContainer, rowsPerPage) {
    buttonContainer.innerHTML = "";

    let page_count = Math.ceil(items.length / rowsPerPage);

    for (let i = 1; i < page_count + 1; i++) {
        let b = Button(i)
        buttonContainer.appendChild(b)
    }

}

function Button(page) {
    let button = document.createElement('button');
    button.innerText = page;
    button.classList.add('buttonStyling');

    button.addEventListener('click', function () {
        current = page;
        Display(books, element, rows, current)
    })
    return button;
}

// function Previous(page) {
//     let previous = document.createElement('button');
//     previous.innerText = "<";
//     previous.classList.add('buttonStyling');

//     previous.addEventListener('click', function () {
//         Display(books, element, rows, currentPage)
//     });

//     return previous;
// }

Display(books, element, rows, currentPage);
SetupPagination(books, paginationElement, rows);








