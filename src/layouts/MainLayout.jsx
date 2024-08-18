import { Outlet } from "react-router-dom";
import Nav from "../componenets/includes/Nav";


export default function MainLayout() {
    return (
      <>

<header>
<div className="container">
   <Nav/>
</div>
</header>
<Outlet/>



</>
    );
}