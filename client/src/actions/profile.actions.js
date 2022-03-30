import axios from "axios";
import {
    GET_OWN_PROFILE,
    PROFILE_ERROR,
    UPDATE_OWN_PROFILE
} from "../constants/actions";

export const getMyProfile = () => async (dispatch) => {
	
	try {
		const res = await axios.get("/api/users/profile/me");
		dispatch({
			type: GET_OWN_PROFILE,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: err,
		});
	}
};



export const updateMyProfile = (data) => async (dispatch) => {
	
	try {
		const res = await axios.put("/api/posts", data, {
      headers: { "Content-Type": "application/json" },
    });
		dispatch({
			type: UPDATE_OWN_PROFILE,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: err,
		});
	}
};