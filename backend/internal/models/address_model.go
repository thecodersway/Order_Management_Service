package models

type Address struct {
	ID           int    `json:"id"`
	UserID       int    `json:"user_id"`
	AddressType  string `json:"address_type"`
	Label        string `json:"label"`
	AddressLine1 string `json:"address_line1"`
	City         string `json:"city"`
	State        string `json:"state"`
	ZipCode      string `json:"zip_code"`
	Country      string `json:"country"`
	CreatedAt    string `json:"created_at"`
	UpdatedAt    string `json:"updated_at"`
}
