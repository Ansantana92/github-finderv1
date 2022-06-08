import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Repositories from "./Pages/Repositories";
import Home from "./Pages/Home";

export default function RouteApp () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< Home />} />
                <Route path='/repositories' element={< Repositories />} />
            </Routes>
        </BrowserRouter>
    )
}