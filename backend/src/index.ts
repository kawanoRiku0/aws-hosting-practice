import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

// Article インターフェースの定義
type Article = {
  title: string;
  content: string;
}

const app = express();

// CORSの設定
app.use(cors({
  origin: process.env.CLIENT_URL, // フロントエンドのURLに合わせて変更
  methods: ['GET'],
  allowedHeaders: ['Origin', 'Content-Type', 'Accept'],
  credentials: true,
  maxAge: 43200 // 12時間（秒単位）
}));

// "/articles"エンドポイントへのGETリクエストに対するハンドラー
app.get('/articles', (req, res) => {
  const articles: Article[] = [{
    title: 'サンプルタイトル',
    content: 'これはサンプルのコンテンツです。'
  }, {
    title: 'サンプルタイトル2',
    content: 'これはサンプルのコンテンツです2。'
  }];

  res.status(200).json(articles);
});

// サーバーの起動
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});