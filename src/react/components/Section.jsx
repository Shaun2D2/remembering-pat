import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Section.scss';

const Section = ({
  title, children, id, className,
}) => (
  <div className={classNames('section', className)}>
    <div className="container" id={id}>
      {title && (
        <div className="section__title">
          <h1>{title}</h1>
        </div>
      )}
      {children}
    </div>
  </div>
);

Section.defaultProps = {
  title: null,
  className: null,
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Section;
