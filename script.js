"use strict";
var $ = function(id) { 
    return document.getElementById(id); 
};

//virtual dice roll to build stats
var diceRoll = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random();               //value >= 0.0 and < 1.0
        random = Math.floor(random * max);   //value is an integer between 0 and max - 1
        random = random + 1;                //value is an integer between 1 and max
    }
    return random;
};


// race descript array used to display information
var raceD = [];
raceD["dwarves"] = "Short, stocky, stern, and strong. They have a connection to the earth and ofthen live in mountains or underground lands.<br><br> Stat modifiers: +2 Constitution, +2 Wisdom, -2 Charisma.";
raceD["elves"] = "Tall, long-lived, aloof, and connected to nature. Elves live in harmony with the natural world around them.<br><br> Stat modifiers: +2 Dexterity, +2 Intelligence, –2 Constitution.";
raceD["gnomes"] = "Mysterious, adventure-seeking, and strange. Gnomes are the smallest common race.<br><br> Stat modifiers: +2 Constitution, +2 Charisma, –2 Strength.";
raceD["halfElf"] = "Solitary, long-lived, graceful, and hearty. Half-elves are few in number, and tend to be wanderers due to their lack of homeland.<br><br> Stat modifiers: +2 to one ability score.";
raceD["halfOrc"] = "Independent, strong, and distrusted. Half-orcs considered monstrosities by common folk. They are tall and powerfully built.<br><br> Stat modifiers: +2 to one ability score.";
raceD["halfling"] = "Optimistic, cheerful, curious, and small in stature. On average, only 3 ft (.9 m) tall, they are agile but physically weak.<br><br> Stat modifiers: +2 Dexterity, +2 Charisma, –2 Strength.";
raceD["human"] = "Adaptive, ambitious, and well-balanced. Humans are the dominant race, and are diverse in appearance and culture.<br><br> Stat modifiers: +2 to one ability score.";

// class description array to display information
var classD = [];
classD["barbarian"] = "Uncivilized and strong. Considered brutal berserkers.";
classD["bard"] = "Charismatic and crafty. Bards use skills and spells to help and harm.";
classD["cleric"] = "A firm believer in a deity. Clerics heal, raise the dead, and direct the wrath of god.";
classD["druid"] = "At one with nature. Druids cast spells, interact with animals, and change shapes.";
classD["fighter"] = "Firm and brave. Fighters are capable with weapons and comfortable in armor.";
classD["monk"] = "Martial masters. Monks train their minds and bodies for offense and defense.";
classD["paladin"] = "Followers of what is good and just. Paladins are devoted knights.";
classD["ranger"] = "Masters of woodcraft and wildlife. Rangers track and hunt foes.";
classD["rogue"] = "Stealthy assassins. Rogues are cunning thieves and able scouts.";
classD["sorcerer"] = "Natural born spellcasters. Sorcerers command strange, ancient energies.";
classD["wizard"] = "Lifelong magic students. Years of study allow wizards to use awesome magic power.";



// Race - verifies which radio button is selected and displays the proper description
var displayRace = function() {  
     
    if ($("dwarves").checked == true){
        $("raceBox").innerHTML = raceD["dwarves"];
        $("selectStats").style.display = "none"
    } else if ($("elves").checked == true){
        $("raceBox").innerHTML = raceD["elves"];
        $("selectStats").style.display = "none"
    } else if ($("gnomes").checked == true){
        $("raceBox").innerHTML = raceD["gnomes"];
        $("selectStats").style.display = "none"
    } else if ($("halfElf").checked == true){
        $("raceBox").innerHTML = raceD["halfElf"];
        $("selectStats").style.display = "block";
    } else if ($("halfOrc").checked == true){
        $("raceBox").innerHTML = raceD["halfOrc"];
        $("selectStats").style.display = "block";
    } else if ($("halfling").checked == true){
        $("raceBox").innerHTML = raceD["halfling"];
        $("selectStats").style.display = "none"
    } else if ($("human").checked == true){
        $("raceBox").innerHTML = raceD["human"];
        $("selectStats").style.display = "block";
    }
    
};



// Class - verifies which radio button is selected and dispays the proper decription
var displayClass = function() {
    
    if ($("barbarian").checked == true){
        $("classBox").innerHTML = classD["barbarian"];
    } else if ($("bard").checked == true){
        $("classBox").innerHTML = classD["bard"];
    } else if ($("cleric").checked == true){
        $("classBox").innerHTML = classD["cleric"];
    } else if ($("druid").checked == true){
        $("classBox").innerHTML = classD["druid"];
    } else if ($("fighter").checked == true){
        $("classBox").innerHTML = classD["fighter"];
    } else if ($("monk").checked == true){
        $("classBox").innerHTML = classD["monk"];
    } else if ($("paladin").checked == true){
        $("classBox").innerHTML = classD["paladin"];
    } else if ($("ranger").checked == true){
        $("classBox").innerHTML = classD["ranger"];
    } else if ($("rogue").checked == true){
        $("classBox").innerHTML = classD["rogue"];
    } else if ($("sorcerer").checked == true){
        $("classBox").innerHTML = classD["sorcerer"];
    } else if ($("wizard").checked == true){
        $("classBox").innerHTML = classD["wizard"];
    }
    
};

// rolls gold based on class selection
var rollGold = function() {
    
    var classRadio = document.getElementsByName('class');
    
    // loops through the class radio buttons to see which radio button is selected
    // if it is true it runs through a switch case 
    // depending on which position in the array, will roll a specific starting gold pieces formula
    // each position in the array is associated with a class
    for(var j=0; j<classRadio.length;j++){
        if(classRadio[j].checked == true){
            
            switch (classRadio[j]){
                case classRadio[0]:
                    $("gold").value = ((diceRoll(6) + diceRoll(6) + diceRoll(6)) * 10) + "  Gold Pieces";
                    break;
                case classRadio[1]:
                    $("gold").value = ((diceRoll(6) + diceRoll(6) + diceRoll(6)) * 10) + "  Gold Pieces";
                    break;
                case classRadio[2]:
                    $("gold").value = ((diceRoll(6) + diceRoll(6) + diceRoll(6) + diceRoll(6)) * 10) + "  Gold Pieces";
                    break;
                case classRadio[3]:
                    $("gold").value = ((diceRoll(6) + diceRoll(6)) * 10) + "  Gold Pieces";
                    break;
                case classRadio[4]:
                    $("gold").value = ((diceRoll(6) + diceRoll(6) + diceRoll(6) + diceRoll(6) + diceRoll(6)) * 10) + "  Gold Pieces";
                    break;
                case classRadio[5]:
                    $("gold").value = ((diceRoll(6)) * 10) + "  Gold Pieces";
                    break;
                case classRadio[6]:
                    $("gold").value = ((diceRoll(6) + diceRoll(6) + diceRoll(6) + diceRoll(6) + diceRoll(6)) * 10) + "  Gold Pieces";
                    break;
                case classRadio[7]:
                    $("gold").value = ((diceRoll(6) + diceRoll(6) + diceRoll(6) + diceRoll(6) + diceRoll(6)) * 10) + "  Gold Pieces";
                    break;
                case classRadio[8]:
                    $("gold").value = ((diceRoll(6)+ diceRoll(6) + diceRoll(6) + diceRoll(6)) * 10) + "  Gold Pieces";
                    break;
                case classRadio[9]:
                    $("gold").value = ((diceRoll(6) + diceRoll(6)) * 10) + "  Gold Pieces";
                    break;
                case classRadio[10]:
                    $("gold").value = ((diceRoll(6) + diceRoll(6)) * 10) + "  Gold Pieces";
                    break;
            }
        }
    }
   
    // same thing as above just in if else statement format
    /*
    if($("barbarian").checked == true){
        $("gold").value = ((diceRoll(6) + diceRoll(6) + diceRoll(6)) * 10) + "  Gold Pieces";
    } else if ($("bard").checked == true) {
        $("gold").value = ((diceRoll(6) + diceRoll(6) + diceRoll(6)) * 10) + "  Gold Pieces";
    } else if ($("cleric").checked == true){
        $("gold").value = ((diceRoll(6) + diceRoll(6) + diceRoll(6) + diceRoll(6)) * 10) + "  Gold Pieces";
    }else if ($("druid").checked == true){
        $("gold").value = ((diceRoll(6) + diceRoll(6)) * 10) + "  Gold Pieces";
    } else if ($("fighter").checked == true){
        $("gold").value = ((diceRoll(6) + diceRoll(6) + diceRoll(6) + diceRoll(6) + diceRoll(6)) * 10) + "  Gold Pieces";
    } else if ($("monk").checked == true){
        $("gold").value = ((diceRoll(6)) * 10) + "  Gold Pieces";
    } else if ($("paladin").checked == true){
        $("gold").value = ((diceRoll(6) + diceRoll(6) + diceRoll(6) + diceRoll(6) + diceRoll(6)) * 10) + "  Gold Pieces";
    } else if ($("ranger").checked == true){
        $("gold").value = ((diceRoll(6) + diceRoll(6) + diceRoll(6) + diceRoll(6) + diceRoll(6)) * 10) + "  Gold Pieces";
    } else if ($("rogue").checked == true){
        $("gold").value = ((diceRoll(6)+ diceRoll(6) + diceRoll(6) + diceRoll(6)) * 10) + "  Gold Pieces";
    } else if ($("sorcerer").checked == true){
        $("gold").value = ((diceRoll(6) + diceRoll(6)) * 10) + "  Gold Pieces";
    } else if ($("wizard").checked == true){
        $("gold").value = ((diceRoll(6) + diceRoll(6)) * 10) + "  Gold Pieces";
    }
    */
};

// rolls the stats that will populate in the stats section when the generate button is hit
// if clicked and successful rolls stats for the user
var rollStats = function() {
    var str = [];
    var dex = [];
    var cons = [];
    var int = [];
    var wis = [];
    var cha = [];
    var strSum = 0;
    var dexSum = 0;
    var consSum = 0;
    var intSum = 0;
    var wisSum = 0;
    var chaSum = 0;
    
    // loops 4 times adding a d6 value to each stat array
    var i = 0;
    while(i<4){
        str.push(diceRoll(6));
        dex.push(diceRoll(6));
        cons.push(diceRoll(6));
        int.push(diceRoll(6));
        wis.push(diceRoll(6));
        cha.push(diceRoll(6));
        i++;
    } 
    
    // sorts the array and then removes the lowest number
    str.sort();
    str.shift();
    dex.sort();
    dex.shift();
    cons.sort();
    cons.shift();
    int.sort();
    int.shift();
    wis.sort();
    wis.shift();
    cha.sort();
    cha.shift();
    
    // sums up the values of each stat 
    var j = 0
    while (j < str.length) {
        strSum += str[j];
        dexSum += dex[j];
        consSum += cons[j];
        intSum += int[j];
        wisSum += wis[j];
        chaSum += cha[j];
        j++;
    }
    
    // displays stat accordingly by race and applies race modifiers
    if ($("dwarves").checked == true) {
        $("str").value = strSum;
        $("dex").value = dexSum;
        $("cons").value = consSum + 2 + "    +2 Race Modifier";
        $("int").value = intSum;
        $("wis").value = wisSum + 2 + "    +2 Race Modifier";
        $("cha").value = chaSum - 2 + "    -2 Race Modifier";
    } else if ($("elves").checked == true){
        $("str").value = strSum;
        $("dex").value = dexSum + 2 + "    +2 Race Modifier";
        $("cons").value = consSum - 2 + "    -2 Race Modifier";
        $("int").value = intSum + 2 + "    +2 Race Modifier";
        $("wis").value = wisSum;
        $("cha").value = chaSum;
    } else if ($("gnomes").checked == true){
        $("str").value = strSum -2 + "    -2 Race Modifier";
        $("dex").value = dexSum;
        $("cons").value = consSum + 2 + "    +2 Race Modifier";
        $("int").value = intSum;
        $("wis").value = wisSum;
        $("cha").value = chaSum + 2 + "    +2 Race Modifier";
    } else if ($("halfling").checked == true){
        $("str").value = strSum - 2 + "    -2 Race Modifier";
        $("dex").value = dexSum + 2 + "    +2 Race Modifier";
        $("cons").value = consSum;
        $("int").value = intSum;
        $("wis").value = wisSum;
        $("cha").value = chaSum + 2 + "    +2 Race Modifier";
    }
    
    
    // if halfElf, halfOrc, or human is selected the user gets to add +2 to a stat of their choice. Verifies which is checked and adds it accordingly    
    if ($("halfElf").checked == true || $("halfOrc").checked == true || $("human").checked == true){
        if ($("strength").checked == true){
            $("str").value = strSum + 2 + "    +2 Race Modifier";
            $("dex").value = dexSum;
            $("cons").value = consSum;
            $("int").value = intSum;
            $("wis").value = wisSum;
            $("cha").value = chaSum;
        } else if ($("dexterity").checked == true){
            $("str").value = strSum;
            $("dex").value = dexSum + 2 + "    +2 Race Modifier";
            $("cons").value = consSum;
            $("int").value = intSum;
            $("wis").value = wisSum;
            $("cha").value = chaSum;
        } else if ($("constitution").checked == true){
            $("str").value = strSum;
            $("dex").value = dexSum;
            $("cons").value = consSum + 2 + "    +2 Race Modifier";
            $("int").value = intSum;
            $("wis").value = wisSum;
            $("cha").value = chaSum;
        } else if ($("intelligence").checked == true){
            $("str").value = strSum;
            $("dex").value = dexSum;
            $("cons").value = consSum;
            $("int").value = intSum + 2 + "    +2 Race Modifier";
            $("wis").value = wisSum;
            $("cha").value = chaSum;
        } else if ($("wisdom").checked == true){
            $("str").value = strSum;
            $("dex").value = dexSum;
            $("cons").value = consSum;
            $("int").value = intSum;
            $("wis").value = wisSum + 2 + "    +2 Race Modifier";
            $("cha").value = chaSum;
        } else if ($("charisma").checked == true){
            $("str").value = strSum;
            $("dex").value = dexSum;
            $("cons").value = consSum;
            $("int").value = intSum;
            $("wis").value = wisSum;
            $("cha").value = chaSum + 2 + "    +2 Race Modifier";
        }
    }
    
};

// validates that a name is inputed and that a race and class is selected
// then runs rollStats() 
var validate = function() {
    
    // validates if a name was entered
    // highlights the word name in red and alerts the user to enter a name
    if($("name").value == ""){
        $("nameL").innerHTML = "Name: ".fontcolor("red");
        alert("Please enter a name.");
    } else {
        $("nameL").innerHTML = "Name: ";
    }
    
    // validates if a race is selected
    var raceRadio = document.getElementsByName('race');
    var raceValue = false;
    // raceName array is associated with raceRadio i.e. raceName[0] = raceRadio[0]. 
    // used later to display what race was selected in the confirm box
    var raceName = ["Dwarves", "Elves", "Gnomes", "Half-Elf", "Half-Orc","Halfling", "Human"];
    var raceConfirm = "";
    // loops through race radio buttons to see which radio button is selected
    for(var j=0; j<raceRadio.length;j++){
        if(raceRadio[j].checked == true){
            raceValue = true;
            raceConfirm = raceName[j]; // stores which race is selected in a variable
            
        }
    }
    // if nothing is selected the select a race area is highlighted red
    // alerts the user to select a race
    if(raceValue == false){
        $("raceBox").innerHTML = "-------------------------------------------------- Please Select A Race --------------------------------------------------".fontcolor("red");
        alert("Please select a Race.");
    }
    
    
    // validates if a class is selected
    var classRadio = document.getElementsByName('class');
    var classValue = false;
    // className array is associated with classRadio i.e. className[0] = classRadio[0]. 
    // used later to display what race was selected in the confirm box
    var className = ["Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Wizard"];
    var classConfirm = "";
   
    // loops through class radio buttons to see which radio button is selected
    for(var j=0; j<classRadio.length;j++){
        if(classRadio[j].checked == true){
            classValue = true;
            classConfirm = className[j]; // stores which race is selected in a variable
            
        }
    }
    // if nothing is selected the select a class area is highlighted red
    // alerts the user to select a class
    if(classValue == false){
        $("classBox").innerHTML = "-------------------------------------------------- Please Select A Class --------------------------------------------------".fontcolor("red");
        alert("Please Select a Class.");
    }
    
    // validates if the possible "select your own stat" is selected
    var selectStatRadio = document.getElementsByName('selectS');
    var selectStatValue = false;
    // only runs this portion if halfElf, halfOrc, or human is selected
    // loops through if the possible "select your own stat" radio buttons to see which radio button is selected
    if ($("halfElf").checked==true || $("halfOrc").checked == true || $("human").checked == true){
        for(var j=0; j<selectStatRadio.length;j++){
            if(selectStatRadio[j].checked == true){
                selectStatValue = true;
                $("selectS").innerHTML = "Strenght";
                $("selectD").innerHTML = "Dexterity";
                $("selectC").innerHTML = "Constitution";
                $("selectI").innerHTML = "Intelligence";
                $("selectW").innerHTML = "Wisdom";
                $("selectCh").innerHTML = "Charisma";
            }
        }
        // if nothing is selected highlights each stat in red 
        // alerts the user to select a race modifier
        if(selectStatValue == false){
            $("selectS").innerHTML = "Strenght".fontcolor("red");
            $("selectD").innerHTML = "Dexterity".fontcolor("red");
            $("selectC").innerHTML = "Constitution".fontcolor("red");
            $("selectI").innerHTML = "Intelligence".fontcolor("red");
            $("selectW").innerHTML = "Wisdom".fontcolor("red");
            $("selectCh").innerHTML = "Charisma".fontcolor("red");
            alert("Please Select a Race Modifier.");
        }
    }
    
    // confirms with user if selections are correct (after validation) and rolls stats and gold
    // if all valid will display confirm box based on which race is selected to make sure everything is correct
    if (($("dwarves").checked == true || $("elves").checked == true || $("gnomes").checked == true || $("halfling").checked == true) && (raceValue == true && classValue == true && $("name").value !== "")){
        var conf = confirm("Does everything look good?\n \nName: " + $("name").value + "\nRace: " + raceConfirm + "\nClass: " + classConfirm + "\n-------------------" + "\nClick [OK] to roll stats or [CANCEL] to make a change.");
        if (conf == true){
            rollStats();
            rollGold();
        } 
    } else if (($("halfElf").checked == true || $("halfOrc").checked == true || $("human").checked == true) && (raceValue == true && classValue == true && $("name").value !== "" && selectStatValue == true)){
        var conf = confirm("Does everything look good?\n \nName: " + $("name").value + "\nRace: " + raceConfirm + "\nClass: " + classConfirm + "\n-------------------" + "\nClick [OK] to roll stats or [CANCEL] to make a change.");
        if (conf == true){
            rollStats();
            rollGold();
        }
    }
    
};

// resets the entire form 
var reset = function() {
    
    $("name").value = "";
    $("dwarves").checked = false;
    $("elves").checked = false;
    $("gnomes").checked = false;
    $("halfElf").checked = false;
    $("halfOrc").checked = false;
    $("halfling").checked = false;
    $("human").checked = false;
    $("barbarian").checked = false;
    $("bard").checked = false;
    $("cleric").checked = false;
    $("druid").checked = false;
    $("fighter").checked = false;
    $("monk").checked = false;
    $("paladin").checked = false;
    $("ranger").checked = false;
    $("rogue").checked = false;
    $("sorcerer").checked = false;
    $("wizard").checked = false;
    $("raceBox").innerHTML = "-------------------------------------------------- Please Select A Race --------------------------------------------------";
    $("classBox").innerHTML = "-------------------------------------------------- Please Select A Class --------------------------------------------------";
    $("name").focus();
    $("str").value = "";
    $("dex").value = "";
    $("cons").value = "";
    $("int").value = "";
    $("wis").value = "";
    $("cha").value = "";
    $("gold").value = "";
    $("selectStats").style.display = "none";
    $("strength").checked = false;
    $("dexterity").checked = false;
    $("constitution").checked = false;
    $("intelligence").checked = false;
    $("wisdom").checked = false;
    $("charisma").checked = false;
    $("selectS").innerHTML = "Strenght";
    $("selectD").innerHTML = "Dexterity";
    $("selectC").innerHTML = "Constitution";
    $("selectI").innerHTML = "Intelligence";
    $("selectW").innerHTML = "Wisdom";
    $("selectCh").innerHTML = "Charisma";
    $("nameL").innerHTML = "Name: ";
    
};

window.onload = function() {
    
    $("name").focus();
    $("dwarves").onclick = displayRace;
    $("elves").onclick = displayRace;
    $("gnomes").onclick = displayRace;
    $("halfElf").onclick = displayRace;
    $("halfOrc").onclick = displayRace;
    $("halfling").onclick = displayRace;
    $("human").onclick = displayRace;
    $("barbarian").onclick = displayClass;
    $("bard").onclick = displayClass;
    $("cleric").onclick = displayClass;
    $("druid").onclick = displayClass;
    $("fighter").onclick = displayClass;
    $("monk").onclick = displayClass;
    $("paladin").onclick = displayClass;
    $("ranger").onclick = displayClass;
    $("rogue").onclick = displayClass;
    $("sorcerer").onclick = displayClass;
    $("wizard").onclick = displayClass;
    $("generate").onclick = validate;
    $("reset").onclick = reset;
    $("selectStats").style.display = "none";
};