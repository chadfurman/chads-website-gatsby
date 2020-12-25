import * as React from 'react'
import styled from 'styled-components'

const StyledPageBody = styled.div`
    font-size: 12pt;
    margin: 1em;
`

export const PageBody = ({...props}) => {
    return (
        <StyledPageBody>
            {props.children}
        </StyledPageBody>
    )
}
