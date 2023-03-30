package main

import (
	"fmt"
	"math/rand"
	"time"

	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/dnd5e/class"
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/dnd5e/race"
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/engine"
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/state"
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/util"
)

func main() {
	rand.Seed(time.Now().UnixNano())
	state := state.InitState(&engine.Dnd5e{})

	handler := util.EndingMiddleware
	if rand.Float32() < 0.5 {
		handler = class.PaladinMiddleware(handler)
	} else {
		handler = class.RogueMiddleware(handler)
	}
	if rand.Float32() < 0.5 {
		handler = race.HumanMiddleware(handler)
	} else {
		handler = race.DwarfMiddleware(handler)
	}
	handler(state)
	fmt.Println(state.Player.Race)
	fmt.Println(state.Player.Class)
	fmt.Println(state.Player.Height)
	for _, v := range state.Player.Stats {
		fmt.Println(*v)
	}
}
