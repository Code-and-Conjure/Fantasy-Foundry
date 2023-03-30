package class

import (
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/dnd5e"
)

func PaladinMiddleware(next func(s *dnd5e.State)) func(*dnd5e.State) {
	return func(s *dnd5e.State) {
		increaseCon(s)
		addClass(s, "Paladin")
		next(s)
	}
}

func increaseCon(s *dnd5e.State) {
	s.Player.Stats[dnd5e.Constitution].Modify(1)
}
