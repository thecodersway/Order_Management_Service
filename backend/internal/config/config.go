package config

import (
	"log"
	"os"

	"gopkg.in/yaml.v2"
)

var (
	DatabaseURL string
)

type Config struct {
	DatabaseURL string `yaml:"DATABASE_URL"`
}

func LoadConfig() {
	file, err := os.Open("config.yml")
	if err != nil {
		log.Fatalf("Error opening config file: %v", err)
	}
	defer func() {
		if err := file.Close(); err != nil {
			log.Fatalf("Error closing the file: %v", err)
		}
	}()

	var config Config
	decoder := yaml.NewDecoder(file)
	if err := decoder.Decode(&config); err != nil {
		log.Fatalf("Error decoding YAML file: %v", err)
	}

	DatabaseURL = config.DatabaseURL
	if DatabaseURL == "" {
		log.Fatal("DATABASE_URL must be set in the config.yml file.")
	}
}
