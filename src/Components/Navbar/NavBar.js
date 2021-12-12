import {MenuItems} from './MenuItems';
import {Link} from "react-router-dom" 

function NavBar({title}){
    return(
    <div className="container">

        
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid ">
                <a class="navbar-brand fs-2 text-white" href="/">{title}</a>
                    <ul className="nav justify-content-end">
                        {MenuItems.map((item,index)=>{
                            return(
                            <li className="nav-item" key={index}>
                                <Link to={item.url} className="nav-link text-white" >
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>    
        </nav>
    </div>
    )
}


export default NavBar;