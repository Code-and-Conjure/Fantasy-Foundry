extern crate rpg_cli;

use rpg_cli::command::Command::{Chat, Roll};
use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();

    assert!(args.len() > 1, "Must provide a command!");

    let params = 
        if args.len() > 2 { 
            Some(&args[2..]) 
        }
        else { 
            None
        };

    match rpg_cli::command::Command::new(&args[1], params){
        Roll(mut cmd) => {
            cmd.run();

            println!("{:?}", cmd);
        },
        Chat(s) => println!("{}", s)
    }

}