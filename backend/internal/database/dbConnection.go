package database

import (
	"backend/internal/config"
	"fmt"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func InitDB() (*gorm.DB, error) {
	db, err := gorm.Open(postgres.Open(config.DatabaseURL), &gorm.Config{})
	if err != nil {
		return nil, fmt.Errorf("failed to connect to the database: %w", err)
	}

	fmt.Println("Connected to the database with GORM!")
	return db, nil
}

func CloseDB(db *gorm.DB) {
	if db != nil {
		sqlDB, err := db.DB()
		if err != nil {
			log.Println("Failed to retrieve the underlying SQL database:", err)
			return
		}
		sqlDB.Close()
		fmt.Println("Database connection closed.")
	}
}
