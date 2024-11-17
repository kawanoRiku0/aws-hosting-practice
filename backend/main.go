package main

import (
	"net/http"
	"os"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// Article構造体の定義
type Article struct {
	Title   string `json:"title"`
	Content string `json:"content"`
}

func main() {
	router := gin.Default()

	// CORSの設定
	router.Use(cors.New(cors.Config{
		// 許可するオリジンを指定
		AllowOrigins: []string{os.Getenv("CLIENT_URL")}, // フロントエンドのURLに合わせて変更
		// 許可するHTTPメソッドを指定
		AllowMethods: []string{"GET"},
		// 許可するHTTPリクエストヘッダーを指定
		AllowHeaders: []string{"Origin", "Content-Type", "Accept"},
		// 資格情報の共有を許可するかどうか
		AllowCredentials: true,
		// プリフライトリクエストの結果をキャッシュする時間
		MaxAge: 12 * time.Hour,
	}))
	// "/article"エンドポイントへのGETリクエストに対するハンドラー
	router.GET("/articles", func(c *gin.Context) {
		articles := []*Article{{
			Title:   "サンプルタイトル",
			Content: "これはサンプルのコンテンツです。",
		}, {
			Title:   "サンプルタイトル2",
			Content: "これはサンプルのコンテンツです2。",
		}}
		c.JSON(http.StatusOK, articles)
	})

	// サーバーの起動
	router.Run(":8080")
}
