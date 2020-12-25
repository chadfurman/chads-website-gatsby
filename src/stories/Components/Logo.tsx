import styled from 'styled-components'
import * as React from 'react'
import * as PropTypes from 'prop-types'

const StyledLogo = styled.h1`
    font-size: 48pt;
    color: #c7c7c7;
`

export const Logo = () => {
    return (
        <StyledLogo>
            CHAD
        </StyledLogo>
    )
}

Logo.propTypes = {
    fontSize: PropTypes.string,
    color: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
}
