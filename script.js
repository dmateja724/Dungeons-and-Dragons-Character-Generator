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

};

// rolls the stats that will populate in the stats section when the generate button is
// clicked and validation is completed
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
    
    //displays stat accordingly by race and applies race modifiers
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
    
    // section for personally selected stat for halfElf, halfOrc, and human ----- NOT FUNCTIONAL
    /*
    if ($("halfElf").checked == true || $("halfOrc").checked == true || $("human").checked == true){
        if ($("selectS").checked == true){
            $("str").value = strSum + 2 + "    +2 Race Modifier";
            $("dex").value = dexSum;
            $("cons").value = consSum;
            $("int").value = intSum;
            $("wis").value = wisSum;
            $("cha").value = chaSum;
        } else if ($("selectD").checked == true){
            $("str").value = strSum;
            $("dex").value = dexSum;
            $("cons").value = consSum;
            $("int").value = intSum;
            $("wis").value = wisSum;
            $("cha").value = chaSum;
        }
    }*/
    
};

// validates that a name is inputed and that a race and class is selected
// then runs rollStats() 
var validate = function() {
    
    // validates if a name was entered
    if($("name").value == ""){
        $("nameL").innerHTML = "Name:".fontcolor("red");
        alert("Please enter a name.");
    }
    
    // validates if a race is selected
    var raceRadio = document.getElementsByName('race');
    var raceValue = false;

    for(var i=0; i<raceRadio.length;i++){
        if(raceRadio[i].checked == true){
            raceValue = true;
        }
    }
    if(raceValue == false){
        $("raceBox").innerHTML = "-------------------------------------------------- Please Select A Race --------------------------------------------------".fontcolor("red");
        alert("Please select a Race.");
    }
    
    
    // validates if a class is selected
    var classRadio = document.getElementsByName('class');
    var classValue = false;

    for(var j=0; j<classRadio.length;j++){
        if(classRadio[j].checked == true){
            classValue = true;
        }
    }
    if(classValue == false){
        $("classBox").innerHTML = "-------------------------------------------------- Please Select A Class --------------------------------------------------".fontcolor("red");
        alert("Please Select a Class.");
    }
    
    // confirms with user if selections are correct (after validation) and rolls stats and gold
    if (raceValue == true && classValue == true && $("name").value !== ""){
        var conf = confirm("Does everything look good? Click [OK] to roll stats or [CANCEL] to make a change.");
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