import mustache from 'mustache';
// Viteのルールとして、インポートする対象のファイルをそのまま取得するためには相対パスの末尾に"?raw"を付与する必要がある
import html from '../templates/mypage.html?raw';

export const mypage = () => {
  const app = document.querySelector('#app');
  app.innerHTML = mustache.render(html, { hoge: 'HOME' });

  // フォームの取得
  const form = document.querySelector('form');
  const messageElement = form.querySelector('strong');

  // フォーム送信時の処理
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // フォームのデフォルト送信を防止

    // フォームの入力内容を取得
    const email = form.email.value;
    const newPassword = form['new-password'].value;
    const username = form.username.value;


    // 新しいパスワードが入力されていない場合は、エラーメッセージを表示
    if (!newPassword) {
      messageElement.style.color = 'red';
      messageElement.textContent = '新しいパスワードを入力してください';
      return;
    }

    // サーバーに送信するデータの準備
    const data = {
      email: email,
      username: username,
      newPassword: newPassword,
    };

    try {
      // サーバーにPOSTリクエストを送信
      const response = await fetch('/api/v1/user-update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      // 成功した場合、または失敗した場合のメッセージ処理
      if (response.ok) {
        messageElement.style.color = 'green';
        messageElement.textContent = '保存が成功しました';
      } else {
        messageElement.style.color = 'red';
        messageElement.textContent = `保存が失敗しました: ${result.error || '不明なエラー'}`;
      }
    } catch (error) {
      // 通信エラーや例外が発生した場合
      messageElement.style.color = 'red';
      messageElement.textContent = `保存が失敗しました: ${error.message}`;
    }
  });
};
