import React from 'react';

class Square extends React.Component { 
  render() {
    let className = "square";
    if (this.props.disabled) {
      className += " disabled";
    }
    return (
      <div className={className} onClick={() => { this.props.onClick(); }} >
        { this.props.value }
      </div>
    );
  }
}

export default Square;
