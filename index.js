class Robot{
	id = 0;
	hp = 8;
	gold = 2;
	createdTime;
	initialHp = 8;
	defense = 0;
	
	constructor(){
		this.createdTime = this.getActualTime();
	}

	getActualTime(){
		var d = new Date();
		var actualTime = d.getTime();
			return actualTime;
	}


	setId(id, position){
		var newId = "";
		if(position == "next"){
			newId = id + 1;
		}	else if(position == "prev"){
			newId = id - 1;
		} else {
			newId = id;
		}
		this.id = newId;

	}

	setHp(initialHp, position){
		var newHp = "";
		if(position == "next"){
			newHp = initialHp + initialHp;
		} else if(position == "prev"){
			newHp = initialHp / 2;
		}	else{
			newHp = initialHp;
		}
		this.hp = newHp;
		this.initialHp = newHp;

	} 

	setGold(gold, position){
		var newGold = "";
		if(position == "next"){
			newGold = gold * 2; 
		} else if(position == "prev"){
			newGold = gold / 2;
		} else {
			newGold = gold;
		}
		this.gold = newGold;
	}
	
	setDefense(id){
		var newDefense = "";
		if(id >= 10){
		 	newDefense = this.hp / 2;
		} else{
			newDefense = 0;
		}
		this.defense = newDefense;		
	}

	isDead(){
		if(this.hp <= 0){
			return true;
		}
		return false;
	}
}

class Player{
	id = 1;
	name = "conejo";
	attackDmg = 2;
	gold = 0;

	setName(name){
    this.name = name;
  }

  setGold(gold){
    this.gold = gold;
  }

  setAttack(attackDmg){
    this.attackDmg = attack;
  }

  attack(Robot){
    Robot.hp = Robot.hp - this.attackDmg;
  }

}

var robot = new Robot();
var player = new Player();

var intervalMiliSeconds = 2000;
	setInterval(() => { 
		updateRobotData(robot);
		playerData(player);
		player.attack(robot);

		if(robot.isDead()){
			createNewRobot("next");
		}

	console.log(robot);
}, intervalMiliSeconds);

	function createNewRobot(position){
    let id = robot.id;
    let actualRobotInitialHp = robot.initialHp;
    let gold = robot.gold;
		robot = new Robot();
	  robot.setId(id, position);
	  robot.setHp(actualRobotInitialHp, position);  
	  robot.setGold(gold, position);  
		console.log (position);   
	}
  
  function updateRobotData(robot){
    var robotName = document.getElementsByClassName('robotNameValue')[0];
    var robotImage = document.getElementsByClassName('robotImage')[0];
    var robotHp = document.getElementsByClassName('robotHpValue')[0];
    var robotGold = document.getElementsByClassName('robotGoldValue')[0];

    robotName.innerHTML = '<h4>Robot #' + robot.id + '</h4>';
    robotHp.innerHTML = robot.hp;
    robotGold.innerHTML = robot.gold;
    robotImage.src='https://robohash.org/' + robot.id;
  }

  function playerData(player){
  	var playerName = document.getElementsByClassName('playerNameValue')[0];
  	var playerAttack = document.getElementsByClassName('AttackValue')[0];
  	var playerGold = document.getElementsByClassName('GoldValue')[0];

  	playerName.innerHTML = '<h4> ' + player.name + '</h4>';
  	playerAttack.innerHTML = player.attackDmg;
  	playerGold.innerHTML = player.gold;
  	console.log(player)

  }

  function prev(){
  	createNewRobot("prev");
  }

  function next(){
  	createNewRobot("next");
  }