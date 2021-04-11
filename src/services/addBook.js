import Axios from 'axios'

export async function addBook(book) {
    
    // TODO: clean the inputs

    const url = 'http://localhost:3080/api/addBook'; // todo: put this in a better spot

    const json = JSON.stringify(book);
    Axios.post(url, json, {
        headers: {'Content-Type': 'application/json'}
    })
    .then((res) => {
        return true;
    })
    .catch((e) => {
        console.error('Failed to add your book to URL:' + book + ':' + e);
        return false;
    });
}