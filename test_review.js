// Ian Acosta, 11/23/16, Javascript Test Review

var knight = "Arthur";
var maiden = "Jane";
var monster = "Loch";

var weaponChest=["Mace","Sorcerer's Stone","Excalibur"];

var hero={
  wizard: "Merlin",
  weapon: "Mace",
  power: 49
};



function swordInTheStone(worthy){
  if (worthy == "Arthur"){
    console.log("We have found our King worthy");
  }
  else{
    console.log("We must keep searching, for worthy is unworthy");
  }
}
swordInTheStone(knight);



function trueLove(king,queen){
  if (queen=="Guinevere"&&king=="Arthur"){
    console.log("On this day, our king and queen shall rule happily ever after");
  }
  else{
    console.log("We must keep searching, for out true love must reign over Camelot");
  }
}
trueLove(knight,maiden);



function epicBattle(wizard,enemy,power){
  if (power<=15){
    console.log("Our wizard has fallen");
  }
  else if (power>=16 && power<=40){
    console.log("Wizard has almost slain enemy");
  }
  else{
    console.log("Our wizard has slain the enemy");
  }
}
epicBattle(hero.wizard,monster,hero.power);