package profession

import (
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/pathfinder"
)

func AtheleteMiddleware(next func(s *pathfinder.State)) func(*pathfinder.State) {
	return func(s *pathfinder.State) {
		s.Player.Profession = "Athelete"
		s.Player.IncreaseJoy(2)
		s.Player.AddSpell("Rough Play")
		next(s)
	}
}
