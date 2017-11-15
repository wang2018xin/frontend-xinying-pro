import React from 'react';
import { Link } from 'dva/router';
import PageHeader from '../components/PageHeader';

import styles from './PageHeaderLayout.less';

class PageHeaderLayout extends React.Component {
  render() {
    const {children, wrapperClassName, top, ...restProps} = this.props;
    return (
      <div style={{ margin: '-24px -24px 0' }} className={wrapperClassName}>
        <PageHeader {...restProps} linkElement={Link}/>
        {children ? <div className={styles.content}>{children}</div> : null}
      </div>
    );
  }
}

export default PageHeaderLayout;
