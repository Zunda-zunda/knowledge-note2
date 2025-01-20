import mustache from 'mustache';  // mustacheテンプレートエンジンをインポート
import html from '../../templates/articles/id.html?raw';  // HTMLテンプレートをインポート（rawで取得）
import DOMPurify from 'dompurify';  // HTMLのサニタイズライブラリをインポート
import { parse } from 'marked';  // MarkdownをHTMLに変換するライブラリをインポート

/**
 * 記事詳細取得の処理
 * {id} を使って指定された記事の詳細情報を取得して表示します
 */
export const articlesId = ({ id }) => {
    const app = document.querySelector('#app');  // #app 要素を取得して、そこにコンテンツを埋め込む

    // 記事詳細を取得するために、fetch関数を使用してAPIからデータを取得
    fetch(`/api/v1/articles/${id}`)
        .then(response => response.json())  // レスポンスをJSON形式でパース
        .then(data => {
            // データ取得が成功し、記事情報が含まれているかチェック
            if (data.isSuccess && data.item) {
                const article = data.item;  // 取得した記事情報を変数に格納

                // mustache.renderを使って、テンプレートに記事データを埋め込む
                app.innerHTML = mustache.render(html, {
                    title: article.title,  // 記事タイトル
                    createdAt: article.createdAt,  // 記事作成日時
                    displayCreatedAt: function () {
                        // 作成日時を日本語フォーマットに変換する
                        const date = new Date(this.createdAt);
                        return date.toLocaleDateString('ja-JP'); // 日本語のローカル形式（例: 2025/01/19）
                    },
                    updatedAt: article.updatedAt,  // 記事更新日時
                    displayUpdatedAt: function () {
                        // 更新日時を日本語フォーマットに変換する
                        const date = new Date(this.updatedAt);
                        return date.toLocaleDateString('ja-JP'); // 日本語のローカル形式（例: 2025/01/19）
                    },
                    user: {
                        id: article.user.id,  // 記事投稿者のID
                        username: article.user.username,  // 記事投稿者のユーザー名
                    },
                    body: DOMPurify.sanitize(parse(article.body)), // MarkdownをHTMLに変換し、無害化（サニタイズ）する
                });
            } else {
                // データ取得に失敗した場合はエラーメッセージを表示
                app.innerHTML = '<p>記事の取得に失敗しました。</p>';
            }
        })
        .catch(error => {
            // fetchでエラーが発生した場合の処理
            console.error('Error fetching article:', error);
            app.innerHTML = '<p>記事の読み込みに失敗しました。</p>';  // エラーメッセージを表示
        });

    // ページ遷移時の処理などを実装
    return () => {
        console.log('Page transition logic can go here');  // ページ遷移に関連するロジック（必要な場合）
    };
};
