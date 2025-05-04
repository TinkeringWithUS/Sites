package main

import (
	"fmt"
	"io"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {

	fmt.Println("Hello World!")

	r := gin.Default()

	r.GET("/", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{"message": "Welcome to the scalable API!"})
	})

	r.Run()
	r.LoadHTMLFiles()

	newRequest, err := http.NewRequest("GET", "https://google.com", nil)

	if err != nil {
		return
	}

	result, err := http.DefaultClient.Do(newRequest)

	if err != nil {
		return
	}

	data, err := io.ReadAll(result.Body)

	if err != nil {
		return
	}

	fmt.Printf("result: %s", data)
}
