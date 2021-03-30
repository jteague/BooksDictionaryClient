export async function getAllBooks() {

    const response = await fetch('/api/getAllBooks');
    return await response.json();
}

export async function getBook(bookName) {

    const response = await fetch('/api/getBook?bookName=' + bookName);
    return await response.json();
}