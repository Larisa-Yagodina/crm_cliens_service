import {Nav, NavItem, NavLink} from 'reactstrap';
import { Link } from "react-router-dom";



export default function LinksRouters () {
    
    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink>
                        <Link to="/">Home</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="/orders">Orders</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="/clients">Clients</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="/services">Services</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="/results">Results</Link>
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}