package race

import "github.com/Code-and-Conjure/Fantasy-Foundry/v2/state"

func HumanMiddleware(next func(s *state.State)) func(*state.State) {
	return func(s *state.State) {
		heightClamp(s, 1, 7)
		increaseStats(s)
		addRace(s, "Hooman")
		next(s)
	}
}

func heightClamp(s *state.State, min, max int) {
	if s.Player.Height < min {
		s.Player.Height = min
	} else if s.Player.Height > max {
		s.Player.Height = max
	}
}

func increaseStats(s *state.State) {
	for name, stat := range s.Player.Stats {
		stat.Value += 1
		s.Player.Stats[name] = stat
	}
}

func addRace(s *state.State, name string) {
	s.Player.Race = name
}
