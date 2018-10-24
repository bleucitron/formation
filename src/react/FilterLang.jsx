import React from 'react';

class FilterLang extends React.Component {
  render() {
    return <button onClick={this.props.toggle}>alo{this.props.text}</button>;
  }
}

export default FilterLang;
