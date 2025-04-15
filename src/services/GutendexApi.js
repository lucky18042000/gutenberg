import axios from "axios";

const API_BASE = 'http://skunkworks.ignitesol.com:8000';


export const fetchBooks = async ({ pageParam = `${API_BASE}/books?mime_type=image&`, category, search, page }) => {
    const url = new URL(pageParam);
    if (category) url.searchParams.set('topic', category);
    if (search) url.searchParams.set('search', search);
    if (page) url.searchParams.set('page', page);
    try {
        const { data } = await axios.get(url.toString());
        return data;
    } catch (error) {
        console.error("Failed to fetch books:", error);
        throw error;
    }
};