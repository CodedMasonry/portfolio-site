package internal

import (
	"github.com/CodedMasonry/portfolio-site/internal/pages"
	"github.com/a-h/templ"
	"github.com/gofiber/fiber/v2"
)

func Init_Routes(app *fiber.App) *fiber.App {
	app.Get("/", func(c *fiber.Ctx) error {
		return Render(c, pages.Home())
	})

	app.Static("/assets", "./assets")

	return app
}

func Init_Middleware(app *fiber.App) *fiber.App {
	app.Use(NotFoundMiddleware)

	return app
}

func NotFoundMiddleware(c *fiber.Ctx) error {
	c.Status(fiber.StatusNotFound)
	return Render(c, pages.NotFound())
}

func Render(c *fiber.Ctx, component templ.Component) error {
	c.Set("Content-Type", "text/html")
	return component.Render(c.Context(), c.Response().BodyWriter())
}
