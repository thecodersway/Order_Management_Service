package repo

import (
	"backend/internal/models"

	"gorm.io/gorm"
)

func DeleteCartItem(db *gorm.DB, cartItemID int) error {

	if err := db.Where("id = ?", cartItemID).Delete(&models.CartItem{}).Error; err != nil {
		return err
	}

	return nil
}
