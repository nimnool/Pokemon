import axios from "axios";

export async function getAllPosts() {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        return response.data.results;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
