# 模擬的に技術共有サイト "Knowledge note" をイチから実装してみよう

技術系ナレッジ共有サイトを参考に設計からJSベースの開発までを実際にやってみよう。

## 参考とするサイト

- [Zenn｜エンジニアのための情報共有コミュニティ](https://zenn.dev/)
- [Qiita](https://qiita.com/)

## 注意事項

> [!CAUTION]
> 本番運用を想定していません、当リポジトリの実装では技術の活用と理解を深めるのを目的としたものであり、いくつかの脆弱性の対策が施されていない状態となっています。

## 当授業での狙い

プログラムの基礎にはフォーカスを当てず、今後開発するうえで絶対に起こり得る、以下のような「未知との遭遇」に対処できるようになります。

- 今までに見たことのないエラー
- 今までに使ったことのないライブラリ
- 今までに見たことのない記法

主体的に情報収集してトラブルシュート能力やドキュメント等のキャッチアップする能力を鍛えることを目的としています。

## 初回のみのセットアップ

まずは当リポジトリをフォークするところから始めてください。

フォーク対象のリポジトリ: https://github.com/kato83/knowledge-note

- フォーク方法の参考
  - [リポジトリをフォークする - GitHub Docs](https://docs.github.com/ja/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
  - [フォークについて - GitHub Docs](https://docs.github.com/ja/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)

フォークしたリポジトリにて Codespace を起動し、以下の操作を実行してください。

## 初回以降のセットアップ

以下は授業始まる毎に実施してください。

### バックエンド (backend/)

```sh
$ cd ./backend
$ npm install
$ npm run prisma:generate
$ npm run prisma:migrate
$ npm run dev
```

サーバーが立ち上がるので動作しているかを以下パスで確認してください。

- https://[GitHub codespaceのプレビューURL]/api/v1
- https://[GitHub codespaceのプレビューURL]/api/docs

### フロントエンド（frontend/）

```sh
$ cd ./frontend
$ npm install
$ npm run dev
```

サーバーが立ち上がるので動作しているかを以下パスで確認してください。

- https://[GitHub codespaceのプレビューURL]/
- https://[GitHub codespaceのプレビューURL]/api/v1
- https://[GitHub codespaceのプレビューURL]/api/docs
