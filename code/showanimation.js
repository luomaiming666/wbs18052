
function showNumberWithAnimation(i, j, randNumber ){
 
	var numberCell=$("#number-cell-"+i+'-'+j);
	numberCell.css('background-color',getNumberBackgroundColor(randNumber));
	numberCell.css('color', getNumberColor(randNumber));
	if (randNumber==2){
	numberCell.text("4096");
	}
	else if(randNumber==4){
		numberCell.text("2048");
	}
	else if(randNumber==8){
		numberCell.text("1024");
	}
	else if(randNumber==16){
		numberCell.text("512");
	}
	else if(randNumber==32){
		numberCell("256");
	}
	else if(randNumber==64){
		numberCell.text("128");
	}
	else if(randNumber==128){
		numberCell.text("64");
	}
	else if(randNumber==256){
		numberCell.text("32");
	}
	else if(randNumber==512){
		numberCell.text("16");
	}
	else if(randNumber==1024){
		numberCell.text("8");
	}
	else if(randNumber==2048){
		numberCell.text("4");
	}
	else if(randNumber==4096){
		numberCell.text("2");
	}
	numberCell.animate({
		width:cellSideLength,
		height:cellSideLength,
		top:getPosTop(i, j)+'px',
		left:getPosLeft(i, j)+'px'
	},300);
}
 
function showMoveAnimation(fromx, fromy, tox, toy){
	var numberCell=$("#number-cell-"+fromx+'-'+fromy);
	numberCell.animate({
		top: getPosTop(tox, toy),
		left:getPosLeft(tox, toy)
	},200);
}
 
function updateScore(score){
 
	$("#score").text(score);
}
