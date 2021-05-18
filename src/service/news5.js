import { articles_url,quota,_api_key, languageFive} from '../config/rest_config'

export  async function getArticles(){

    try {
        let articles = await fetch(`${articles_url}?language=${languageFive}`, {
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