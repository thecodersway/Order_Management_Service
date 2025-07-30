package repo

import (
	"backend/internal/models"

	"gorm.io/gorm"
)

func GetAllCategories(db *gorm.DB) ([]models.Category, error) {
	var categories []models.Category

	if err := db.Select("id, name, image_url").Find(&categories).Error; err != nil {
		return nil, err
	}

	return categories, nil
}
