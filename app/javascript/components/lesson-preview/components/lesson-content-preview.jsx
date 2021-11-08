/* eslint react/no-danger: 0 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const LessonContentPreview = ({ content }) => {
  const handleAnchorClick = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const anchorNodes = document.querySelectorAll('a');

    const internalLinks = [...anchorNodes].filter((node) => {
      const nodeLink = node.attributes.href.value;
      return nodeLink[0] === '#';
    });

    internalLinks.forEach((node) => {
      node.addEventListener('click', handleAnchorClick);
    });

    return () => {
      internalLinks.forEach((node) => {
        node.removeEventListener('click', handleAnchorClick);
      });
    };
  }, [content]);

  return (
    <div className="lesson-content">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

LessonContentPreview.defaultProps = {
  content: '',
};

LessonContentPreview.propTypes = {
  content: PropTypes.string,
};

export default LessonContentPreview;
