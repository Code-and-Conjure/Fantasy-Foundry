package dnd5e

import (
	"fmt"
	"strings"

	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/mechanic"
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/state"
)

var (
	handler func(State)
)

type State struct {
	Player Player
}

type Player struct {
	Height int
	Stats  map[string]*mechanic.Stat
	Race   string
	Class  string
}

func InitState() *State {
	ret := &State{
		Player: newPlayer(),
	}
	return ret
}

func newPlayer() Player {
	ret := Player{
		Height: 0,
		Stats:  make(map[string]*mechanic.Stat),
	}

	for _, stat := range []string{Constitution, Strength, Dexterity} {
		ret.Stats[stat] = &mechanic.Stat{
			Name:  stat,
			Value: 0,
		}
	}

	return ret
}

func (s *State) String() string {
	stats := make([]string, 0)
	for _, v := range s.Player.Stats {
		stats = append(stats, fmt.Sprintf("{%s %d}", v.Name, v.Value))
	}
	return fmt.Sprintf("In DnD5e\n%s\n%s\n%d\n%s", s.Player.Race, s.Player.Class, s.Player.Height, strings.Join(stats, "\n"))
}

func Middleware(next func(*State)) func(state.State) {
	return func(s state.State) {
		cast := s.(*State)
		next(cast)
	}
}

func EndingMiddleware(*State) {

}
