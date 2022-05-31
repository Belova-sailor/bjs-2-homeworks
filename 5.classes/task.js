class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type
    };

    fix() {
        this.state = this.state * 1.5;
    };

    get state() {
        return this._state
    }

    set state(value) {
        if (value < 0) {
            this._state = 0
        } else if (value > 100) {
            this._state = 100
        } else { this._state = value }
    };
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine"
    }
};

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "book"
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "novel"
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "fantastic"
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "detective"
    }
}

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books
    };

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book)
        }
    };

    findBookBy(type, value) {
        let searchBook = this.books.find(book => book[type] === value);

        if (searchBook) {
            return searchBook
        } else {
            return null
        }
    };

    giveBookByName(bookName) {
        let bookIndex = this.books.findIndex((book) => book.name === bookName);

        if (bookIndex !== -1) {
            return this.books.splice(bookIndex, 1);
        } else {
            return null
        }
    }
}

