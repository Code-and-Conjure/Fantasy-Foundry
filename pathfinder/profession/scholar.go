package profession

import (
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/pathfinder"
)

func ScholarMiddleware(next func(s *pathfinder.State)) func(*pathfinder.State) {
	return func(s *pathfinder.State) {
		s.Player.Profession = "Scholar"
		s.Player.IncreaseCuriosity(1)
		s.Player.AddSpell("Conjur Food")
		next(s)
	}
}
