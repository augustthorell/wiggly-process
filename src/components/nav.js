import React from 'react'
import { Link} from "gatsby"

function Nav() {
    return (
        <div style={{
            width: `100%`,

        }}>
            <ul className="navList" style={{
                display: `flex`,
                justifyContent: `space-evenly`,
                alignContent: `center`,
                padding: `10px`,
                listStyle: `none`,
                background: `#8ebf8f`,               
            }}>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/admin">Admin</Link></li>
                
            </ul>
        </div>
    )
}

export default Nav