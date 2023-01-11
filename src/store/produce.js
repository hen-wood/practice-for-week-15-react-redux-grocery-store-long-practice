import produceData from "../mockData/produce.json";

// Action Creators

const POPULATE = "produce/POPULATE";

export const populateProduce = () => {
	return {
		type: POPULATE,
		produce: produceData
	};
};

// Reducer
export default function produceReducer(state = {}, action) {
	switch (action.type) {
		case POPULATE:
			return { ...state, ...action.produce };
		default:
			return state;
	}
}
