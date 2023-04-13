import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <Link to ="/" className="logo">Inclusive Playworks™</Link>
            <nav>
                <Link to="/login" class="button-navigation">Login </Link>
                <Link to="/register" class="button-navigation"> Register</Link>
            </nav>
        </header>
    );
}