import axios from 'axios'

export async function fetchAllBooks() {
    const url = '/api/getAllBooks';
    const res = await axios.get(url);
    return res.data;
}

export async function fetchBook(bookName) {
    const url = '/api/getBook';
    const res = await axios.get(url, { params: { title: bookName } });
    return res.data;
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

export const editBook = async book => {
    // TODO: clean the inputs
    try {
        return {success: true}; // temp code
        const url = '/api/editBook';
        const json = JSON.stringify(book);

        const response = await axios.patch(url, json, { headers: {'Content-Type': 'application/json'} })
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