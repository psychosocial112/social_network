import { useEffect } from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { setAuthToken } from "./utils/setAuthToken";
import { authCheck, logout } from "./actions/auth.actions";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  useEffect(() => {
		// check for token in LS when app first runs
		if (localStorage.token) {
			// if there is a token set axios headers for all requests
			setAuthToken(localStorage.token);
		}
		// try to fetch a user, if no token or invalid token we
		// will get a 401 response from our API
		store.dispatch(authCheck());

		// log user out from all tabs if they log out in one tab
		window.addEventListener("storage", () => {
			if (!localStorage.token) store.dispatch(logout());
		});
	}, []);
  
  return ( 
    <Provider store={store}>
			<BrowserRouter>
				<div>
					<Header />
					<div>
						<Routes>
							<Route path="/login" element={<Login />}></Route>
							<Route path="/register" element={<Register />}></Route>
						</Routes>
					</div>
					<Footer/>
				</div>
			</BrowserRouter>
		</Provider>
  );
}

export default App;
