

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from 'components/BooleanOption';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge, Switch,Select,Form,AutoComplete,Modal } from 'antd'
import { Link, Route, Redirect} from 'dva/router'
import numeral from 'numeral'

import DashboardTool from '../../common/Dashboard.tool'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './LeaveType.profile.less'
import DescriptionList from '../../components/DescriptionList';

import GlobalComponents from '../../custcomponents';
import PermissionSetting from '../../permission/PermissionSetting'
import appLocaleName from '../../common/Locale.tool'
const { Description } = DescriptionList;
const {defaultRenderExtraHeader}= DashboardTool


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const internalSummaryOf = (leaveType,targetComponent) =>{
    const userContext = null
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="Id">{leaveType.id}</Description> 
<Description term="Code">{leaveType.code}</Description> 
<Description term="Description">{leaveType.description}</Description> 
<Description term="Detail Description">{leaveType.detailDescription}</Description> 
	
      </DescriptionList>
	)
}


const renderPermissionSetting = leaveType => {
  const {LeaveTypeBase} = GlobalComponents
  return <PermissionSetting targetObject={leaveType}  targetObjectMeta={LeaveTypeBase}/>
}

const internalRenderExtraHeader = defaultRenderExtraHeader

class LeaveTypePermission extends Component {


  componentDidMount() {

  }
  

  render() {
    // eslint-disable-next-line max-len
    const  leaveType = this.props.leaveType;
    const { id,displayName, employeeLeaveCount } = leaveType
    const cardsData = {cardsName:"Leave Type",cardsFor: "leaveType",cardsSource: leaveType,
  		subItems: [
    
      	],
  	};
    const renderExtraHeader = this.props.renderExtraHeader || internalRenderExtraHeader
    const summaryOf = this.props.summaryOf || internalSummaryOf
   
    return (

      <PageHeaderLayout
        title={`${cardsData.cardsName}: ${displayName}`}
        content={summaryOf(cardsData.cardsSource,this)}
        wrapperClassName={styles.advancedForm}
      >
      {renderExtraHeader(cardsData.cardsSource)}
      {renderPermissionSetting(cardsData.cardsSource)}
      
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  leaveType: state._leaveType,
}))(Form.create()(LeaveTypePermission))

