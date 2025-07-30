package models

type GetCartItemDetails struct {
	ID                     int     `json:"id"`
	Name                   string  `json:"name"`
	Price                  float64 `json:"price"`
	Grade                  string  `json:"grade"`
	NetWeight              string  `json:"bag_size"`
	Quantity               int     `json:"quantity"`
	ImageURL               string  `json:"image_url"`
	ProductSpecificationID int     `json:"product_specification_id"`
	Discount               float64 `json:"discount" gorm:"column:discount"`
}
