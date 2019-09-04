import axios from "axios";




export default {
    getQuestions: function() {
        return axios.get("/api/questions");
    },
    searchQuestions: (topic) => {
        // return axios.post("/search", {title: title});
        return axios.get(`/api/questions/${topic}`);
    }
    // ,addBookToDB: (bookData) => {
    //     return axios.post("/api/books", bookData);
    // },
    // deleteBook: (id) => {
    //     return axios.delete(`/api/books/${id}`);
    // },
    // getGoogleBooks: function(bookName) {
    //     // return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookName + "&key=AIzaSyCWY9vK1HdPhULh98Oka0qlul3h2bCGHPQ");
    //     return axios.get(BASEURL + bookName + APIKEY);
    //   }
}
