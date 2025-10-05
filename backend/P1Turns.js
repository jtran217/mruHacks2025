const p1Turns = [
    {
      id: "P1_T1",
      description: "You have been thrown into a dungeon cell. In front of you, there is a barred window, a skeleton in the corner, a lock on the cell, and your butt is itchy.\n\nWhat would you like to do?",
      options: {
        "Inspect the skeleton": {
          outcome: "A picture is shoved into the ribcage. It depicts two rats with their tails tied together.",
          gain: "rat_hint",
          next: "P2_T1"
        },
        "Look outside the window": {
          outcome: "It is revealed that you and your friend are in towers rather than cells. You can see your friend in the tower directly across from you labeled 'S'. There are two more towers, one on your left and one on your right.",
          next: "P2_T1"
        },
        "Scratch your butt": {
          outcome: "You feel a rubbery presence graze your hands. This familiar feeling is the magical sausage you always keep in your pants!\n\nSERVER: P1 & P2 now have the ability to link words to each other due to the magical sausage providing 3G connection.",
          gain: "sausage",
          unlock: "message",
          next: "P2_T1"
        },
        "Inspect the lock": {
          outcome: "The lock appears to be extremely rusted.",
          next: "P2_T1"
        }
      }
    },
    {
      id: "P1_T2",
      description: "With your new found power, do you want to use it, or explore the other options?\n\nWhat would you like to do?",
      options: {
        "Use the sausage": {
          require: "sausage",
          outcome: "You squeeze the sausage like a phone. Magic pulses, waiting for you to send a message (hard-coded for now).",
          next: "P2_T2"
        },
        "Inspect the rusty lock": {
          outcome: "The lock appears to be extremely rusted.",
          next: "P2_T2"
        },
        "Look outside window": {
          outcome: "You can see your friend across in the south tower. The prison is shaped like a cross.",
          next: "P2_T2"
        },
        "Inspect Skeleton": {
          outcome: "A picture is shoved into the ribcage. It depicts two rats with their tails tied together.",
          gain: "rat_hint",
          next: "P2_T2"
        }
      }
    },
    {
      id: "P1_T3",
      description: "What would you like to do?",
      options: {
        "Use the sausage": {
          require: "sausage",
          outcome: "You channel sausage energy. Messages are possible (hard-coded for now).",
          next: "P2_T3"
        },
        "Inspect the rusty lock": {
          outcome: "Still rusty. Needs a tool.",
          next: "P2_T3"
        },
        "Look outside window": {
          outcome: "The towers remain. Your friend waves back.",
          next: "P2_T3"
        },
        "Inspect Skeleton": {
          outcome: "Still shows the tied rat tails picture.",
          next: "P2_T3"
        }
      }
    },
    {
      id: "P1_T4",
      description: "What would you like to do?",
      options: {
        "Use the sausage to tell your friend about the secret of the rat tails": {
          require: "sausage",
          require2: "rat_hint",
          outcome: "You tell your friend about picture of the rat tails tied together.",
          next: "P2_T4"
        },
        "Inspect the rusty lock": {
          outcome: "Rusty. Still needs a tool.",
          next: "P2_T4"
        },
        "Look outside window": {
          outcome: "Towers. Guards. Friend. Nothing new.",
          next: "P2_T4"
        },
        "Inspect Skeleton": {
          outcome: "Rat picture still in place.",
          next: "P2_T4"
        }
      }
    },
    {
      id: "P1_T5",
      description: "P1 notified of 4G sausage power.\n\nWhat should you do?",
      options: {
        "Message your friend about the random rust lock": {
          require: "sausage",
          outcome: "You tell your friend: 'yo lock rusty, need tool'.",
          next: "P2_T5"
        },
        "Inspect the rusty lock": {
          outcome: "Still rusty. Still locked.",
          next: "P2_T5"
        },
        "Look outside window": {
          outcome: "Towers. Nothing new.",
          next: "P2_T5"
        },
        "Inspect Skeleton": {
          outcome: "Rat picture again. Same hint.",
          next: "P2_T5"
        }
      }
    },
    {
      id: "P1_T6",
      description: "What would you like to do?",
      options: {
        "Message your friend about the random rust lock": {
          require: "sausage",
          outcome: "You inform your friend they’ll need to pass you a tool for the lock.",
          next: "P2_T6"
        },
        "Inspect the rusty lock": {
          outcome: "Still rusty. Still locked.",
          next: "P2_T6"
        },
        "Look outside window": {
          outcome: "No change.",
          next: "P2_T6"
        },
        "Inspect Skeleton": {
          outcome: "Rat picture. Same hint.",
          next: "P2_T6"
        }
      }
    },
    {
      id: "P1_T7",
      description: "What would you like to do?",
      options: {
        "File off the jail cell lock": {
          require: "nail_file",
          outcome: "You scrape the rust away. The cell door creaks open. You are free!",
          gain: "escape",
          next: null
        },
        "Inspect the rusty lock": {
          outcome: "Still locked. Needs a tool.",
          next: null
        },
        "Look outside window": {
          outcome: "Still towers.",
          next: null
        },
        "Inspect Skeleton": {
          outcome: "Same rat hint.",
          next: null
        }
      }
    }
  ];

module.exports = p1Turns;
