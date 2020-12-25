import styled from 'styled-components'
import {Link} from "./Link";
import * as React from "react";

const StyledPrimaryNavigation = styled.div`
    margin: 1em;
    align-self: flex-end;
`

export const PrimaryNavigation = ({activePage = '/'}) => {
    return (
        <StyledPrimaryNavigation>
            <Link isActive={activePage == '/blog'}>Blog</Link>
            <Link isActive={activePage == '/resume'}>Resume</Link>
            <Link isActive={activePage == '/contact'}>Contact</Link>
        </StyledPrimaryNavigation>
    )
}
