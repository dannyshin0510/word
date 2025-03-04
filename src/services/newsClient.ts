



const APIKEY = 'bec2d5713452431492c2cd4d3bf7c5f9'
// method to get
export const getDailyNews= async (): Promise<ListArticles | NewsError > => {

    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}`);

        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const data: ListArticles = await response.json();
        return data;
    } catch (error) {
        console.error("ERROR: Failed to fetch news, ", error);
        return { error: (error as Error).message };
    }
}
// granular article
export interface Articles {
    source: Record<string, any>;
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string; 
    content: string | null;
}
// list of articles
export interface ListArticles {
    status: string;
    totalResults : number;
    articles: Articles[]
}
export interface NewsError {
    error: string
}


// client for news API
export interface NewsClient {
    getDailyNews: ()=> Promise<ListArticles | NewsError>
}


export const createNewsClient = (): NewsClient => {
    return {
        getDailyNews
    }
}