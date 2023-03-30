package main

import (
	"fmt"
	"math/rand"
	"time"

	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/dnd5e"
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/dnd5e/class"
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/dnd5e/race"
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/pathfinder"
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/pathfinder/divinity"
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/pathfinder/profession"
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/state"
)

func main() {
	rand.Seed(time.Now().UnixNano())
	var handler func(state.State)
	var gameState state.State
	if rand.Float32() < 0.5 {
		gameState = dnd5e.InitState()
		dndHandler := dnd5e.EndingMiddleware
		if rand.Float32() < 0.5 {
			dndHandler = class.PaladinMiddleware(dndHandler)
		} else {
			dndHandler = class.RogueMiddleware(dndHandler)
		}
		if rand.Float32() < 0.5 {
			dndHandler = race.HumanMiddleware(dndHandler)
		} else {
			dndHandler = race.DwarfMiddleware(dndHandler)
		}
		handler = dnd5e.Middleware(dndHandler)
	} else {
		gameState = pathfinder.InitState()
		pathfinderHandler := pathfinder.EndingMiddleware
		if rand.Float32() < 0.5 {
			pathfinderHandler = divinity.AstralMiddleware(pathfinderHandler)
		} else {
			pathfinderHandler = divinity.FlareMiddleware(pathfinderHandler)
		}
		if rand.Float32() < 0.5 {
			pathfinderHandler = profession.ScholarMiddleware(pathfinderHandler)
		} else {
			pathfinderHandler = profession.AtheleteMiddleware(pathfinderHandler)
		}
		handler = pathfinder.Middleware(pathfinderHandler)
	}

	handler(gameState)
	fmt.Println(gameState.String())
}
