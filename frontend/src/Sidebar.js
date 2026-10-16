import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div className="list-group list-group-flush">

      <Link
        to="/Dashboard"
        className="list-group-item list-group-item-action"
      >
        Dashboard
      </Link>


      <Link
        to="/Cache"
        className="list-group-item list-group-item-action"
      >
        Cache
      </Link>

       <Link
        to="/Products"
        className="list-group-item list-group-item-action"
      >
        Products
      </Link>

    </div>

  );
}

export default Sidebar;