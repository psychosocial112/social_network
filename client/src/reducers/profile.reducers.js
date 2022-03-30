import {
  GET_PROFILE,
  GET_OWN_PROFILE,
  PROFILE_ERROR,
  UPDATE_OWN_PROFILE,
  PROFILE_LOADING
} from "../constants/actions";

const initialState = {
	profile: null,
	isLoading: false,
	error: {},
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case PROFILE_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case GET_OWN_PROFILE:
			return {
				...state,
				profile: payload,
				isLoading: false,
			};
		case UPDATE_OWN_PROFILE:
			return {
				...state,
				post: payload,
				isLoading: false,
			};
      
		case PROFILE_ERROR:
			return {
				isLoading: false,
				posts: [],
				post: null,
				error: payload,
			};
		default:
			return state;
	}
}