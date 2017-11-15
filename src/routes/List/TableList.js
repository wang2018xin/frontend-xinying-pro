import React from 'react';
import { connect } from 'dva';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Select,
  Icon,
  Button,
  Dropdown,
  Menu,
  InputNumber,
  DatePicker,
  Modal,
  message
} from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import StandardTable from '../../components/StandardTable';

import styles from './TableList.less';

const FormItem = Form.Item;
const {Option} = Select;

@connect(state => ({
  ...state.rule
}))
@Form.create()
export default class TableList extends React.PureComponent {

  state = {
    // addInputValue: '',
    // modalVisible: false,
    // expandForm: false,
    // selectedRows: [],
    formValues: {},
  };

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'rule/fetch'
    })
  }

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const {dispatch} = this.props;
    const {formValues} = this.state;

    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = {...obj};
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});

    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters,
    };
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }

    dispatch({
      type: 'rule/fetch',
      payload: params,
    });
  }

  render() {
    const {loading: ruleLoading, data} = this.props;
    return (
      <PageHeaderLayout title="查询表格">
        <Card bordered={false}>
          <div className={styles.tableList}>
            <StandardTable
              // selectedRows={selectedRows}
              loading={ruleLoading}
              data={data}
              // onSelectRow={this.handleSelectRows}
              onChange={this.handleStandardTableChange}
            />
          </div>
        </Card>
      </PageHeaderLayout>
    );
  }
}

