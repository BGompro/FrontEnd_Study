import {BrowserRouter, Route, Routes} from "react-router-dom";
import Explorer from "./pages/Explorer";
import Home from "./pages/Home";
import Subscription from "./pages/Subscription";


// //https://react-icons.github.io/react-icons/icons?name=bi
export default function App(){
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact={true} element={<Home/>}/>
            <Route path="/explore" element={<Explorer/>}/>
            <Route path="/subscription" element={<Subscription/>}/>
        </Routes>
    </BrowserRouter>);
};