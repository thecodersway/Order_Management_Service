package server

import (
	"backend/internal/core"
	"backend/internal/models"
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"gorm.io/gorm"
)

func InitializeServer(db *gorm.DB) {
	http.HandleFunc("/address/shipping", GetShippingAddresses(db))
	http.HandleFunc("/address/billing", GetBillingAddresses(db))
	http.HandleFunc("/categories", GetAllCategories(db))
	http.HandleFunc("/products", GetAllProducts(db))
	http.HandleFunc("/products/specifications", GetProductSpecificationsByID(db))
	http.HandleFunc("/products/category", GetProductsByCategoryID(db))
	http.HandleFunc("/products/search", SearchProducts(db))
	http.HandleFunc("/orders", CreateOrderHandler(db))
	http.HandleFunc("/cart", AddOrUpdateCartItemHandler(db))
	http.HandleFunc("/cart/items", GetCartItemsByCartID(db))
	http.HandleFunc("/cart/delete", DeleteCartItem(db))
	log.Fatal(http.ListenAndServe(":8083", nil))
}

func GetShippingAddresses(db *gorm.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		addresses, err := core.GetShippingAddresses(db)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		if err := json.NewEncoder(w).Encode(addresses); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	}
}

func GetBillingAddresses(db *gorm.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		addresses, err := core.GetBillingAddresses(db)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		if err := json.NewEncoder(w).Encode(addresses); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	}
}

func GetAllCategories(db *gorm.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		categories, err := core.GetAllCategories(db)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(categories)
	}
}

func DeleteCartItem(db *gorm.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		cartItemIDStr := r.URL.Query().Get("id")
		if cartItemIDStr == "" {
			http.Error(w, "Cart item ID is required", http.StatusBadRequest)
			return
		}

		cartItemID, err := strconv.Atoi(cartItemIDStr)
		if err != nil {
			http.Error(w, "Invalid cart item ID", http.StatusBadRequest)
			return
		}

		if err := core.DeleteCartItem(db, cartItemID); err != nil {
			http.Error(w, "Failed to delete cart item", http.StatusInternalServerError)
			return
		}

		w.WriteHeader(http.StatusOK)
		w.Write([]byte("Item deleted successfully"))
	}
}

func GetCartItemsByCartID(db *gorm.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		cartIDStr := r.URL.Query().Get("cartID")
		cartID, err := strconv.Atoi(cartIDStr)
		if err != nil || cartIDStr == "" {
			http.Error(w, "Invalid or missing cartID parameter", http.StatusBadRequest)
			return
		}
		cartItems, err := core.GetCartItemsByCartID(db, cartID)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(cartItems)
	}
}

func AddOrUpdateCartItemHandler(db *gorm.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
			return
		}

		var item models.CartItem
		if err := json.NewDecoder(r.Body).Decode(&item); err != nil {
			http.Error(w, "Invalid request payload", http.StatusBadRequest)
			return
		}

		if err := core.AddOrUpdateCartItem(db, &item); err != nil {
			http.Error(w, "Failed to add or update cart item", http.StatusInternalServerError)
			return
		}
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("Cart item added or updated successfully"))
	}
}

func CreateOrderHandler(db *gorm.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {

		if r.Method != http.MethodPost {
			http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
			return
		}

		var order models.Order
		if err := json.NewDecoder(r.Body).Decode(&order); err != nil {
			http.Error(w, "Invalid request payload: "+err.Error(), http.StatusBadRequest)
			log.Println("Error decoding order:", err)
			return
		}

		latestOrderID, err := core.CreateOrder(db, &order)
		if err != nil {
			http.Error(w, "Failed to create order: "+err.Error(), http.StatusInternalServerError)
			log.Println("Error creating order:", err)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusCreated)
		json.NewEncoder(w).Encode(map[string]int{"latest_order_id": latestOrderID})
	}
}

func GetAllProducts(db *gorm.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		products, err := core.GetAllProducts(db)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(products)
	}
}

func GetProductsByCategoryID(db *gorm.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		categoryIDParam := r.URL.Query().Get("category_id")
		if categoryIDParam == "" {
			http.Error(w, "category_id is required", http.StatusBadRequest)
			return
		}

		productCategoryId, err := strconv.Atoi(categoryIDParam)
		if err != nil {
			http.Error(w, "Invalid category_id", http.StatusBadRequest)
			return
		}

		products, err := core.GetProductsByCategoryID(db, productCategoryId)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(products)
	}
}

func GetProductSpecificationsByID(db *gorm.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		productIDStr := r.URL.Query().Get("product_id")
		if productIDStr == "" {
			http.Error(w, "Product ID is required", http.StatusBadRequest)
			return
		}

		productID, err := strconv.Atoi(productIDStr)
		if err != nil {
			http.Error(w, "Invalid product ID", http.StatusBadRequest)
			return
		}

		products, err := core.GetProductSpecificationsByID(db, productID)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(products)
	}
}

func SearchProducts(db *gorm.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		query := r.URL.Query().Get("q")

		products, err := core.SearchProducts(db, query)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(products)
	}
}
