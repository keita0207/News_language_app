import { articles_url,languageThree,_api_key} from '../config/rest_config'

export  async function getArticles(){

    try {
        let articles = await fetch(`${articles_url}?country=${languageThree}`, {
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