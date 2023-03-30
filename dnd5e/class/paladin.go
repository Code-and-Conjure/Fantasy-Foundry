package class

import (
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/dnd5e"
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/state"
)

func PaladinMiddleware(next func(s *state.State)) func(*state.State) {
	return func(s *state.State) {
		increaseCon(s)
		addClass(s, "Paladin")
		next(s)
	}
}

func increaseCon(s *state.State) {
	s.Player.Stats[dnd5e.Constitution].Modify(1)
}
