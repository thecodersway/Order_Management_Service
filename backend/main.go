package main

import (
	"backend/internal/config"
	"backend/internal/database"
	"backend/internal/server"
	"log"
)

func main() {
	config.LoadConfig()
	db, err := database.InitDB()
	if err != nil {
		log.Fatal("Error connecting to the database: ", err)
	}
	defer database.CloseDB(db)

	server.InitializeServer(db)
}
