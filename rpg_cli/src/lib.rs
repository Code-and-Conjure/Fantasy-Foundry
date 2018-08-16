#![feature(slice_concat_ext)]
pub mod roll;
pub mod command;

#[cfg(test)]
mod tests {

    use command::Command;
    use command::Command::{Chat, Roll};

    #[test]
    fn roll_one_sided_die() {
        match Command::new("/r", Some(&[String::from("20d1")])) {
            Roll(mut v) => {
                v.run();
                assert_eq!(v.total, Some(20))
            }
            ,
            _ =>
                panic!("Expected Roll value")
        }
        
    }

    #[test]
    fn chat() {
        match Command::new("Test string to chat", Some(&["with".to_owned()])) {
            Chat(s) => assert_eq!("Test string to chat with", s),
            _ => panic!("Expected to chat")
        }
    }
}

