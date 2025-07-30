package repo

import (
	"backend/internal/models"

	"gorm.io/gorm"
)

func GetShippingAddresses(db *gorm.DB) ([]models.Address, error) {
	var addresses []models.Address
	userID := 1
	if err := db.Where("user_id = ? AND address_type = ?", userID, "shipping").Find(&addresses).Error; err != nil {
		return nil, err
	}
	return addresses, nil
}

func GetBillingAddresses(db *gorm.DB) ([]models.Address, error) {
	var addresses []models.Address
	userID := 1
	if err := db.Where("user_id = ? AND address_type = ?", userID, "billing").Find(&addresses).Error; err != nil {
		return nil, err
	}
	return addresses, nil
}
