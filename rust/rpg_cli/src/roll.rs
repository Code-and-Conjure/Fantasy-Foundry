extern crate rand;

use self::rand::Rng;

#[derive(Debug)]
struct Roll {
    result: Option<u8>,
    max: u8
}

#[derive(Debug)]
pub struct RollQuery {
    query: String,
    rolls: Option<Vec<Roll>>,
    pub total: Option<u16>
}

impl Roll{
    fn new(sides: u8) -> Roll {
        Roll{
            max: sides,
            result: None
        }
    }

    fn roll(&mut self) {
        self.result = Some(rand::thread_rng().gen_range(1, self.max + 1));
    }
}

impl RollQuery {
    pub fn new(query: String) -> RollQuery {
        RollQuery{
            query,
            rolls: None,
            total: None
        }
    }

    pub fn run(&mut self){
        let roll_type = self.query.split('+');
        let mut rolls: Vec<Roll> = Vec::new();
        let mut sum = 0;
        
        for roll in roll_type {
            let roll: Vec<&str> = roll.split('d').collect();
            
            assert_eq!(roll.len(), 2, "Roll must be in the form of {{ number }}d{{ sides }}");

            let number = roll[0].parse::<u8>().expect("Number of Die must be a number between 0 and 255");
            let sides = roll[1].parse::<u8>().expect("Sides of Die must be a number between 0 and 254");

            rolls.reserve(number as usize);

            for _ in 0..number{
                let mut roll = Roll::new(sides);
                roll.roll();
                sum += roll.result.expect("Unable to roll die") as u16;
                rolls.push(roll);
            }
        }
        self.rolls = Some(rolls);
        self.total = Some(sum);
    }
}