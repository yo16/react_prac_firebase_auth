# react_prac_firebase_auth

- [Firebase | Google's Mobile and Web App Development Platform](https://firebase.google.com/)

# 参考
- [【完全版】ReactのFirebase Authentication(認証)を基礎からマスター | アールエフェクト](https://reffect.co.jp/react/react-firebase-auth)
- [Authentication with React Router v6: A complete guide - LogRocket Blog](https://blog.logrocket.com/authentication-react-router-v6/)
- [Firebase がアプリ開発の神ツールである理由とは | クラウドエース株式会社](https://cloud-ace.jp/column/detail466/)


# memo
- ログイン情報は、`Firebase Authentication`を使用。
  - ユーザー登録、ログイン、ログオフの機能は、このまま`firebase.js`をコピーすれば大体いけるんじゃないだろうか

- 分類
  - ログインが必要
    - / （home）
    - /secret
  - 不要
    - /login
    - /signup
- `src/App.js`で、`react-router-dom`を使って、サイトをコントロールしている。
  - `Outlet`を使っている。
  - ログインせずにログインが必要なURLにアクセスすると`ProtectedLayout`で、`/login`へ飛ばしている

