import * as React from 'react'
import * as PropTypes from 'prop-types'
import './sidebar.css'
import {Logo} from "./Logo";
import {Link} from "./Link";


export const Sidebar = ({ backgroundColor, opacity, width, ...props }) => {
    const styles = {
        backgroundColor: backgroundColor ? backgroundColor : '#FFFFFF',
        opacity: opacity ? opacity : '.1',
        width: width ? width : '100px'
    }
    return (
        <div
            className='sidebar'
            style={styles}
        >
            <Logo/>
            <Link label={'Blog'}></Link>
            <Link label={'Resume'}></Link>
            <Link label={'Contact'}></Link>
        </div>
    )
}

