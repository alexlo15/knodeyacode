import axios from "axios";

export default {
    getQuestions: function() {
        return axios.get("/api/questions");
    },
    searchQuestions: (topic) => {
        return axios.get(`/api/questions/${topic}`);
    },
    getScores: function() {
        return axios.get("/api/scores");
    }
}
