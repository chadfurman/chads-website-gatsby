import * as React from 'react'
import styled from 'styled-components'
import backgroundImage from './background.png'

const StyledContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@100&display=swap');
    
    background-image: url('${backgroundImage}');
    background-position: bottom right;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #0e1317;
    font-family: 'Saira Condensed', sans-serif;
`

export const Container = ({...props}) => {
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}