import * as React from 'react'
import styled from 'styled-components'

const StyledPageContent = styled.div`
    padding:1em;
    margin:1em;
    background-color: #ffffff;
    opacity: .1;
`

export const PageContent = ({...props}) => {
    return (
        <StyledPageContent>
            ${props.children}
        </StyledPageContent>
    )
}