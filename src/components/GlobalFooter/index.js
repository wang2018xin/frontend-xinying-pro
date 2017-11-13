import React from 'react';

class GlobalFooter extends React.Component {
  render() {
    const {links, copyright} = this.props;
    console.log('GlobalFooter--this.props==', this.props);
    return (
      <div>{copyright}</div>
    );
  }
}

export default GlobalFooter;
