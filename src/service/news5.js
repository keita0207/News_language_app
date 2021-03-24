import { articles_url,languageTwo,quota,_api_key} from '../config/rest_config'

export  async function getArticles(){

    try {
        let articles = await fetch(`${articles_url}?language=${languageTwo}`, {
            headers: {
                'X-API-KEY': _api_key
            }
        });

        let result = await articles.json();
        articles = null;

        return result.articles;
    }
    catch(error) {
        throw error;
    }
}