# 概要(このアプリは制作中です)

学びたい言語のニュースを検索し尚且つ、その言語を話す人達と会話を可能にした言語学習アプリケーションです。
ニュースページ内で、各ユーザーが勉強している言語やその国の文化等の知識を深め、チャット機能では実際に会話を始めることで、学んだことを実践出来るサービスをコンセプトとしました。
１つのアプリ内で、インプットとアウトプットの両方を可能にし、語学を更に楽しく勉強できる事を可能にしているのが特徴です。


<table>
<tr>
<td><img src="https://user-images.githubusercontent.com/61197804/118637835-2d5daa00-b811-11eb-9ab9-b8cd90d805c9.jpg" 
         width="200px"　margin="20px"></td>
<td><img src="https://user-images.githubusercontent.com/61197804/118637944-4b2b0f00-b811-11eb-9f87-cb83a49dc3d3.jpg"
         width="200px" margin="20px"></td>
<td><img src="https://user-images.githubusercontent.com/61197804/118637952-4cf4d280-b811-11eb-944f-84eb27c0c76a.jpg"
         width="200px" margin="20px"></td>
</tr>
</table>
<table>
<tr>
<td><img src="https://user-images.githubusercontent.com/61197804/118639966-6e56be00-b813-11eb-847a-6c0c6b70f338.jpg"
         width="200px" margin="20px"></td>
<td><img src="https://user-images.githubusercontent.com/61197804/118640005-79a9e980-b813-11eb-8db9-736e9637b76b.jpg"
         width="200px"　margin="20px"></td>
<td><img src="https://user-images.githubusercontent.com/61197804/118639990-744c9f00-b813-11eb-8879-e906be509915.jpg"
         width="200px" margin="20px"></td>
</tr>
</table>
<table>
<tr>
<td><img src="https://user-images.githubusercontent.com/61197804/118639999-77e02600-b813-11eb-9c6d-e1c5795210ea.jpg"
         width="200px" margin="20px"></td>
<td><img src="https://user-images.githubusercontent.com/61197804/118639981-7151ae80-b813-11eb-92c2-b2350d087962.jpg"
         width="200px"　margin="20px"></td>
<td><img src="https://user-images.githubusercontent.com/61197804/118640015-7b73ad00-b813-11eb-96f3-f0046f57ade7.jpg"
         width="200px" margin="20px"></td>
</tr>
</table>

# 対象ユーザー

言語学習を目的とし、様々な言語のニュースを読んだり、勉強した文法や単語を実際に使って会話を楽しみたいユーザーを対象とします。

# 制作背景

多くのユーザーにとって語学を楽しく勉強して身につけて欲しいと考えたからです。
私自身が英語の勉強を本格的に始めた際に、単語や文法の基礎知識は知ってるにも関わらず英語を話すことが出来る友人が殆どおらず、勉強したことを実際に使う機会が無く伸び悩んでいました。
語学は実際に使わないと話すことが出来るようにならないので、話し相手を見つけれないまま英語を勉強してても習得に相当な時間が掛かると身を染みて感じました。
特に日本では、学校で英語を時間を掛けて教わっているにも関わらず、英語を話すことが出来ない生徒が多いと言われています。理由は、自分の考え等を英語で伝える回数が圧倒的に少ないからだと思います。
以上の事から自分自身の経験を踏まえて、簡単に勉強中の言語を話す友人を探しチャットが出来るアプリを作りたいと考え、現在も開発中です。　

# 操作説明
1. ユーザー登録画面でプロフィール文を記載。(注意事項をユーザーに一読してもらう)

2. トップ画面はニュースを表示。検索画面から気になる単語を検索し、その単語が載っているニュースが表示。
   また、タブ内で好きな言語を選択してその言語のトップニュースを表示。

3. 友人検索画面で、自分が勉強している言語を既に習得しているユーザーをスワイプ方式で順番に表示。気になるユーザーを発見した場合は、双方イイネボタンを押した際のみ、会話を始めることが可能。

4. 自身のプロフィール内で、その日の出来事を投稿可能にし、共有し合うことが可能。(勉強した単語や表現を実際に使用したいユーザーのため)

# こだわり(これから実装する箇所もあります)

*悪質なユーザーを簡単にユーザー同士で通報を出来るようにすることです。
私の友人である欧米出身女性100人にアンケートを実施したところ、主に卑猥な言葉を最初のメッセージで送ってきたり、ある提案を断られると暴言等を吐かれた経験がある方は100人中100人でした。驚きの結果でした。
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

# DB設計
![スクリーンショット 2021-04-20 2 00 29](https://user-images.githubusercontent.com/61197804/118636527-bf64b300-b80f-11eb-86a9-0eb40aadad4e.png)

![スクリーンショット 2021-04-20 2 24 03](https://user-images.githubusercontent.com/61197804/118637383-b1636200-b810-11eb-9988-91d79f9e6f37.png)

# 苦労した、苦労しているところ
1. 画像のURL指定
Firebase内のFireStorageに画像を保存したい場合に、どの方法でユニークなURLをそれぞれの画像に指定させるかを迷いました。
まず、1人のユーザーにつきプロフィール画像5枚と投稿画像(任意)が設定可能です。もし多くのユーザーがアプリをダウンロードした場合、URLの重複が起こってしまう可能性があると少なからず思いました。
なので、uuidのu4関数を利用することでランダムに且つ他の画像とは被らないURLを作成することが出来ました。
Math.random関数を使用することも考えましたが、アルファベットと数字を並べ合わせたuuidとは違い、数字のみでのURLの構成となってしまいます。もしMath.random関数の第2引数に渡した数を超えてしまう画像が保存されてしまえばそれを機に修正を行うまで画像の変更や更新を行うことが出来ない状態に陥ってしまうことを懸念しました。その状態に陥らないためにもMath.Random関数ではなくuuidのu4関数を使用しました。

 2. Reduxの構成
このアプリを開発するためにReact Nativeを勉強し始め更にReduxも使用し始めましたが、理解をするのに多大な時間を費やしています。例として、行いたい処理や必要な機能に対してMiddlewareやredux-thunkを使った方が良いか等全く分かってない状況です。
なので復習も兼ねて1から勉強をする必要があると反省しています。

3. Firebaseから取得したいCollectionのみを正確に取り出すこと
1つのCollection内に複数のフィールドがある場合に、最深部のフィールドにあるデータを表示することに苦労しました。
map関数を用いてデータの表示を行いたい場合に、取得したいフィールドのIDを指定することが出来ず、空白の状態で画面に表示されてしまいました。なので、Reduxを用いてデータをStoreとして包括的にApp.jsに渡し、いつでもデータを渡したいComponentに渡すことが出来る状態にしました。また、ログインユーザーと他のユーザーの区別の仕方は、Reducer内でお互いの処理を分け指定のComponent内でAction関数をDispatchする際に第2引数に渡すことで、ログインユーザーのプロフィールを取得することが出来ました。
