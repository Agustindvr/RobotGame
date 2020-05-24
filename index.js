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
	name = "Conejo";
	attackDmg = 2;
	gold = 0;

	setName(name){
    this.name = name;
  }

  setGold(goldQty){
      this.gold = goldQty;
    }

  setAttack(attackDmg){
      this.attackDmg = attackDmg;
    }

  attack(Robot){
    Robot.hp = Robot.hp - this.attackDmg;
  }

}

class GameStatus{
	lastRobotKilled = null;
	getLastRobot(){
    return this.lastRobotKilled;
  }

  setLastRobotKilled(id){
    if(id > this.getLastRobot() || this.getLastRobot() === null)
      this.lastRobotKilled = id;
  }
}

class Weapons {
  name;
  price;
  attackDmg = 2;

  getWeaponsList(){
    var weaponsData = data;
    return weaponsData;
  }    

  createWeaponsList(){
    var weponsList = this.getWeaponsList();
    weponsList.forEach( function(value, index) {

      var weapons = document.getElementById("weapons");
      var innerDiv = document.createElement('div');
      innerDiv.className = 'weapon-' + index;
      innerDiv.innerHTML = 
      '<div class="containerInnWeapon"><div><img src="https://via.placeholder.com/60.png/ffb74d/000000?text=weapon" /></div><div class="generalInfoWeapon"><h5>' + value.name + 
      '</h5><div><b>Price: </b>'+value.price+
      '</div><div><b>Attack: </b>+'+value.damage+
      '</div></div><button data-price='+value.price+' data-damage='+value.damage+' onClick="buyWeapon(this)" class="buyButton btn">Buy</button></div>';

      weapons.appendChild(innerDiv);
    });
  }
}

var robot = new Robot();
var player = new Player();
var gameStatus = new GameStatus();
var weapons = new Weapons();


  weapons.createWeaponsList();

var intervalMiliSeconds = 60;
	setInterval(() => { 
		updateValues(robot, player);
	//player.attack(robot);	
		robotIsDead();
		hideShowNextPrevButtons();
		hideShowWeaponButtons();
		
	}, intervalMiliSeconds);

	function updateValues(robot, player){
		updateRobotData(robot);
		playerData(player);
	}
	
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

  let nameUser = prompt('Por favor ingrese su nombre');

  function playerData(player){
  	var playerName = document.getElementsByClassName('playerNameValue')[0];
  	var playerAttack = document.getElementsByClassName('AttackValue')[0];
  	var playerGold = document.getElementsByClassName('GoldValue')[0];

  	playerName.innerHTML = '<h4> ' + nameUser + '</h4>';
  	playerAttack.innerHTML = player.attackDmg;
  	playerGold.innerHTML = player.gold;  	
	}

	document.onkeydown = function (e) {
    var keyCode = e.keyCode;
    if(keyCode == 65) {
    	console.log(player);
			player.attack(robot);
    }
	};

  function prev(){
  	createNewRobot("prev");
  }

  function next(){
  	createNewRobot("next");
  }

  function hideShowNextPrevButtons(){
    var next = document.getElementById('next');
    var prev = document.getElementById('prev');

    if(robot.id === 0){
      prev.disabled = true;
    }else{
      prev.disabled = false;
    }

    if(gameStatus.getLastRobot() < robot.id || gameStatus.getLastRobot() === null){
      next.disabled = true;
    }else{
      next.disabled = false;
    }
  }

  function buyWeapon(button){
  	var price = parseInt(button.getAttribute("data-price"));
  	var damage = parseInt(button.getAttribute("data-damage"));
  	 player.setGold(player.gold - price);
  	 player.setAttack(damage + player.attackDmg);
  }

  function hideShowWeaponButtons(){
    var buttons = document.getElementsByClassName('buyButton');

    Array.from(buttons).forEach((button) => {
      if(player.gold >= button.getAttribute("data-price")){
        button.disabled = false;
      }else{
        button.disabled = true;
      }
    });
  }

  function robotIsDead(){  
    if(robot.isDead()){
    	gameStatus.setLastRobotKilled(robot.id);
			player.setGold(player.gold + robot.gold);
			createNewRobot('actual');
		}
  }
