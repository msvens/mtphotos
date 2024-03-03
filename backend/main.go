package main

import (
	"fmt"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/render"
	"github.com/msvens/docker-play/backend/internal/dao"
	"net/http"
)

type TestResp struct {
	W1 string
	W2 string
}

func main() {
	fmt.Println("Hello World")

	if pgd, err := dao.NewPgDB(); err != nil {
		fmt.Println("Could not create db")
	} else {
		e := pgd.CreateTable()
		if e != nil {
			fmt.Println("could not create table %v", e)
		} else {
			e1 := pgd.AddGreeting("test greeting")
			if e1 != nil {
				fmt.Println("Could not add test greeting: %v", e)
			} else {
				fmt.Println("added new greeting")
			}
		}

	}

	r := chi.NewRouter()
	r.Use(middleware.RequestID)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(middleware.GetHead)

	r.Get("/api", func(w http.ResponseWriter, r *http.Request) {
		resp := TestResp{W1: "hello", W2: "world!"}
		render.JSON(w, r, resp)
	})

	r.Get("/api/greetings", func(w http.ResponseWriter, r *http.Request) {
		resp := TestResp{W1: "hello", W2: "world!"}
		render.JSON(w, r, resp)
	})

	err := http.ListenAndServe(":8000", r)
	if err != nil {
		return
	}

}
