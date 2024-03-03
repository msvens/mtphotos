package dao

import (
	"fmt"
	_ "github.com/jackc/pgx/v5/stdlib"
	"github.com/jmoiron/sqlx"
	"log"
	"os"
)

type PgDB struct {
	db *sqlx.DB
}

type Greeting struct {
	id    uint
	greet string
}

func NewPgDB() (*PgDB, error) {
	var password = ""
	if pwd, err := os.ReadFile("/run/secrets/db-password"); err != nil {
		return nil, fmt.Errorf("Could not get db-password: %v", err)
	} else {
		password = string(pwd)
	}
	host := "db"
	port := 5432
	user := "postgres"
	db_name := "example"

	dataSource := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, db_name)

	if db, err := sqlx.Open("pgx", dataSource); err != nil {
		log.Printf("could not connect to database: %v", err)
		return nil, err
	} else {
		err = db.Ping()
		if err != nil {
			log.Printf("could not ping database: %v", err)
			return nil, err
		}
		return &PgDB{
			db: db,
		}, nil
	}
}

func (pgd *PgDB) CreateTable() error {
	stmt := `
CREATE TABLE IF NOT EXISTS greeting (
id SERIAL PRIMARY KEY,
greet TEXT NOT NULL
);
`
	if _, err := pgd.db.Exec(stmt); err != nil {
		return err
	}
	return nil
}

func (pgd *PgDB) AddGreeting(greet string) error {
	insStmt := "INSERT INTO greeting (greet) VALUES ($1)"
	_, err := pgd.db.Exec(insStmt, greet)
	return err
}

func (pgd *PgDB) Greetings() ([]*Greeting, error) {
	ret := []*Greeting{}
	err := pgd.db.Select(&ret, "SELECT * FROM greeting")
	return ret, err
}
