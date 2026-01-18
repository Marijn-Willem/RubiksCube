function parseMoveSequence(sequenceText) {
	const specialChars = ["w", "'", "2"];
	
	const moves = [];
	let ind1 = 0;
	let ind2 = 1;
		
	while (ind1 < sequenceText.length) {
		let checkNextChar = true;
		
		while (ind2 < sequenceText.length && checkNextChar) {
			checkNextChar = false;
			const nextChar = sequenceText.substring(ind2, ind2 + 1);
			for (let i = 0; i < specialChars.length; i++)
				if (specialChars[i] === nextChar) {
					ind2 += 1;
					checkNextChar = true;
					break;
				}
		}
					
		const moveText = sequenceText.substring(ind1, ind2);
				
		moves.push(moveText);
		ind1 = ind2;
		ind2 += 1;
	}
	
	return moves;
}
