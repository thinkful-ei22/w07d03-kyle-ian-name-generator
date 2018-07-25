function firstNameGenerator(firstName){
    const firstLetter = firstName[0];
    let firstBandName

    switch(firstLetter){
        case 'a':
          firstBandName = "Rancid"
          return firstBandName;
        case 'b':
          firstBandName = "Insane"
          return firstBandName;
        case 'c':
          firstBandName = "Black"
          return firstBandName;  
        case 'd':
          firstBandName = "Iron"
          return firstBandName;  
        case 'e':
          firstBandName = "Holy"
          return firstBandName;
        case 'f':
          firstBandName = "Rabid"
          return firstBandName;
        case 'g':
          firstBandName = "Rabid"
          return firstBandName;  
        case 'h':
          firstBandName = "Satan's"
          return firstBandName;
        case 'i':
          firstBandName = "Bastard"
          return firstBandName;  
        case 'j':
          firstBandName = "Foresaken"
          return firstBandName; 
        case 'k':
          firstBandName = "Dark"
          return firstBandName;  
        case 'l':
          firstBandName = "Frantic"
          return firstBandName;  
        case 'm':
          firstBandName = "Forbidden"
          return firstBandName; 
        case 'n':
          firstBandName = "Devil's"
          return firstBandName;  
        case 'o':
          firstBandName = "Evil"
          return firstBandName;  
        case 'p':
          firstBandName = "Inner"
          return firstBandName;  
        case 'q':
          firstBandName = "Bleeding"
          return firstBandName;  
        case 'r':
          firstBandName = "Guilty"
          return firstBandName;  
        case 's':
          firstBandName = "Witch's"
          return firstBandName;  
        case 't':
          firstBandName = "Heavy"
          return firstBandName;  
        case 'u':
          firstBandName = "Illegal"
          return firstBandName;  
        case 'v':
          firstBandName = "Fallen"
          return firstBandName; 
        case 'w':
          firstBandName = "Sinister"
          return firstBandName;  
        case 'x':
          firstBandName = "Crazy"
          return firstBandName;  
        case 'y':
          firstBandName = "Troubled"
          return firstBandName;  
        case 'z':
          firstBandName = "Sweaty"
          return firstBandName;
}
}

function lastNameGenerator(lastName){
    const firstLetter = lastName[0];
    let lastBandName;

    switch(firstLetter){
        case 'a':
          lastBandName = "Empire"
          return lastBandName;
        case 'b':
          lastBandName = "Fury"
          return lastBandName;
        case 'c':
          lastBandName = "Rage"
          return lastBandName;  
        case 'd':
          lastBandName = "Zombies"
          return lastBandName;  
        case 'e':
          lastBandName = "Sin"
          return lastBandName;
        case 'f':
          lastBandName = "Warriors"
          return lastBandName;
        case 'g':
          lastBandName = "Angels"
          return lastBandName;  
        case 'h':
          lastBandName = "Death"
          return lastBandName;
        case 'i':
          lastBandName = "Anarchy"
          return lastBandName;  
        case 'j':
          lastBandName = "Henchmen"
          return lastBandName; 
        case 'k':
          lastBandName = "Kill"
          return lastBandName;  
        case 'l':
          lastBandName = "Vengence"
          return lastBandName;  
        case 'm':
          lastBandName = "Tendencies"
          return lastBandName; 
        case 'n':
          lastBandName = "Magic"
          return lastBandName;  
        case 'o':
          lastBandName = "Soldier"
          return lastBandName;  
        case 'p':
          lastBandName = "Gods"
          return lastBandName;  
        case 'q':
          lastBandName = "Goblin"
          return lastBandName;  
        case 'r':
          lastBandName = "Spawn"
          return lastBandName;  
        case 's':
          lastBandName = "Temple"
          return lastBandName;  
        case 't':
          lastBandName = "Realm"
          return lastBandName;  
        case 'u':
          lastBandName = "Hate"
          return lastBandName;  
        case 'v':
          lastBandName = "Slaves"
          return lastBandName; 
        case 'w':
          lastBandName = "Thorn"
          return lastBandName;  
        case 'x':
          lastBandName = "Abyss"
          return lastBandName;  
        case 'y':
          lastBandName = "Fire"
          return lastBandName;  
        case 'z':
          lastBandName = "Secrets"
          return lastBandName;  
    }
}

module.exports = {firstNameGenerator, lastNameGenerator};