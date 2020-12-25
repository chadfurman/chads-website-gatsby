import * as React from 'react'
import styled from 'styled-components'
import {Logo} from "./Logo";
import {PrimaryNavigation} from "./PrimaryNavigation";

const StyledSidebar = styled.div`
    background-color: ${props => props.backgroundColor};
    opacity: ${props => props.opacity};
    width: ${props => props.width};
`

export const Sidebar = ({ backgroundColor='#FFFFFF', opacity='.1', width='100px', activePage='/' }) => {
    return (
        <StyledSidebar backgroundColod={backgroundColor} opacity={opacity} width={width}>
            <Logo />
            <PrimaryNavigation activePage={activePage} />
        </StyledSidebar>
    );
}
