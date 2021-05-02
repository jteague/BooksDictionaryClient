import axios from 'axios'

export async function getAllBooks() {
    const url = '/api/getAllBooks';
    const res = await axios.get(url);
    return res.data;

    //const response = await fetch(url);
    //return await response.json();
}

export async function getBook(bookName) {
    const url = '/api/getBook';
    const res = await axios.get(url, { params: { title: bookName } });
    return res.data;

    //const response = await fetch('/api/getBook?bookName=' + bookName);
    //return await response.json();
}

export const addBook = async book => {
    // TODO: clean the inputs
    try {
        const url = '/api/addBook';
        const json = JSON.stringify(book);

        const response = await axios.post(url, json, { headers: {'Content-Type': 'application/json'} })
        if (response.status !== 200) return { success: false};
        return { success: true};
    } 
    catch (errors) {
        console.error(errors);
        return { success: false};
    }
};

export const deleteBook = async book => {
    
    // TODO: clean the inputs

    try {
        const url = '/api/deleteBook';
        const json = JSON.stringify(book);

        const response = await axios.delete(url, { 
            headers: {'Content-Type': 'application/json'}, 
            data: json
        });
        return response;
    } 
    catch (errors) {
        console.error(errors);
        return { success: false};
    }
};