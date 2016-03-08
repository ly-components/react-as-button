import './index.less';
import React from 'react';
class Button extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>{this.props.content}</div>;
  }
}
Button.displayName = 'Button';
Button.propTypes = {
  /**
   * content of element
   */
  content: React.PropTypes.string
};
Button.defaultProps = {
    content: 'Hello world'
};
module.exports = Button;
