package repo

import (
	"backend/internal/models"

	"gorm.io/gorm"
)

func GetProductSpecificationsByID(db *gorm.DB, productID int) ([]models.ProductSpecifications, error) {
	var products []models.ProductSpecifications

	err := db.Table("product_specifications").
		Select(`product_specifications.id, 
                 product_specifications.product_id, 
                 product_specifications.sku_id, 
                 product_specifications.grade, 
                 product_specifications.net_weight, 
                 product_specifications.stocks, 
                 product_specifications.discount, 
                 product_specifications.min_order_quantity, 
                 product_specifications.max_order_quantity, 
                 product_specifications.dimensions, 
                 product_specifications.price, 
                 products.description, 
                 products.country_of_origin, 
                 products.brand, 
                 products.product_name, 
                 products.sale,
                 products.image_url`).
		Joins("JOIN products ON products.id = product_specifications.product_id").
		Where("product_specifications.product_id = ?", productID).
		Order("product_specifications.price ASC").
		Find(&products).Error

	if err != nil {
		return nil, err
	}
	return products, nil
}
