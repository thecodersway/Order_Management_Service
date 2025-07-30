package models

// ProductBYCategoryID represents the structure for products retrieved by category ID
type ProductBYCategoryID struct {
	CategoryName  string  `json:"category_name"`
	TotalProducts int     `json:"total_products"`
	ID            int     `json:"id"`
	ProductName   string  `json:"product_name"`
	ImageURL      string  `json:"image_url"`
	Sale          bool    `json:"sale"`
	Price         float64 `json:"price"`
	Discount      float64 `json:"discount"`
}
