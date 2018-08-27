use roll::RollQuery;

pub enum Command {
    Roll(RollQuery),
    Chat(String)
}

impl Command {
    pub fn new(cmd: &str) -> Command {
        match &cmd[0..2] {
            "/r" => { 
                return Command::Roll(RollQuery::new(cmd[3..].to_owned()));
            }
            _ => 
                return Command::Chat(cmd.to_owned())
        }
    }
}