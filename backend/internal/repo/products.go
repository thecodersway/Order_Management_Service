package repo

import (
	"backend/internal/models"

	"gorm.io/gorm"
)

func GetAllProducts(db *gorm.DB) ([]models.Product, error) {
	var products []models.Product

	if err := db.Table("products p").
		Select("DISTINCT ON (p.id) p.id, p.product_name, p.image_url, p.sale, ps.price, ps.discount").
		Joins("JOIN product_specifications ps ON p.id = ps.product_id").
		Order("p.id, ps.price ASC").
		Find(&products).Error; err != nil {
		return nil, err
	}

	return products, nil
}
