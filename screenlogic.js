const colors = ["white","green","red","blue","orange","yellow"];
const initState = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53];
let state = initState;

function load() {
	styleElements();
	applyColors();
}

function styleElements() {
	const paragraphs = document.getElementsByTagName("p");
	
	for (let i = 0; i < paragraphs.length; i++)
		paragraphs[i].style.color = "white";
}

function applyColors() {
	applyColorsInTable(document.getElementById("tblT"), [0,1,2,3,4,5,6,7,8]);
	applyColorsInTable(document.getElementById("tblF"), [9,10,11,12,13,14,15,16,17]);
	applyColorsInTable(document.getElementById("tblR"), [20,23,26,19,22,25,18,21,24]);
	applyColorsInTable(document.getElementById("tblB"), [35,34,33,32,31,30,29,28,27]);
	applyColorsInTable(document.getElementById("tblL"), [42,39,36,43,40,37,44,41,38]);
	applyColorsInTable(document.getElementById("tblD"), [45,46,47,48,49,50,51,52,53]);
}

function applyColorsInTable(tbl, stateIndices) {
	const tableCells = tbl.getElementsByTagName("td");
	
	for (let i = 0; i < stateIndices.length; i++)
		formatTableElement(tableCells[i], getColor(stateIndices[i]));
}

function formatTableElement(elem, color) {
	elem.style.color = color;
	elem.style.backgroundColor = color;
}

function getColor(stateIndX) {
	return colors[parseInt(state[stateIndX] / 9)];
}

function applyMove(permFunction, btnId) {
	state = permFunction(state);
	applyColors();
	document.getElementById("txtMoves").value += document.getElementById(btnId).value;
}

function position(newTop, newFront) {
	state = getNewPosition(state, newTop, newFront);
	applyColors();
}

function applySequence(moves, timeout) {
	runSequenceStepInTimeout(moves, 0, timeout);
}

function applySequenceInReverse(moves) {
	moves = (moves === null ? getMoves() : moves);
	for (let i = moves.length - 1; i >= 0; i--)
		getButtonFromValue(getReverseButtonValue(moves[i])).onclick();
}

function runSequenceStepInTimeout(moves, indX, timeout) {
	if (indX < moves.length) {
		const move = moves[indX];
		setTimeout(function () {
			getButtonFromValue(move).onclick();
			runSequenceStepInTimeout(moves, indX + 1, timeout);
		}, timeout);
	}
}

function applyTimeFramed() {
	const timeFrameStr = document.getElementById("txtTimeFrame").value;
	
	if (timeFrameStr !== "") {
		const timeFrame = parseInt(timeFrameStr);
		const moves = getMoves();
		const timeout = parseInt(timeFrame / moves.length);
		
		clearMoves();
		applySequenceInReverse(moves);
		applySequence(moves, timeout);
	}
}

function getMoves() {
	return parseMoveSequence(document.getElementById("txtMoves").value);
}

function getButtonFromValue(buttonValue) {
	const moveButtons = document.getElementsByClassName("btnMove");
	
	for (let i = 0; i < moveButtons.length; i++) {
		const moveButton = moveButtons[i];
		
		if (moveButton.value === buttonValue)
			return moveButton;
	}
		
	return null;	
}

function getReverseButtonValue(buttonValue) {
	const lastCharacter = buttonValue.substring(buttonValue.length - 1);
	
	if (lastCharacter === "'")
		return buttonValue.substring(0, buttonValue.length - 1);
	
	if (lastCharacter === "2")
		return buttonValue;
	
	return buttonValue + "'";
}

function clearMoves() {
	document.getElementById("txtMoves").value = "";
}

function clearTimeFrame() {
	document.getElementById("txtTimeFrame").value = "";
}

function reset() {
	state = initState;
	clearTimeFrame();
	clearMoves();
	applyColors();
}
