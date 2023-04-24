import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer>
            <Link to="/" className="footer">hello</Link>
            <div className="inceptionu">
          <div className="row">
            <div className="column">
            <img src="https://i.imgur.com/w1wuayu.png"></img>
              </div>
          <div className="column">
          <img src="https://i.imgur.com/radlFWM.png"></img>
          </div>
          </div>
        </div>
        </footer>
    )
}