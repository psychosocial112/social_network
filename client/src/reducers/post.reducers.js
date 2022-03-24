import {
  GET_POSTS,
  POST_ERROR,
  GET_POST,
  CREATE_POST,
  POST_LOADING
} from "../constants/actions";
const initialState = {
	posts: [],
	post: null,
	isLoading: false,
	error: {},
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case POST_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case GET_POSTS:
			return {
				...state,
				posts: payload,
				isLoading: false,
			};
		case GET_POST:
			return {
				...state,
				post: payload,
				isLoading: false,
			};
      case CREATE_POST:
        return {
          ...state,
          post: payload,
          isLoading: false
        };
		case POST_ERROR:
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