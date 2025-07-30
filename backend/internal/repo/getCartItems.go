package repo

import (
	"backend/internal/models"

	"gorm.io/gorm"
)

func GetCartItemsByCartID(db *gorm.DB, cartID int) ([]models.GetCartItemDetails, error) {
	var cartItems []models.GetCartItemDetails

	err := db.Table("cart_items").
		Select("cart_items.id AS id, cart_items.quantity, product_specifications.id AS product_specification_id, product_specifications.grade, product_specifications.net_weight, product_specifications.price, product_specifications.discount, products.image_url, products.product_name AS name").
		Joins("JOIN product_specifications ON product_specifications.id = cart_items.product_specification_id").
		Joins("JOIN products ON products.id = product_specifications.product_id").
		Where("cart_items.cart_id = ?", cartID).
		Scan(&cartItems).Error

	if err != nil {
		return nil, err
	}
	return cartItems, nil
}
