package race

import (
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/dnd5e"
)

func DwarfMiddleware(next func(s *dnd5e.State)) func(*dnd5e.State) {
	return func(s *dnd5e.State) {
		heightClamp(s, 1, 4)
		increaseStats(s)
		addRace(s, "Dorf")
		next(s)
	}
}

func modifyStats(s *dnd5e.State) {
	s.Player.Stats[dnd5e.Dexterity].Value -= 1
	s.Player.Stats[dnd5e.Strength].Value += 2
}
