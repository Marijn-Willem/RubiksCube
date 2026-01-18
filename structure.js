const uPerm = [6,3,0,7,4,1,8,5,2,18,19,20,12,13,14,15,16,17,27,28,29,21,22,23,24,25,26,36,37,38,30,31,32,33,34,35,9,10,11,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53];
const xPerm = [9,10,11,12,13,14,15,16,17,45,46,47,48,49,50,51,52,53,24,21,18,25,22,19,26,23,20,8,7,6,5,4,3,2,1,0,38,41,44,37,40,43,36,39,42,35,34,33,32,31,30,29,28,27];
const yPerm = [6,3,0,7,4,1,8,5,2,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,9,10,11,12,13,14,15,16,17,47,50,53,46,49,52,45,48,51];

function permute(state, perm) {
	let newState = new Array(54);
	
	for (let i = 0; i < 54; i++)
		newState[i] = state[perm[i]];
	
	return newState;
}

function permuteRepeated(state, perm, repeats) {
	let newState = state;
	
	for (let i = 0; i < repeats; i++)
		newState = permute(newState, perm);
	
	return newState;
}

function permuteInv(state, perm) {
	return permuteRepeated(state, perm, 3);
}

function permute2(state, perm) {
	return permuteRepeated(state, perm, 2);
}

function permuteChain(state, permChain) {
	let newState = state;
	
	for (let i = 0; i < permChain.length; i++)
		newState = permChain[i](newState);
	
	return newState;
}

function permuteFunctionRepetitive(state, func, repeats) {
	let chain = new Array(repeats);
	
	for (let i = 0; i < repeats; i++)
		chain[i] = func;
	
	return permuteChain(state, chain);
}

function permuteInvFromFunction(state, func) {
	return permuteFunctionRepetitive(state, func, 3);
}

function permute2FromFunction(state, func) {
	return permuteFunctionRepetitive(state, func, 2);
}

function permuteX(state) {
	return permute(state, xPerm);
}

function permuteXInv(state) {
	return permuteInv(state, xPerm);
}

function permuteX2(state) {
	return permute2(state, xPerm);
}

function permuteY(state) {
	return permute(state, yPerm);
}

function permuteYInv(state) {
	return permuteInv(state, yPerm);
}

function permuteY2(state) {
	return permute2(state, yPerm);
}

function permuteZ(state) {
	return permuteChain(state, [permuteYInv, permuteX, permuteY]);
}

function permuteZInv(state) {
	return permuteInvFromFunction(state, permuteZ);
}

function permuteU(state) {
	return permute(state, uPerm);
}

function permuteUInv(state) {
	return permuteInv(state, uPerm);
}

function permuteU2(state) {
	return permute2(state, uPerm);
}

function permuteR(state) {
	return permuteChain(state, [permuteY, permuteX, permuteU, permuteXInv, permuteYInv]);
}

function permuteRInv(state) {
	return permuteInvFromFunction(state, permuteR);
}

function permuteR2(state) {
	return permute2FromFunction(state, permuteR);
}

function permuteL(state) {
	return permuteChain(state, [permuteY2, permuteR, permuteY2]);
}

function permuteLInv(state) {
	return permuteInvFromFunction(state, permuteL);
}

function permuteL2(state) {
	return permute2FromFunction(state, permuteL);
}

function permuteF(state) {
	return permuteChain(state, [permuteX, permuteU, permuteXInv]);
}

function permuteFInv(state) {
	return permuteInvFromFunction(state, permuteF);
}

function permuteF2(state) {
	return permute2FromFunction(state, permuteF);
}

function permuteD(state) {
	return permuteChain(state, [permuteX2, permuteU, permuteX2]);
}

function permuteDInv(state) {
	return permuteInvFromFunction(state, permuteD);
}

function permuteD2(state) {
	return permute2FromFunction(state, permuteD);
}

function permuteB(state) {
	return permuteChain(state, [permuteY2, permuteF, permuteY2]);
}

function permuteBInv(state) {
	return permuteInvFromFunction(state, permuteB);
}

function permuteB2(state) {
	return permute2FromFunction(state, permuteB);
}

function permuteM(state) {
	return permuteChain(state, [permuteXInv, permuteR, permuteLInv]);
}

function permuteMInv(state) {
	return permuteInvFromFunction(state, permuteM);	
}

function permuteM2(state) {
	return permute2FromFunction(state, permuteM);
}

function permuteUw(state) {
	return permuteChain(state, [permuteY, permuteD]);
}

function permuteUwInv(state) {
	return permuteInvFromFunction(state, permuteUw);	
}

function permuteRw(state) {
	return permuteChain(state, [permuteX, permuteL]);
}

function permuteRwInv(state) {
	return permuteInvFromFunction(state, permuteRw);
}
