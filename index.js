class Robot{
	id = 0;
	hp = 2;
	gold = 2;
	createdTime;
	initialHp = 2;
	defense = 0;
	
	setId(id, position){
		var newId = "";
		if(position == "next"){
			newId = id + 1;
		}	else if(position == "prev"){
			newId = id - 1;
		} else {
			newId = id
		}
		this.id = newId;

	}

	setHp(initialHp, position){
		var newHp = "";
		if(position == "next"){
			newHp = initialHp + initialHp;
		} else if(position == "prev"){
			newHp = initialHp / initialHp;
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
			newGold = gold
		}
		this.gold = newGold;
	}
	///ejemplo de defensa, cuando el id sea mayor o igual a 10, la defensa va a ser el hp divido 2.
	setDefense(defense,position, id){
		var newDefense = "";
		if(position == "next", id >= 10){
		 	defense = hp / 2;
		} else if(position =="prev",id >=10){
			newDefense = hp / 2;
		} else{
			newDefense = defense;
		}
		
		this.defense = newDefense;
		
	}

}

var robot = new Robot();
	robot.setHp(2, "next");
	robot.setId(0,"next");
	robot.setGold(2,"next");
	robot.setDefense(0,"next")
console.log(robot);

//set: gold (next,prev, =), id (next, prev, =)