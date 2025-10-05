# Dungeon Link - Level 1 Full Demo

turns = {
    "P1_T1": {
        "description": "You have been thrown into a dungeon cell. In front of you, "
                       "there is a barred window, a skeleton in the corner, "
                       "a lock on the cell, and your butt is itchy.\n\n"
                       "What would you like to do?",
        "options": {
            "Inspect the skeleton": {
                "outcome": "A picture is shoved into the ribcage. "
                           "It depicts two rats with their tails tied together.",
                "gain": "rat_hint",
                "next": "P2_T1"
            },
            "Look outside the window": {
                "outcome": "It is revealed that you and your friend are in towers rather than cells. "
                           "You can see your friend in the tower directly across from you labeled 'S'. "
                           "There are two more towers, one on your left and one on your right.",
                "next": "P2_T1"
            },
            "Scratch your butt": {
                "outcome": "You feel a rubbery presence graze your hands. "
                           "This familiar feeling is the magical sausage you always keep in your pants!\n\n"
                           "SERVER: P1 & P2 now have the ability to link words to each other "
                           "due to the magical sausage providing 3G connection.",
                "gain": "sausage",
                "unlock": "message",
                "next": "P2_T1"
            },
            "Inspect the lock": {
                "outcome": "The lock appears to be extremely rusted.",
                "next": "P2_T1"
            }
        }
    },

    "P2_T1": {
        "description": "You have been thrown into a dungeon cell. There are rats all around you "
                       "and a barred window in front of you. Voices of the guards can be heard at a distance.\n\n"
                       "What would you like to do?",
        "options": {
            "Inspect the rats": {
                "outcome": "The rats jump out at you! You run around frantically swatting them away, "
                           "until you trip on a loose floorboard?",
                "gain": "floorboard",
                "next": "P1_T2"
            },
            "Look outside the window": {
                "outcome": "It is revealed that you and your friend are in towers rather than cells. "
                           "You can see your friend in the tower directly across from you labeled 'S'. "
                           "There are two more towers, one on your left and one on your right.",
                "next": "P1_T2"
            },
            "Eavesdrop on the guards": {
                "outcome": "Listening to guards reveals that a strong phallic energy (meaning sausages) "
                           "has been detected within each of the 4 towers. You must gather them to escape!",
                "gain": "sausage_hint",
                "next": "P1_T2"
            },
            "Cry =(": {
                "outcome": "Nothing happens. LOCK IN BRO",
                "next": "P1_T2"
            }
        }
    },

    "P1_T2": {
        "description": "With your new found power, do you want to use it, or explore the other options?\n\n"
                       "What would you like to do?",
        "options": {
            "Use the sausage": {
                "require": "sausage",
                "outcome": "You squeeze the sausage like a phone. Magic pulses, "
                           "waiting for you to send a message (hard-coded for now).",
                "next": "P2_T2"
            },
            "Inspect the rusty lock": {
                "outcome": "The lock appears to be extremely rusted.",
                "next": "P2_T2"
            },
            "Look outside window": {
                "outcome": "You can see your friend across in the south tower. "
                           "The prison is shaped like a cross.",
                "next": "P2_T2"
            },
            "Inspect Skeleton": {
                "outcome": "A picture is shoved into the ribcage. "
                           "It depicts two rats with their tails tied together.",
                "gain": "rat_hint",
                "next": "P2_T2"
            }
        }
    },

    "P2_T2": {
        "description": "What would you like to do?",
        "options": {
            "Check floor board": {
                "require": "floorboard",
                "outcome": "Underneath the floorboard is a nail file? You hold on to it for now.",
                "gain": "nail_file",
                "next": "P1_T3"
            },
            "Look outside the window": {
                "outcome": "You see your friend across the courtyard. Same layout as before.",
                "next": "P1_T3"
            },
            "Eavesdrop on the guards": {
                "outcome": "The guards mutter again about phallic energy in the towers.",
                "next": "P1_T3"
            },
            "Cry =(": {
                "outcome": "You cry loudly. The guards chuckle again.",
                "next": "P1_T3"
            }
        }
    },

    "P1_T3": {
        "description": "What would you like to do?",
        "options": {
            "Use the sausage": {
                "require": "sausage",
                "outcome": "You channel sausage energy. Messages are possible (hard-coded for now).",
                "next": "P2_T3"
            },
            "Inspect the rusty lock": {
                "outcome": "Still rusty. Needs a tool.",
                "next": "P2_T3"
            },
            "Look outside window": {
                "outcome": "The towers remain. Your friend waves back.",
                "next": "P2_T3"
            },
            "Inspect Skeleton": {
                "outcome": "Still shows the tied rat tails picture.",
                "next": "P2_T3"
            }
        }
    },

    "P2_T3": {
        "description": "By now you should have listened to guards & found the nail file.\n\nWhat would you like to do?",
        "options": {
            "Tell your friend about the map layout using 3G": {
                "require": "sausage",
                "outcome": "You share the info via sausage magic (hard coded).",
                "next": "P1_T4"
            },
            "Inspect the rats again???": {
                "outcome": "The rats hiss. You sense a puzzle involving tails.",
                "next": "P1_T4"
            },
            "Look outside the window": {
                "outcome": "Same view as before. Nothing new.",
                "next": "P1_T4"
            },
            "Eavesdrop on the guards again": {
                "outcome": "Still talking sausages. They don’t shut up.",
                "next": "P1_T4"
            }
        }
    },

    "P1_T4": {
        "description": "What would you like to do?",
        "options": {
            "Use the sausage to tell your friend about the secret of the rat tails": {
                "require": "sausage",
                "require2": "rat_hint",
                "outcome": "You tell your friend about picture of the rat tails tied together.",
                "next": "P2_T4"
            },
            "Inspect the rusty lock": {
                "outcome": "Rusty. Still needs a tool.",
                "next": "P2_T4"
            },
            "Look outside window": {
                "outcome": "Towers. Guards. Friend. Nothing new.",
                "next": "P2_T4"
            },
            "Inspect Skeleton": {
                "outcome": "Rat picture still in place.",
                "next": "P2_T4"
            }
        }
    },

    "P2_T4": {
        "description": "Dozens of rats are scrambling about in their cell:\n\nWhat would you like to do?",
        "options": {
            "Tie their tails together": {
                "outcome": "The rat tails knot. The jail cell suddenly opens.",
                "gain": "escape_open",
                "next": "P1_T5"
            },
            "Kick them around": {
                "outcome": "You stomp rats. They squeak angrily. Nothing useful.",
                "next": "P1_T5"
            },
            "Talk to them": {
                "outcome": "You whisper to the rats. They ignore you.",
                "next": "P1_T5"
            },
            "Ignore them": {
                "outcome": "You stare at the wall instead. Pointless.",
                "next": "P1_T5"
            }
        }
    },

    "P1_T5": {
        "description": "P1 notified of 4G sausage power.\n\nWhat should you do?",
        "options": {
            "Message your friend about the random rust lock": {
                "require": "sausage",
                "outcome": "You tell your friend: 'yo lock rusty, need tool'.",
                "next": "P2_T5"
            },
            "Inspect the rusty lock": {
                "outcome": "Still rusty. Still locked.",
                "next": "P2_T5"
            },
            "Look outside window": {
                "outcome": "Towers. Nothing new.",
                "next": "P2_T5"
            },
            "Inspect Skeleton": {
                "outcome": "Rat picture again. Same hint.",
                "next": "P2_T5"
            }
        }
    },

    "P2_T5": {
        "description": "Upon tying the rats’ tails, the jail cell door suddenly opens. "
                       "Two guards approach: 'How’d you escape? You weak link scum!'\n\nWhat would you like to do?",
        "options": {
            "Throw the connected rats at the guards": {
                "outcome": "The rats hook onto the guards, triggering a giant rat centipede chain reaction. "
                           "After devouring the guards, the swarm exits, leaving behind a glowing sausage (4G teleport).",
                "gain": "teleport",
                "next": "P1_T6"
            },
            "Seduce the guards": {
                "outcome": "You try to seduce the guards. They laugh and beat you up. GAME OVER.",
                "gameover": True,
                "next": None
            },
            "Fight the guards": {
                "outcome": "You attack head on. The guards overpower you. GAME OVER.",
                "gameover": True,
                "next": None
            },
            "Bribe the guards": {
                "outcome": "You offer imaginary money. They laugh and kill you. GAME OVER.",
                "gameover": True,
                "next": None
            }
        }
    },

    "P1_T6": {
        "description": "What would you like to do?",
        "options": {
            "Message your friend about the random rust lock": {
                "require": "sausage",
                "outcome": "You inform your friend they’ll need to pass you a tool for the lock.",
                "next": "P2_T6"
            },
            "Inspect the rusty lock": {
                "outcome": "Still rusty. Still locked.",
                "next": "P2_T6"
            },
            "Look outside window": {
                "outcome": "No change.",
                "next": "P2_T6"
            },
            "Inspect Skeleton": {
                "outcome": "Rat picture. Same hint.",
                "next": "P2_T6"
            }
        }
    },

    "P2_T6": {
        "description": "With guards defeated, you have new options:\n\nWhat would you like to do?",
        "options": {
            "Go downstairs": {
                "outcome": "You descend, but your friend is still trapped. You must free them first.",
                "next": "P1_T7"
            },
            "Teleport nail file to P1": {
                "require": "teleport",
                "require2": "nail_file",
                "outcome": "You focus and teleport the nail file to your friend’s cell.",
                "give": "nail_file",
                "next": "P1_T7"
            },
            "Check remains of guards": {
                "outcome": "Just bones. Nothing useful.",
                "next": "P1_T7"
            },
            "Cry =(": {
                "outcome": "You cry over the corpses. Disturbing.",
                "next": "P1_T7"
            }
        }
    },

    "P1_T7": {
        "description": "What would you like to do?",
        "options": {
            "File off the jail cell lock": {
                "require": "nail_file",
                "outcome": "You scrape the rust away. The cell door creaks open. You are free!",
                "gain": "escape",
                "next": None
            },
            "Inspect the rusty lock": {
                "outcome": "Still locked. Needs a tool.",
                "next": None
            },
            "Look outside window": {
                "outcome": "Still towers.",
                "next": None
            },
            "Inspect Skeleton": {
                "outcome": "Same rat hint.",
                "next": None
            }
        }
    }
}


def play_turn(turn_id, state, player):
    """Play one turn for the given player."""
    if turn_id is None:
        return None

    turn = turns[turn_id]
    print("\n--- " + turn_id + " ---")
    print(turn["description"])

    # filter available options (check requirements)
    options = []
    for key, value in turn["options"].items():
        if "require" in value and value["require"] not in state["inventory"]:
            continue
        if "require2" in value and value["require2"] not in state["inventory"]:
            continue
        options.append(key)

    for i, option in enumerate(options, 1):
        print(f"{i}. {option}")

    # get player choice
    while True:
        try:
            choice_num = int(input(f"{player} > "))
            if 1 <= choice_num <= len(options):
                choice = options[choice_num - 1]
                break
            else:
                print("Invalid option. Try again.")
        except ValueError:
            print("Please enter a number.")

    result = turn["options"][choice]
    print("\n" + result["outcome"])

    # update state
    if "gain" in result:
        state["inventory"].append(result["gain"])
        print(f"🎒 Inventory updated: {state['inventory']}")

    if "give" in result:
        state["inventory"].append(result["give"])
        print(f"🎒 Item received: {result['give']}")

    if "unlock" in result:
        state["unlocks"].append(result["unlock"])
        print(f"✨ New ability unlocked: {result['unlock']}")

    if "gameover" in result and result["gameover"]:
        print("💀 GAME OVER 💀")
        return None

    return result["next"]


def main():
    print("=== Welcome to DUNGEON LINK: Level 1 ===")
    state = {"inventory": [], "unlocks": []}
    current = "P1_T1"
    turn_counter = 1

    while current:
        player = "P1" if turn_counter % 2 == 1 else "P2"
        current = play_turn(current, state, player)
        turn_counter += 1

    print("\n=== END OF LEVEL 1 DEMO ===")
    print(f"Final Inventory: {state['inventory']}")
    print(f"Unlocked Powers: {state['unlocks']}")


if __name__ == "__main__":
    main()
