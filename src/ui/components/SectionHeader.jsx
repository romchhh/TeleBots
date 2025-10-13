import React from 'react';
import PropTypes from 'prop-types';
import './SectionHeader.css';

const SectionHeader = ({ title, description }) => {
  return (
    <div className="section-header">
      <div className="section-header-title">
        {title}
      </div>
      <div className="section-header-description">
        {description}
      </div>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
};

export default SectionHeader; 