package divinity

import (
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/pathfinder"
)

func FlareMiddleware(next func(s *pathfinder.State)) func(*pathfinder.State) {
	return func(s *pathfinder.State) {
		ageClamp(s, 20, 85)
		s.Player.Divinity = "Flare"
		next(s)
		flameAge(s)
	}
}

func flameAge(s *pathfinder.State) {
	s.Player.AddSpell("Kindling")
	if s.Player.Age > 40 {
		s.Player.AddSpell("Blaze")
	}
	if s.Player.Age > 60 {
		s.Player.AddSpell("Blitz")
	}
}
