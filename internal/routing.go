package internal

import (
	"time"

	"github.com/CodedMasonry/portfolio-site/internal/pages"
	"github.com/a-h/templ"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cache"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

const Is_Production = false

func Init_Routes(app *fiber.App) *fiber.App {
	app.Get("/", func(c *fiber.Ctx) error {
		return Render(c, pages.Home())
	})

	app.Static("/assets", "./assets")

	return app
}

func Init_Middleware(app *fiber.App) *fiber.App {

	app.Use(NotFoundMiddleware)
	app.Use(logger.New(logger.Config{
		Format: "[${ip}]:${port} ${status} - ${method} ${path}\n",
	}))

	cache_cfg := cache.Config{
		Next: func(c *fiber.Ctx) bool {
			return c.Query("noCache") == "true"
		},
		Expiration:   30 * time.Minute,
		CacheControl: true,
	}
	if !Is_Production {
		cache_cfg.Expiration = 1 * time.Second
	}

	app.Use(cache.New(cache_cfg))

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
