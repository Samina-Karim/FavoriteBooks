// Includes all mock API services od Add, Delete and Get Books

import axios from 'axios';
import config from "./config.json"

const baseUrl = `https://${config.apiKey}.mockapi.io/ListOfFavoriteBooks`;

// Gets all books from the API
const getBooksAPI = () => {
    const request = axios.get(`${baseUrl}`);   
    return request.then(response => response.data)
}

// Deletes a book from the API based on id passed
const deleteBookAPI = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => response.data)
}

// Adds a book into the API
const addBookAPI = (book) => {
    const request = axios.post(`${baseUrl}`, book);
    return request.then(response => response.data);
}


export default { getBooksAPI, deleteBookAPI, addBookAPI };