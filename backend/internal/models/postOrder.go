package models

import "time"

type Order struct {
	ID              uint      `gorm:"primaryKey" json:"id"`
	CartID          int       `gorm:"not null" json:"cart_id"`
	UserID          int       `gorm:"not null" json:"user_id"`
	PaymentMethod   string    `gorm:"type:varchar(50);not null" json:"payment_method"`
	ShippingAddress string    `gorm:"type:text" json:"shipping_address"`
	BillingAddress  string    `gorm:"type:text" json:"billing_address"`
	TotalPrice      float64   `gorm:"type:decimal(10,2);not null" json:"total_price"`
	CreatedAt       time.Time `gorm:"autoCreateTime" json:"created_at"`
}

func (Order) TableName() string {
	return "orders"
}
