package core

import (
	"backend/internal/models"
	"backend/internal/repo"
	"errors"
	"log"

	"gorm.io/gorm"
)

func GetShippingAddresses(db *gorm.DB) ([]models.Address, error) {
	return repo.GetShippingAddresses(db)
}

func GetBillingAddresses(db *gorm.DB) ([]models.Address, error) {
	return repo.GetBillingAddresses(db)
}

func GetAllCategories(db *gorm.DB) ([]models.Category, error) {
	return repo.GetAllCategories(db)
}

func DeleteCartItem(db *gorm.DB, cartItemID int) error {
	if cartItemID <= 0 {
		return errors.New("invalid cart item ID")
	}
	return repo.DeleteCartItem(db, cartItemID)
}

func GetCartItemsByCartID(db *gorm.DB, cartID int) ([]models.GetCartItemDetails, error) {
	if cartID <= 0 {
		return nil, errors.New("invalid cart ID")
	}
	return repo.GetCartItemsByCartID(db, cartID)
}

func AddOrUpdateCartItem(db *gorm.DB, item *models.CartItem) error {
	if item == nil {
		log.Println("djfhk")
		return errors.New("cart item cannot be nil")
	}
	return repo.AddOrUpdateCartItem(db, item)
}

func CreateOrder(db *gorm.DB, order *models.Order) (int, error) {

	if order == nil {
		return 0, errors.New("order cannot be nil")
	}
	latestOrderID, err := repo.CreateOrder(db, order)
	if err != nil {
		return 0, err
	}

	return latestOrderID, nil
}

func GetAllProducts(db *gorm.DB) ([]models.Product, error) {
	return repo.GetAllProducts(db)
}

func GetProductsByCategoryID(db *gorm.DB, categoryID int) ([]models.ProductBYCategoryID, error) {
	if categoryID <= 0 {
		return nil, errors.New("invalid category ID")
	}
	return repo.GetAllProductsByCategoryId(db, categoryID)
}

func GetProductSpecificationsByID(db *gorm.DB, productID int) ([]models.ProductSpecifications, error) {
	if productID <= 0 {
		return nil, errors.New("invalid product ID")
	}
	return repo.GetProductSpecificationsByID(db, productID)
}

func SearchProducts(db *gorm.DB, query string) ([]models.Product, error) {
	if query == "" {
		return nil, errors.New("search query cannot be empty")
	}
	return repo.SearchProducts(db, query)
}
