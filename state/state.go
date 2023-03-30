package state

import (
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/engine"
	"github.com/Code-and-Conjure/Fantasy-Foundry/v2/mechanic"
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

func InitState(e engine.Engine) *State {
	ret := &State{
		Player: newPlayer(e),
	}
	return ret
}

func newPlayer(e engine.Engine) Player {
	ret := Player{
		Height: 0,
		Stats:  make(map[string]*mechanic.Stat),
	}

	for _, stat := range e.Stats() {
		ret.Stats[stat] = &mechanic.Stat{
			Name:  stat,
			Value: 0,
		}
	}

	return ret
}
