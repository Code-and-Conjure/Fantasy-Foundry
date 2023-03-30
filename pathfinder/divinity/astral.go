package divinity

import (
	"math"

	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/pathfinder"
)

func AstralMiddleware(next func(s *pathfinder.State)) func(*pathfinder.State) {
	return func(s *pathfinder.State) {
		ageClamp(s, 100, math.MaxInt)
		s.Player.Divinity = "Astral"
		next(s)
		astralKnowledge(s)
	}
}

func ageClamp(s *pathfinder.State, min, max int) {
	if s.Player.Age < min {
		s.Player.Age = min
	} else if s.Player.Age > max {
		s.Player.Age = max
	}
}

func astralKnowledge(s *pathfinder.State) {
	if s.Player.Profession == "Scholar" {
		s.Player.AddSpell("Divination")
	}
	s.Player.AddSpell("Divine Touch")
}
