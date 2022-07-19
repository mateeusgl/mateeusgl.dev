import { Route, Routes } from "react-router-dom";
import { Portfolio } from "../page/Portfolio";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Portfolio />}/>
		</Routes>
	)
}