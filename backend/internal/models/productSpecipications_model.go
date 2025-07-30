package models

import "time"

type ProductSpecifications struct {
	ID               int       `json:"id" gorm:"column:id"`
	ProductID        int       `json:"product_id" gorm:"column:product_id"`
	SKUID            string    `json:"sku_id" gorm:"column:sku_id"`
	Grade            string    `json:"grade" gorm:"column:grade"`
	NetWeight        float64   `json:"net_weight" gorm:"column:net_weight"`
	Stocks           int       `json:"stocks" gorm:"column:stocks"`
	Discount         float64   `json:"discount" gorm:"column:discount"`
	MinOrderQuantity int       `json:"min_order_quantity" gorm:"column:min_order_quantity"`
	MaxOrderQuantity int       `json:"max_order_quantity" gorm:"column:max_order_quantity"`
	Dimensions       string    `json:"dimensions" gorm:"column:dimensions"`
	Price            float64   `json:"price" gorm:"column:price"`
	Description      string    `json:"description" gorm:"column:description"`
	CountryOfOrigin  string    `json:"country_of_origin" gorm:"column:country_of_origin"`
	Brand            string    `json:"brand" gorm:"column:brand"`
	ProductName      string    `json:"product_name" gorm:"column:product_name"`
	Sale             bool      `json:"sale" gorm:"column:sale"`
	CreatedAt        time.Time `json:"created_at" gorm:"column:created_at"`
	UpdatedAt        time.Time `json:"updated_at" gorm:"column:updated_at"`
	ImageURL         string    `json:"image_url" gorm:"column:image_url"`
}
