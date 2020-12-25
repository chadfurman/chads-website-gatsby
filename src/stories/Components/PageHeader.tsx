import * as React from 'react'
import styled from 'styled-components'

const StyledPageHeader = styled.h2`
    font-size: 24pt;
    text-align: right;
`

export const PageHeader = ({...props}) => {
    return (
        <StyledPageHeader>
            {props.children}
        </StyledPageHeader>
    )
}