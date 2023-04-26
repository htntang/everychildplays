import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function Post() {
  const navigate = useNavigate();
  return (
    <>
      <body>
        <div className="row">
          <div className="column">
            <img
              src="https://i.imgur.com/c0qpCEI.png"
              alt="pictures of complex needs children playing"
            ></img>
          </div>
          <div className="column">
            <img src="https://i.imgur.com/ZYScK1W.png" alt="brand logo"></img>
          </div>
        </div>

        <div className="search-button">
          <Button className="search" onClick={() => navigate("/directory")}>
            Playground Directory
          </Button>
          <Button className="search" onClick={() => navigate("/search")}>
              Playground Search
          </Button>
        </div>
      </body>
    </>
  );
}
