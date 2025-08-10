package controllers

import (
	"net/http"
	"nexus/models"
	"nexus/utils"

	"github.com/gin-gonic/gin"
)

func StatsOverview(c *gin.Context) {
	overview, err := models.GetStatsOverview()
	if err != nil {
		utils.ErrorResponse(c, http.StatusUnauthorized, "success fail", nil)
		return
	}
	utils.SuccessResponse(c, http.StatusOK, "query success", overview)
}
