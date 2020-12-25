import styled from 'styled-components'
import * as React from 'react';
import * as PropTypes from 'prop-types';

const StyledLink = styled.a`
    font-size: 24pt;
    font-family: 'Saira Condensed', sans-serif;
    font-weight: 100;
    text-decoration: ${ props => props.isActive ? 'underline' : 'none'};
`

/**
 * Primary UI component for user interaction
 */
export const Link = ({ isActive=false, onClick=undefined, ...props }) => {
  return (
    <StyledLink isActive={isActive} onClick={onClick}>
      {props.children}
    </StyledLink>
  );
};

Link.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  active: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};
