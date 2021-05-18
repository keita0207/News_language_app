import { articles_url, languageTwo ,_api_key} from '../config/rest_config'

// Newsのキーワードを取ってくる。

export  async function getArticles(){

    try {
        let articles = await fetch(`${articles_url}?language=${languageTwo}`, {

            //上記のコードに下のPERSONAL PASSWORDを追加。
            headers: {
                'X-API-KEY': _api_key
            }

            // Content-Type ヘッダーはクライアントに返されたコンテンツが
            // 実際にはどのような種類のものであるかを伝えます
        });

        // Jsonでデータを返す。
        let result = await articles.json();
        articles = null;

        return result.articles;
    }
    catch(error) {
        throw error;
    }
}