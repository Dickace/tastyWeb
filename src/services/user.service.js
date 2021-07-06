import axios from "axios"
import authHeader from "./authHeader";
const API_URL = "http://movieql.club/api/v1/"

const getMovies = () => {
    return axios.get(API_URL + "movie")
}
const getUserCollection = () => {
    return axios.get(API_URL + "collection/", {headers: authHeader})
}
export default {
    getMovies,
    getUserCollection
}