#![feature(try_reserve)]

extern crate rand;

use rand::Rng;
use std::env;

#[derive(Debug)]
struct DieRoll {
    rolls: Vec<u8>,
    total: u16
}

struct DiceQuery {
    number: u8,
    sides: u8
}

fn main() {
    let args: Vec<String> = env::args().collect();

    assert!(args.len() > 1, "Must provide a dice roll");

    let die_rolls: Vec<DiceQuery> = args[1].split('+').map(|q| {
        let query : Vec<&str> = q.split('d').collect();
        
        assert_eq!(query.len(), 2, "Must be in the form {{ n }}d{{ sides }}");

        DiceQuery { 
            number: query[0].parse::<u8>().expect("Number of Die must be between 0 and 255"), 
            sides: query[1].parse::<u8>().expect("Sides of Die must be between 0 and 254")
        }
    }).collect();

    println!("{:?}", roll_query(&die_rolls));
}

fn roll_query(q: &Vec<DiceQuery>) -> DieRoll {
    let mut total: u16 = 0;
    let mut rolls: Vec<u8> = Vec::new();
    let mut rng = rand::thread_rng();

    for i in q {
        rolls.try_reserve(i.number as usize).expect("Unable to reserve enough space");
        
        for _ in 0..i.number {
            let roll = rng.gen_range(1, i.sides + 1);
            rolls.push(roll);
            total += roll as u16;
        }
    }

    DieRoll { 
        rolls,
        total
    }
}