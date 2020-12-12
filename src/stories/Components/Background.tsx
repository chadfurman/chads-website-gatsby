import * as React from 'react'
import styled from 'styled-components'

const StyledBackground = styled.div`
    background-image: url('${props => props.image}');
    background-position: bottom right;
    background-size: ${props => (props.size ? props.size : 'auto')};
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #0e1317;
`

export const Background = ({image, size}) => {
    return (
        <StyledBackground size={size} image={image}/>
    )
}