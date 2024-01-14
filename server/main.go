package main

import (
	// "fmt"
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

func TestHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode()
}

func main() {
    router := mux.NewRouter()
    router.HandleFunc("/", TestHandler).Methods("GET")

    http.ListenAndServe(":3006", router)
}
