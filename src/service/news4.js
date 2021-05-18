import { articles_url,languageFour,_api_key,quota} from '../config/rest_config'

export  async function getArticles(){

    try {
        let articles = await fetch(`${articles_url}?language=${languageFour}`, {
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