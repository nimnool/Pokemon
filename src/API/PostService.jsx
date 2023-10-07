import axios from "axios";

export default class PostService {
    static async getAll() {
        const responce = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
        console.log(responce.data.results)
        return responce.data.results
    }
}
