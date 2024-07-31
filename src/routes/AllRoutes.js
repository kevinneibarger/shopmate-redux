import {Routes, Route} from "react-router-dom";
import {ShopmateHome, ShopmateCart} from "../pages";


export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<ShopmateHome />}/>
                <Route path="/cart" element={<ShopmateCart />}/>
            </Routes>
        </>
    )
}