package race

import "github.com/Code-and-Conjure/Fantasy-Foundry/v2/dnd5e"

func HumanMiddleware(next func(s *dnd5e.State)) func(*dnd5e.State) {
	return func(s *dnd5e.State) {
		heightClamp(s, 1, 7)
		increaseStats(s)
		addRace(s, "Hooman")
		next(s)
	}
}

func heightClamp(s *dnd5e.State, min, max int) {
	if s.Player.Height < min {
		s.Player.Height = min
	} else if s.Player.Height > max {
		s.Player.Height = max
	}
}

func increaseStats(s *dnd5e.State) {
	for name, stat := range s.Player.Stats {
		stat.Value += 1
		s.Player.Stats[name] = stat
	}
}

func addRace(s *dnd5e.State, name string) {
	s.Player.Race = name
}
