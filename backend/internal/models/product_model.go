package models

type Product struct {
	ID          int     `json:"id"`
	ProductName string  `json:"product_name"`
	ImageURL    string  `json:"image_url"`
	Sale        bool    `json:"sale"`
	Price       float64 `json:"price"`
	Discount    float64 `json:"discount"`
	CategoryID  int     `json:"category_id"`
}
