# サンプル展示会 2027（CMS のお試し用）

CMS（Sveltia CMS）で、お知らせを書く・承認する・公開する流れを試すためのサイトです。内容はすべて架空です。

- 入力画面: サイトの URL の末尾に `admin/` を付けて開き、「アクセストークンを使用してログイン」で入ります
- 公開日時が先の記事は、その日時を過ぎたあとの毎時の更新でサイトに出ます

## 手元で動かす（Docker）

```bash
docker compose build
docker compose run --rm app npm install
docker compose up          # http://localhost:4321/
```
