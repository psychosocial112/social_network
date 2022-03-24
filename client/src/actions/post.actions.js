import axios from "axios";
import {
    GET_POSTS,
    POST_ERROR,
    CREATE_POST,
} from "../constants/actions";

export const getPosts = () => async (dispatch) => {
	
	try {
		const res = await axios.get("/api/posts");
		dispatch({
			type: GET_POSTS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: err,
		});
	}
};



export const createPost = (data) => async (dispatch) => {
	
	try {
		const res = await axios.get("/api/posts", data, {
      headers: { "Content-Type": "application/json" },
    });
		dispatch({
			type: CREATE_POST,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: err,
		});
	}
};