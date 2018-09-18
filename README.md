<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->
**Table of Contents**

- [Aurora Comatose](#aurora-comatose)
    - [What is this?](#what-is-this)
    - [How to use this](#how-to-use-this)

<!-- markdown-toc end -->

# Aurora Comatose #
## What is this? ##
In a way, this is a way to learn new technology while working on something we the contributors have a passion for: Tabletop RPG. This system is our attempt at a character creation tool, and a game callback system that will allow anyone to write their own rules, systems, and packages that will directly integrate. The UI (user interface) will offer an easy way to use the system, as well as display the current state of the store (characters/races/classes/etc.).
## How to use this ##
Custom sources will be loaded, and are given access to dispatch actions to modify the state of the store, as well as listen for actions to be dispatched of their own for custom callback functions.
## What's that name for? ##
You know two words that sound really cool separately? Aurora and Comatose. Put them together, and we've achieved superior coolness not seen in apps with only one cool word.
**But those words have nothing to do with tabletop rpg**
Not true! Both words are cool - Just like tabletop rpg!
# [Wiki](https://thelettertheta.github.io/tabletop-rpg/ "See our Wiki!") #

# Getting Started #
## Couch ##
You can sync with a CouchDB either hosted locally (for development) or externally. We use docker to run our image. Just remember to use authentication when syncing with your databases. The default port for CouchDB is http://localhost:5984. A developer authentication can be achieved using http://{{user}}:{{password}}@localhost:5984/{{database}}.
## Node ##
Download [Node](https://nodejs.org/en/ "nodejs")
Then run ```cd angular/ && npm install``` to download the project dependencies.
## Angular ##
Install the ```@angular/cli``` via npm using the ```npm install -g @angular/cli@latest``` command from your terminal.
## Serve ##
Make sure you're in the angular/ directory and serve the project via the ```ng serve``` command.
