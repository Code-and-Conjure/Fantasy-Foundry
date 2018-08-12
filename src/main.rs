extern crate roll;

use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();

    assert!(args.len() > 1, "Must provide a dice roll");

    let mut dice_query = roll::RollQuery::new(&args[1]);
    dice_query.run();

    println!("{:?}", dice_query);
}