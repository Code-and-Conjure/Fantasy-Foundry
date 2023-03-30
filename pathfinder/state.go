package pathfinder

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
	Age        int
	Stats      map[string]*mechanic.Stat
	Divinity   string
	Profession string
	Spells     []string
}

func InitState() *State {
	ret := &State{
		Player: newPlayer(),
	}
	return ret
}

func newPlayer() Player {
	ret := Player{
		Age:    0,
		Stats:  make(map[string]*mechanic.Stat),
		Spells: make([]string, 0),
	}

	for _, stat := range []string{Joy, Anger, Curiosity} {
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
	return fmt.Sprintf("In Pathfinder\n%s\n%s\n%d\n%s\n%s", s.Player.Divinity, s.Player.Profession, s.Player.Age, strings.Join(stats, "\n"), strings.Join(s.Player.Spells, "\n"))
}

func Middleware(next func(*State)) func(state.State) {
	return func(s state.State) {
		cast := s.(*State)
		next(cast)
	}
}

func EndingMiddleware(*State) {

}

func (p *Player) IncreaseJoy(amount int) {
	p.Stats[Joy].Modify(amount)
}

func (p *Player) IncreaseCuriosity(amount int) {
	p.Stats[Curiosity].Modify(amount)
}

func (p *Player) AddSpell(spell string) {
	p.Spells = append(p.Spells, spell)
}
