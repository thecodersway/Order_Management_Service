package repo

import (
	"backend/internal/models"

	"gorm.io/gorm"
)

func CreateOrder(db *gorm.DB, order *models.Order) (int, error) {

	err := db.Transaction(func(tx *gorm.DB) error {

		if err := tx.Create(order).Error; err != nil {
			return err
		}

		if err := tx.Where("cart_id = ?", order.CartID).Delete(&models.CartItem{}).Error; err != nil {
			return err
		}

		return nil
	})

	if err != nil {
		return 0, err
	}

	return int(order.ID), nil
}
