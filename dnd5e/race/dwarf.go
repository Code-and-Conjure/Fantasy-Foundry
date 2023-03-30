package race

import (
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/dnd5e"
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/state"
)

func DwarfMiddleware(next func(s *state.State)) func(*state.State) {
	return func(s *state.State) {
		heightClamp(s, 1, 4)
		increaseStats(s)
		addRace(s, "Dorf")
		next(s)
	}
}

func modifyStats(s *state.State) {
	s.Player.Stats[dnd5e.Dexterity].Value -= 1
	s.Player.Stats[dnd5e.Strength].Value += 2
}
