import React, { PureComponent, createElement } from 'react';
import PropTypes from 'prop-types';

export default class PageHeader extends React.PureComponent {

  static contextTypes = {
    routes: PropTypes.array,
    params: PropTypes.object,
    location: PropTypes.object,
    breadcrumbNameMap: PropTypes.object,
  };

  getBreadcrumbProps = () => {
    console.log('this.props==1', this.props);
    console.log('this.context==1', this.context);
    return {
      routes: this.props.routes || this.context.routes,
      params: this.props.params || this.context.params,
      location: this.props.location || this.context.location,
      breadcrumbNameMap: this.props.breadcrumbNameMap || this.context.breadcrumbNameMap,
    };
  };

  render() {
    console.log('this.props==', this.props);
    const {routes, params, location, breadcrumbNameMap} = this.getBreadcrumbProps();
    console.log('this.getBreadcrumbProps()', this.getBreadcrumbProps());
    return (
      <div>PageHeader...</div>
    );
  }
}
