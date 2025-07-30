package repo

import (
	"backend/internal/models"

	"gorm.io/gorm"
)

func GetAllProductsByCategoryId(db *gorm.DB, productCategoryId int) ([]models.ProductBYCategoryID, error) {
	var products []models.ProductBYCategoryID

	minPriceSubquery := db.Table("product_specifications").
		Select("product_id, MIN(price) AS min_price").
		Group("product_id")

	err := db.Table("categories c").
		Select("c.name AS category_name, total_products.total_count AS total_products, p.id, p.product_name, p.image_url, p.sale, ps.price, ps.discount").
		Joins("JOIN (?) AS total_products ON total_products.category_id = c.id", db.Table("products").Select("category_id, COUNT(*) AS total_count").Group("category_id")).
		Joins("JOIN products p ON c.id = p.category_id").
		Joins("JOIN product_specifications ps ON p.id = ps.product_id").
		Joins("JOIN (?) AS min_price_specs ON ps.product_id = min_price_specs.product_id AND ps.price = min_price_specs.min_price", minPriceSubquery).
		Where("c.id = ?", productCategoryId).
		Order("p.id ASC").
		Scan(&products).Error

	if err != nil {
		return nil, err
	}

	return products, nil
}
