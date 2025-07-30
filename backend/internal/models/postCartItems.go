package models

type CartItem struct {
	// ID                     uint      `gorm:"primaryKey"`
	CartID                 int `json:"cart_id" gorm:"not null"`
	ProductSpecificationID int `json:"product_specification_id" gorm:"primaryKey"`
	Quantity               int `json:"quantity" gorm:"not null"`
	// CreatedAt              time.Time `json:"created_at" gorm:"autoCreateTime"`
	// UpdatedAt              time.Time `json:"updated_at" gorm:"autoUpdateTime"`
}
