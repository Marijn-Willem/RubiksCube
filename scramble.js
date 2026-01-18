function randomScramble() {
	const moveButtons = document.getElementsByClassName("btnMove");
	
	for (let i = 0; i < 20; i++) {
		const btnIndX = parseInt(moveButtons.length * Math.random());
		moveButtons[btnIndX].onclick();
	}
}
