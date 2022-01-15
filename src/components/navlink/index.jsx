import React from 'react'

// * STYLES
import { MenuItem } from './style'

// * ROUTERS 
import { Link } from "react-router-dom";

export function Navlink({path, ...rest}) {

    return (
        <MenuItem active={window.location.pathname == path}>
            <Link to={path}>
                {rest.children}
            </Link>
        </MenuItem>
    )
}