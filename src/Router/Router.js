
import Home from "../Component/Home/Home"

import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function Router() {
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />

            </Routes>
        </BrowserRouter>


    )
}