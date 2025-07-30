package repo

import (
	"backend/internal/models"
	"log"

	"gorm.io/gorm"
)

func AddOrUpdateCartItem(db *gorm.DB, item *models.CartItem) error {
	var existingItem models.CartItem

	err := db.Where("cart_id = ? AND product_specification_id = ?", item.CartID, item.ProductSpecificationID).First(&existingItem).Error

	if err == nil {
		log.Printf("Found existing item: %+v\n", existingItem)
		existingItem.Quantity += item.Quantity
		log.Printf("Updating item with new quantity: %+v\n", existingItem)
		if err := db.Save(&existingItem).Error; err != nil {
			return err
		}
		return nil
	}

	if err == gorm.ErrRecordNotFound {
		if err := db.Create(&item).Error; err != nil {
			return err
		}
		return nil
	}

	log.Printf("Error finding existing item: %v\n", err)
	return err
}
