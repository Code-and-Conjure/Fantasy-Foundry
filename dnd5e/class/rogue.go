package class

import (
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/dnd5e"
)

func RogueMiddleware(next func(s *dnd5e.State)) func(*dnd5e.State) {
	return func(s *dnd5e.State) {
		increaseDex(s)
		addClass(s, "Rogue")
		next(s)
	}
}

func increaseDex(s *dnd5e.State) {
	s.Player.Stats[dnd5e.Dexterity].Value += 1
}

func addClass(s *dnd5e.State, name string) {
	s.Player.Class = name
}
