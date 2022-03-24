import axios from "axios";
import {
    GET_COMMENTS,
    COMMENT_ERROR,
    CREATE_COMMENT,
} from "../constants/actions";

export const getComments = (postId) => async (dispatch) => {
	
	try {
		const res = await axios.get(`/api/${postId}/comments`);
		dispatch({
			type: GET_COMMENTS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: COMMENT_ERROR,
			payload: err,
		});
	}
};



export const createComment = (data, postId) => async (dispatch) => {
	
	try {
		const res = await axios.get(`/api/posts/${postId}/comments`, data, {
      headers: { "Content-Type": "application/json" },
    });
		dispatch({
			type: CREATE_COMMENT,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: COMMENT_ERROR,
			payload: err,
		});
	}
};