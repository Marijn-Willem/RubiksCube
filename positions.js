function getNewPosition(state, newTop, newFront) {
	return goToNewPosition(revertToDefault(state), newTop, newFront);
}

function revertToDefault(state) {
	const layerTop = parseInt(state[4] / 9);
	const layerFront = parseInt(state[13] / 9);
	
	if (layerTop === 0) {
		if (layerFront === 1)
			return fromPos01(state);
		else if (layerFront === 2)
			return fromPos02(state);
		else if (layerFront === 3)
			return fromPos03(state);
		else if (layerFront === 4)
			return fromPos04(state);
	}
	else if (layerTop === 1) {
		if (layerFront === 0)
			return fromPos10(state);
		else if (layerFront === 2)
			return fromPos12(state);
		else if (layerFront === 4)
			return fromPos14(state);
		else if (layerFront === 5)
			return fromPos15(state);
	}
	else if (layerTop === 2) {
		if (layerFront === 0)
			return fromPos20(state);
		else if (layerFront === 1)
			return fromPos21(state);
		else if (layerFront === 3)
			return fromPos23(state);
		else if (layerFront === 5)
			return fromPos25(state);
	}
	else if (layerTop === 3) {
		if (layerFront === 0)
			return fromPos30(state);
		else if (layerFront === 2)
			return fromPos32(state);
		else if (layerFront === 4)
			return fromPos34(state);
		else if (layerFront === 5)
			return fromPos35(state);
	}
	else if (layerTop === 4) {
		if (layerFront === 0)
			return fromPos40(state);
		else if (layerFront === 1)
			return fromPos41(state);
		else if (layerFront === 3)
			return fromPos43(state);
		else if (layerFront === 5)
			return fromPos45(state);
	}
	else if (layerTop === 5) {
		if (layerFront === 1)
			return fromPos51(state);
		else if (layerFront === 2)
			return fromPos52(state);
		else if (layerFront === 3)
			return fromPos53(state);
		else if (layerFront === 4)
			return fromPos54(state);
	}
}

function goToNewPosition(state, newTop, newFront) {
	if (newTop === 0) {
		if (newFront === 1)
			return toPos01(state);
		else if (newFront === 2)
			return toPos02(state);
		else if (newFront === 3)
			return toPos03(state);
		else if (newFront === 4)
			return toPos04(state);
	}
	else if (newTop === 1) {
		if (newFront === 0)
			return toPos10(state);
		else if (newFront === 2)
			return toPos12(state);
		else if (newFront === 4)
			return toPos14(state);
		else if (newFront === 5)
			return toPos15(state);
	}
	else if (newTop === 2) {
		if (newFront === 0)
			return toPos20(state);
		else if (newFront === 1)
			return toPos21(state);
		else if (newFront === 3)
			return toPos23(state);
		else if (newFront === 5)
			return toPos25(state);
	}
	else if (newTop === 3) {
		if (newFront === 0)
			return toPos30(state);
		else if (newFront === 2)
			return toPos32(state);
		else if (newFront === 4)
			return toPos34(state);
		else if (newFront === 5)
			return toPos35(state);
	}
	else if (newTop === 4) {
		if (newFront === 0)
			return toPos40(state);
		else if (newFront === 1)
			return toPos41(state);
		else if (newFront === 3)
			return toPos43(state);
		else if (newFront === 5)
			return toPos45(state);
	}
	else if (newTop === 5) {
		if (newFront === 1)
			return toPos51(state);
		else if (newFront === 2)
			return toPos52(state);
		else if (newFront === 3)
			return toPos53(state);
		else if (newFront === 4)
			return toPos54(state);
	}
}

function rePosition(state, initFunc, yPerms, endFunc) {
	let newState = state;
	
	if (initFunc !== null)
		newState = initFunc(newState);
	
	for (let i = 0; i < yPerms; i++)
		newState = permuteY(newState);
	
	if (endFunc !== null)
		newState = endFunc(newState);
	
	return newState;
}

function toPos01(state) {
	return state;
}

function toPos02(state) {
	return rePosition(state, toPos01, 1, null);
}

function toPos03(state) {
	return rePosition(state, toPos01, 2, null);
}

function toPos04(state) {
	return rePosition(state, toPos01, 3, null);
}

function toPos10(state) {
	return rePosition(state, toPos15, 2, null);
}

function toPos12(state) {
	return rePosition(state, toPos15, 1, null);
}

function toPos14(state) {
	return rePosition(state, toPos15, 3, null);
}

function toPos15(state) {
	return permuteX(state);
}

function toPos20(state) {
	return rePosition(state, toPos21, 3, null);
}

function toPos21(state) {
	return permuteZInv(state);
}

function toPos23(state) {
	return rePosition(state, toPos21, 2, null);
}

function toPos25(state) {
	return rePosition(state, toPos21, 1, null);
}

function toPos30(state) {
	return permuteXInv(state);
}

function toPos32(state) {
	return rePosition(state, toPos30, 1, null);
}

function toPos34(state) {
	return rePosition(state, toPos30, 3, null);
}

function toPos35(state) {
	return rePosition(state, toPos30, 2, null);
}

function toPos40(state) {
	return rePosition(state, toPos41, 1, null);
}

function toPos41(state) {
	return permuteZ(state);
}

function toPos43(state) {
	return rePosition(state, toPos41, 2, null);
}

function toPos45(state) {
	return rePosition(state, toPos41, 3, null);
}

function toPos51(state) {
	return rePosition(state, toPos53, 2, null);
}

function toPos52(state) {
	return rePosition(state, toPos53, 1, null);
}

function toPos53(state) {
	return permuteX2(state);
}

function toPos54(state) {
	return rePosition(state, toPos53, 3, null);
}

function fromPos01(state) {
	return state;
}

function fromPos02(state) {
	return rePosition(state, null, 3, fromPos01);
}

function fromPos03(state) {
	return rePosition(state, null, 2, fromPos01);
}

function fromPos04(state) {
	return rePosition(state, null, 1, fromPos01);
}

function fromPos10(state) {
	return rePosition(state, null, 2, fromPos15);
}

function fromPos12(state) {
	return rePosition(state, null, 3, fromPos15);
}

function fromPos14(state) {
	return rePosition(state, null, 1, fromPos15);
}

function fromPos15(state) {
	return permuteXInv(state);
}

function fromPos20(state) {
	return rePosition(state, null, 1, fromPos21);
}

function fromPos21(state) {
	return permuteZ(state);
}

function fromPos23(state) {
	return rePosition(state, null, 2, fromPos21);
}

function fromPos25(state) {
	return rePosition(state, null, 3, fromPos21);
}

function fromPos30(state) {
	return permuteX(state);
}

function fromPos32(state) {
	return rePosition(state, null, 3, fromPos30);
}

function fromPos34(state) {
	return rePosition(state, null, 1, fromPos30);
}

function fromPos35(state) {
	return rePosition(state, null, 2, fromPos30);
}

function fromPos40(state) {
	return rePosition(state, null, 3, fromPos41);
}

function fromPos41(state) {
	return permuteZInv(state);
}

function fromPos43(state) {
	return rePosition(state, null, 2, fromPos41);
}

function fromPos45(state) {
	return rePosition(state, null, 1, fromPos41);
}

function fromPos51(state) {
	return rePosition(state, null, 2, fromPos53);
}

function fromPos52(state) {
	return rePosition(state, null, 3, fromPos53);
}

function fromPos53(state) {
	return permuteX2(state);
}

function fromPos54(state) {
	return rePosition(state, null, 1, fromPos53);
}
