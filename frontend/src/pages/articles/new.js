// import mustache from 'mustache';
// // Viteのルールとして、インポートする対象のファイルをそのまま取得するためには相対パスの末尾に"?raw"を付与する必要がある
// // この場合、テンプレートのHTMLファイルをそのまま取得したいので"?raw"を末尾に付与している
// // 参照: https://ja.vite.dev/guide/assets.html#importing-asset-as-string
// import html from '../../templates/articles/new.html?raw';

// // 当授業ではCSRF攻撃に対して脆弱なコードとなっていますが、実装が煩雑になるので考慮せずに実装しますが
// // 実際にログインを伴うサイト等でフォーム送信などを行う処理にはCSRF攻撃に対する対策CSRFトークンも含めるなどの対策を実施してください
// // 参考: https://developer.mozilla.org/ja/docs/Glossary/CSRF

// /**
//  * 記事新規作成時の処理の関数
//  */
// export const articlesNew = () => {
//   const app = document.querySelector('#app');
//   // templates/articles/new.html を <div id="app"></div> 要素内に出力する
//   app.innerHTML = mustache.render(html, {});

//   // TODO: new.htmlにかかれているHTMLに入力の変更があったら画面右側のプレビューの内容を入力した内容に応じたものに変換する
//   // 処理...
  
//   // "公開" ボタンを押下された際にPOSTメソッドで /api/v1/articles に対してAPI通信を fetch で送信する
// };

import mustache from 'mustache';
import { marked } from 'marked';  // marked.jsをインポート
// ページ遷移するための関数を呼び出す
import { navigate } from '../../utils/router';

// Viteのルールとして、インポートする対象のファイルをそのまま取得するためには相対パスの末尾に"?raw"を付与する必要がある
import html from '../../templates/articles/new.html?raw';

/**
 * 記事新規作成時の処理の関数
 */
export const articlesNew = () => {
  const app = document.querySelector('#app');
  // templates/articles/new.html を <div id="app"></div> 要素内に出力する
  app.innerHTML = mustache.render(html, {});

  // TODO: new.htmlにかかれているHTMLに入力の変更があったら画面右側のプレビューの内容を入力した内容に応じたものに変換する
  // 処理...
  
  // "公開" ボタンを押下された際にPOSTメソッドで /api/v1/articles に対してAPI通信を fetch で送信する
};
