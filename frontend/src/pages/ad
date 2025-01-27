import mustache from 'mustache';
// Viteのルールとして、インポートする対象のファイルをそのまま取得するためには相対パスの末尾に"?raw"を付与する必要がある
import html from '../templates/mypage.html?raw';

export const mypage = async () => {
  const response = await fetch('/api/v1/user/me')
    .then(response => response.json());

  const user = response.user;
  const app = document.querySelector('#app');
  // HTML上で {{ email }} と書くとJSの `user.email` の値に置き換わる
  // 例: <div>{{ username }}</div> → <div>ユーザー名</div>
  // mustache.render の第2引数でプロパティとそれの値をセットしてテンプレートに渡しつつHTML出力ができる
  app.innerHTML = mustache.render(html, { email: user.email, username: user.username });

  const username = document.querySelector('input[name="username"]');
  const email = document.querySelector('input[name="email"]');
  const password = document.querySelector('input[name="new-password"]');

  document.addEventListener('submit', e => {
    // 送信処理を中断して代わりに後続の処理を実行
    e.preventDefault();
    const data = {};
    if (username) data.username = username.value;
    if (email) data.email = email.value;
    if (password) data.password = password.value;

    fetch('/api/v1/user-update', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(res => {
        document.querySelector('form strong').textContent = res.message;
        // 5秒後にメッセージを消す
        setTimeout(() => document.querySelector('form strong').textContent = '', 5000);

      });
  });
};
