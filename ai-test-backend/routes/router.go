package router

import "github.com/gin-gonic/gin"

func SetupRoutes(r *gin.Engine) {
	userRouter := r.Group("/api/v1/users")
	{
		userRouter.GET("/", getUsers)
		userRouter.GET("/", getUsers)
		userRouter.GET("/", getUsers)
		userRouter.GET("/", getUsers)
		userRouter.GET("/", getUsers)
	}
}

func getUsers(ctx *gin.Context) {

}
