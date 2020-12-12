import * as React from 'react'
import styled from 'styled-components'
import backgroundImage from './background.png'

const StyledBackground = styled.div`
    background-image: ${props => props.image ? props.image :  };
    background-position: bottom right;
    background-size: ${props => (props.size ? props.size : 'cover')};
`

export const Background = ({image, size}) => {
    return (
        <StyledBackground size={size} image={image}/>
    )
}