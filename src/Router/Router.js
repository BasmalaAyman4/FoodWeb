
import Home from "../Component/Home/Home"
import Login from "../Component/Login/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function Router() {
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
