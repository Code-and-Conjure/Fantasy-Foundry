package mechanic

type Stat struct {
	Name  string
	Value int
}

func (s *Stat) Modify(change int) {
	s.Value += change
}
