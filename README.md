# 概要(このアプリは制作中です)

学びたい言語のニュースを検索することができ、その言語を話す人達と会話が出来る言語学習アプリケーション。
ニュース機能で勉強している言語やその国の文化等の知識を深め、チャット機能では実際に会話を始めることで、学んだことを実践出来るサービスをコンセプトとしました。
１つのアプリ内で、インプットとアウトプットの両方を可能にし、語学を更に楽しく勉強できる様にしていることが特徴です。

# 対象ユーザー

言語学習を目的とし、勉強した文法や単語を実際に使って会話を楽しみたいユーザーを対象とします。

# 制作背景

多くのユーザーに語学をに楽しく勉強して身につけて欲しいと考えたからです。
私が英語の勉強を本格的に始めた際に、単語や文法を学んでるが英語を話すことが出来る友人がいなかったので、勉強したことを実際に使う機会が無く伸び悩んでいました。
語学は実際に使わないと話すことが出来るようにならないにも関わらず、話し相手を見つけれないまま英語を勉強してても習得に相当な時間が掛かると身を染みて感じました。
特に日本では、学校で英語を時間を掛けて教わっているにも関わらず、英語を話すことが出来ない生徒が多いと言われています。理由は、自分の考え等を英語で伝える回数が圧倒的に少ないからだと思います。
以上の事から、自分自身の経験を踏まえて、簡単に勉強中の言語を話す友人を探しチャットが出来るアプリを作りたいと考え、現在開発中です。　

# 操作説明
1. ユーザー登録画面でプロフィール文を記載。(注意事項をユーザーに一読してもらう)
2.トップ画面はニュースを表示。検索画面から気になる単語を検索し、その単語が載っているニュースが表示。
3.友人検索画面で、自分が勉強している言語を既に習得しているユーザーをスワイプ方式で順番に表示。気になるユーザーがいた場合は、双方イイねボタンを押した際のみ、会話を始めることが可能。
4.自身のプロフィール内で、その日の出来事を投稿出来、共有し合うことが可能。(勉強した単語や表現を実際に使用したいユーザーのため)

# こだわり(これから実装する箇所もあります)

*悪質なユーザーを簡単にユーザー同士で通報を出来るようにすることです。
言語学習アプリや出会い系アプリ内で嫌な思いを経験したことがある私の友人である欧米出身女性100人に聞いたところ、主に卑猥な言葉を最初のメッセージで送ってきたり、ある提案を断られると暴言等を吐かれた経験がある方は100人中100人でした。驚きの結果です。
これらの事が原因でアプリを退会したり、それ以降似たようなアプリを使ってはいない友人が多数を占めていました。
言語学習の場であるのに、悪質なユーザーのせいで勉強をアプリ内で続けることが出来ない現状をどうにかしたいと思い、通報機能を分かりやすい形で表示させるようにします。

*ニュース機能
世界中の言語の中から話者が多い言語をタブ形式で簡単に見ることが出来るようにしました。
また検索機能では、流行りの言葉や主なカテゴリーを各国の言語で一覧表示し、コピーペストでその言葉が載っているニュースを読むことが可能です。

*投稿機能
勉強した表現等を使って日常の出来事をシェア出来るようにしたことです。但し、悪質なコメントを防ぐため、投稿にはコメントが出来ないようにしました。

# 使用技術

フロントエンド : React Native
バックエンド : Firebase
その他 : git(github) / Visual Studio Code
API : News API

# DB設計(写真を貼る)

# 苦労した、苦労しているところ
 1．画像のURL指定
FirebaseのFireStorageに画像を保存したい場合に、どの方法でユニークなURLを指定させるかを迷いました。
まず、1人のユーザーにつきプロフィール画像5枚と投稿画像(任意)が設定可能です。もし多くのユーザーがアプリをダウンロードした場合、URLの重複が起こってしまう可能性があると少なからず思いました。
なので、uuidのu4()を利用することでランダムに且つ他の画像とは被らないURLを作成することが出来ました。
Math.random関数を使用することも考えたのですが、アルファベットと数字を並べ合わせたuuidとは違い、数字のみでのURLの構成となってしまいます。もしMAth.random関数の第2引数に渡した数を超えてしまう画像が保存されてしまえばそれを機に修正を行うまで画像の変更や更新を行うことが出来ない状態に陥ってしまうことを懸念しました。その状態に陥らないためにもMath.Random関数ではなくuuidのu4()を使用しました。

 2. Reduxの構成
このアプリを開発するためにReact.jsを勉強し始め更にReduxも使用し始めたですが、理解に多大な時間を費やしています。簡単な流れは分かるのですが、例として、行いたい処理や必要な機能に対してMiddlewareやredux-thunkを使った方が良いか等全く分かってない状況です。
なので復習も兼ねて1から勉強をする必要があると反省しました。

 3. Firebaseから取得したいCollectionのみを正確に取り出すこと
複数のCollectionがある場合に、最深部のCollectionにあるデータを表示することに苦労しました。
map関数を用いてデータの表示を行いたい場合に、取得したいCollectionのIDを指定することが出来ず、空白の状態で画面に表示されてしまいました。根本的な解決にはなっていと思いますが、Reduxを用いてデータをStoreとして包括的にApp.jsに渡し、いつでもデータを渡したいComponentに渡すことが出来る状態にしました。また、ログインユーザーと他のユーザーの区別の仕方は、Reducer内でお互いの処理を分け指定のComponent内でActionをDispatchする際に第2引数に渡すことで、ログインユーザーのプロフィールを取得することが出来ました。
