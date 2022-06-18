import { Link, Outlet } from 'react-router-dom';


export function NavMenu() {
    return (
        <div>
          <Link to={'/'}>HOME</Link> |{" "}
          <Link to={'/help'}>HELP</Link> |{" "}
          <Link to={'/stats'}>STATS</Link>
          <Outlet />
        </div>
    )
}