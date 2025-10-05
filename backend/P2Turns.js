const p2Turns = [
    {
      id: "P2_T1",
      description: "You have been thrown into a dungeon cell. There are rats all around you and a barred window in front of you. Voices of the guards can be heard at a distance.\n\nWhat would you like to do?",
      options: {
        "Inspect the rats": {
          outcome: "The rats jump out at you! You run around frantically swatting them away, until you trip on a loose floorboard?",
          gain: "floorboard",
          next: "P1_T2"
        },
        "Look outside the window": {
          outcome: "It is revealed that you and your friend are in towers rather than cells. You can see your friend in the tower directly across from you labeled 'S'. There are two more towers, one on your left and one on your right.",
          next: "P1_T2"
        },
        "Eavesdrop on the guards": {
          outcome: "Listening to guards reveals that a strong phallic energy (meaning sausages) has been detected within each of the 4 towers. You must gather them to escape!",
          gain: "sausage_hint",
          next: "P1_T2"
        },
        "Cry =(": {
          outcome: "Nothing happens. LOCK IN BRO",
          next: "P1_T2"
        }
      }
    },
    {
      id: "P2_T2",
      description: "What would you like to do?",
      options: {
        "Check floor board": {
          require: "floorboard",
          outcome: "Underneath the floorboard is a nail file? You hold on to it for now.",
          gain: "nail_file",
          next: "P1_T3"
        },
        "Look outside the window": {
          outcome: "You see your friend across the courtyard. Same layout as before.",
          next: "P1_T3"
        },
        "Eavesdrop on the guards": {
          outcome: "The guards mutter again about phallic energy in the towers.",
          next: "P1_T3"
        },
        "Cry =(": {
          outcome: "You cry loudly. The guards chuckle again.",
          next: "P1_T3"
        }
      }
    },
    {
      id: "P2_T3",
      description: "By now you should have listened to guards & found the nail file.\n\nWhat would you like to do?",
      options: {
        "Tell your friend about the map layout using 3G": {
          require: "sausage",
          outcome: "You share the info via sausage magic (hard coded).",
          next: "P1_T4"
        },
        "Inspect the rats again???": {
          outcome: "The rats hiss. You sense a puzzle involving tails.",
          next: "P1_T4"
        },
        "Look outside the window": {
          outcome: "Same view as before. Nothing new.",
          next: "P1_T4"
        },
        "Eavesdrop on the guards again": {
          outcome: "Still talking sausages. They don’t shut up.",
          next: "P1_T4"
        }
      }
    },
    {
      id: "P2_T4",
      description: "Dozens of rats are scrambling about in their cell:\n\nWhat would you like to do?",
      options: {
        "Tie their tails together": {
          outcome: "The rat tails knot. The jail cell suddenly opens.",
          gain: "escape_open",
          next: "P1_T5"
        },
        "Kick them around": {
          outcome: "You stomp rats. They squeak angrily. Nothing useful.",
          next: "P1_T5"
        },
        "Talk to them": {
          outcome: "You whisper to the rats. They ignore you.",
          next: "P1_T5"
        },
        "Ignore them": {
          outcome: "You stare at the wall instead. Pointless.",
          next: "P1_T5"
        }
      }
    },
    {
      id: "P2_T5",
      description: "Upon tying the rats’ tails, the jail cell door suddenly opens. Two guards approach: 'How’d you escape? You weak link scum!'\n\nWhat would you like to do?",
      options: {
        "Throw the connected rats at the guards": {
          outcome: "The rats hook onto the guards, triggering a giant rat centipede chain reaction. After devouring the guards, the swarm exits, leaving behind a glowing sausage (4G teleport).",
          gain: "teleport",
          next: "P1_T6"
        },
        "Seduce the guards": {
          outcome: "You try to seduce the guards. They laugh and beat you up. GAME OVER.",
          gameover: true,
          next: null
        },
        "Fight the guards": {
          outcome: "You attack head on. The guards overpower you. GAME OVER.",
          gameover: true,
          next: null
        },
        "Bribe the guards": {
          outcome: "You offer imaginary money. They laugh and kill you. GAME OVER.",
          gameover: true,
          next: null
        }
      }
    },
    {
      id: "P2_T6",
      description: "With guards defeated, you have new options:\n\nWhat would you like to do?",
      options: {
        "Go downstairs": {
          outcome: "You descend, but your friend is still trapped. You must free them first.",
          next: "P1_T7"
        },
        "Teleport nail file to P1": {
          require: "teleport",
          require2: "nail_file",
          outcome: "You focus and teleport the nail file to your friend’s cell.",
          give: "nail_file",
          next: "P1_T7"
        },
        "Check remains of guards": {
          outcome: "Just bones. Nothing useful.",
          next: "P1_T7"
        },
        "Cry =(": {
          outcome: "You cry over the corpses. Disturbing.",
          next: "P1_T7"
        }
      }
    }
  ];

module.exports = p2Turns;