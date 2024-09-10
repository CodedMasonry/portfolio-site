package main

import (
	"github.com/CodedMasonry/portfolio-site/internal"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/log"
)

func main() {
	app := fiber.New()

	app = internal.Init_Routes(app)
	app = internal.Init_Middleware(app)

	log.Fatal(app.Listen(":8080"))
}
