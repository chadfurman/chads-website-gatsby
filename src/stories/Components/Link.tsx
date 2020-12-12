import * as React from 'react';
import * as PropTypes from 'prop-types';
import './link.css';

/**
 * Primary UI component for user interaction
 */
export const Link = ({ active, color, label, ...props }) => {
  const mode = active ? 'link--active' : 'link--inactive';
  return (
    <a
      className={['link', mode].join(' ')}
      style={color && { color }}
      {...props}
    >
      {label}
    </a>
  );
};

Link.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  active: PropTypes.bool,
  /**
   * What background color to use
   */
  color: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Link.defaultProps = {
  color: null,
  active: false,
  label: 'Timothy',
  onClick: undefined,
};
