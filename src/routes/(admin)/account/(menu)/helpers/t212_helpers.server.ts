import T212_KEY from "$env/static/public";
import axios from "axios";

// Define an interface for the expected structure of the portfolio data
interface PortfolioItem {
    ticker: string;
    quantity: number;
    averagePrice: number;
    currentPrice: number;
    ppl: number;
    fxPpl: number | null;
    initialFillDate: string;
    frontend: string;
    maxBuy: number;
    maxSell: number;
    pieQuantity: number;
}

// Function to fetch portfolio data from Trading 212
async function fetchPortfolio(): Promise<PortfolioItem[]> {
    const url = 'https://live.trading212.com/api/v0/equity/portfolio';
    const config: import('axios').AxiosRequestConfig = {
        headers: {
            Authorization: `Bearer ${T212_KEY}`,  // API key for authentication
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await axios.get<PortfolioItem[]>(url, config);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching portfolio from Trading 212:', error);
        throw error;  // Rethrow the error to be handled by the caller
    }
}

export { fetchPortfolio };
