use roll::RollQuery;

pub enum Command {
    Roll(RollQuery),
    Chat(String)
}

impl Command {
    pub fn new(cmd: &str, args: Option<&[String]>) -> Command {
        match cmd {
            "/r" => { 
                return Command::Roll(RollQuery::new(args.unwrap()));
            }
            _ => 
                return Command::Chat(cmd.to_owned() + " " + &args.unwrap().join(" "))
        }
    }
}