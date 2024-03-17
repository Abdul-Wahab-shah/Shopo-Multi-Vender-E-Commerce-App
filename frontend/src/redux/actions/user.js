import axios from "axios";
import { server } from "../../server";


// load user

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "LoadUserRequest",
        });
        const response = await axios.get(`${server}/user/getuser`, { withCredentials: true });
        console.log("Response:", response); // Log the response for debugging
        const { data } = response;
        if (!data || !data.user) {
            throw new Error("Invalid response format");
        }
        dispatch({
            type: "LoadUserSuccess",
            payload: data.user,
        });
    } catch (error) {
        console.error("Error loading user:", error); // Log the error for debugging
        dispatch({
            type: "LoadUserFail",
            payload: error.response ? error.response.data.message : "An error occurred while loading user",
        });
    }
};