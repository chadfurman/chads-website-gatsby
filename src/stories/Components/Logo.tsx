import * as React from 'react'
import * as PropTypes from 'prop-types'
import './logo.css'

export const Logo = ({ fontSize, color, label, ...props }) => {
    const styles = {
        fontSize: fontSize ? fontSize : '48pt',
        color: color ? color : '#c7c7c7'
    }
    return (
        <h1
            className='logo'
            style={styles}
        >{label}</h1>
    )
}

Logo.propTypes = {
    fontSize: PropTypes.string,
    color: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
}

Logo.defaultProps = {
    fontSize: '48pt',
    color: '#c7c7c7',
    label: 'Chad',
    onClick: undefined
}