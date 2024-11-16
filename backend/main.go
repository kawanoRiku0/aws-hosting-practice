package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Article構造体の定義
type Article struct {
	Title   string `json:"title"`
	Content string `json:"content"`
}

func main() {
	router := gin.Default()

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
