package repo

import (
	"backend/internal/models"

	"gorm.io/gorm"
)

func SearchProducts(db *gorm.DB, query string) ([]models.Product, error) {
	var products []models.Product
	if err := db.Table("products p").
		Select("DISTINCT ON (p.id) p.id, p.product_name, p.image_url, p.sale, p.category_id, ps.price, ps.discount").
		Joins("JOIN product_specifications ps ON p.id = ps.product_id").
		Where("p.product_name ILIKE ?", "%"+query+"%").
		Order("p.id, ps.price ASC").
		Find(&products).Error; err != nil {
		return nil, err
	}

	return products, nil
}
