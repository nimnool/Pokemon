import axios from "axios";

export default class PostService {
    static async getAll() {
        const responce = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
        return responce.data.results
    }
}
