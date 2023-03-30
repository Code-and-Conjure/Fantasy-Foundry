package class

import (
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/dnd5e"
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/state"
)

func RogueMiddleware(next func(s *state.State)) func(*state.State) {
	return func(s *state.State) {
		increaseDex(s)
		addClass(s, "Rogue")
		next(s)
	}
}

func increaseDex(s *state.State) {
	s.Player.Stats[dnd5e.Dexterity].Value += 1
}

func addClass(s *state.State, name string) {
	s.Player.Class = name
}
