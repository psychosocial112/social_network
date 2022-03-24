import {
  GET_COMMENTS,
  COMMENT_ERROR,
  CREATE_COMMENT,
  COMMENT_LOADING
} from "../constants/actions";
const initialState = {
	comments: [],
	isLoading: false,
	error: {},
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case COMMENT_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case GET_COMMENTS:
			return {
				...state,
				comments: payload,
				isLoading: false,
			};

      case CREATE_COMMENT:
        return {
          ...state,
          comment: payload,
          isLoading: false
        };
		case COMMENT_ERROR:
			return {
				isLoading: false,
				comments: [],
				error: payload,
			};
		default:
			return state;
	}
}