package engine

import "github.com/Code-and-Conjure/Fantasy-Foundry/v2/dnd5e"

type Dnd5e struct {
}

func (e *Dnd5e) Stats() []string {
	return []string{dnd5e.Strength, dnd5e.Dexterity, dnd5e.Constitution}
}
