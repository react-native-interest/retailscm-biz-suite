

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
import styles from './RetailStoreDecoration.profile.less'
import DescriptionList from '../../components/DescriptionList';

import GlobalComponents from '../../custcomponents';
import PermissionSetting from '../../permission/PermissionSetting'
import appLocaleName from '../../common/Locale.tool'
const { Description } = DescriptionList;
const {defaultRenderExtraHeader}= DashboardTool


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const internalSummaryOf = (retailStoreDecoration,targetComponent) =>{
    const userContext = null
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="Id">{retailStoreDecoration.id}</Description> 
<Description term="Comment">{retailStoreDecoration.comment}</Description> 
	
      </DescriptionList>
	)
}


const renderPermissionSetting = retailStoreDecoration => {
  const {RetailStoreDecorationBase} = GlobalComponents
  return <PermissionSetting targetObject={retailStoreDecoration}  targetObjectMeta={RetailStoreDecorationBase}/>
}

const internalRenderExtraHeader = defaultRenderExtraHeader

class RetailStoreDecorationPermission extends Component {


  componentDidMount() {

  }
  

  render() {
    // eslint-disable-next-line max-len
    const  retailStoreDecoration = this.props.retailStoreDecoration;
    const { id,displayName, retailStoreCount } = retailStoreDecoration
    const cardsData = {cardsName:"Retail Store Decoration",cardsFor: "retailStoreDecoration",cardsSource: retailStoreDecoration,
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
  retailStoreDecoration: state._retailStoreDecoration,
}))(Form.create()(RetailStoreDecorationPermission))

