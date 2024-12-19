import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

interface Book {
    title: string,
    author: string
}

let books: Book[] = [];
let result: Book[] = []
Given('I have the following books in the store', (dataTable) => {
    books = dataTable.hashes();
});

When('I search for books by author {string}', (author: string) => {
    result = books.filter(book => book.author == author)
});

Then('I find {int} books', (expectedCount: number) => {
    //expect(result.length).to.equal(expectedCount)
    expect(result).to.have.lengthOf(expectedCount)
});