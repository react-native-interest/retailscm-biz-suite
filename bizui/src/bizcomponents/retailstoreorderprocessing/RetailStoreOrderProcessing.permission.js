

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
import styles from './RetailStoreOrderProcessing.profile.less'
import DescriptionList from '../../components/DescriptionList';

import GlobalComponents from '../../custcomponents';
import PermissionSetting from '../../permission/PermissionSetting'
import appLocaleName from '../../common/Locale.tool'
const { Description } = DescriptionList;
const {defaultRenderExtraHeader}= DashboardTool


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const internalSummaryOf = (retailStoreOrderProcessing,targetComponent) =>{
    const userContext = null
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="Id">{retailStoreOrderProcessing.id}</Description> 
<Description term="Who">{retailStoreOrderProcessing.who}</Description> 
<Description term="Process Time">{ moment(retailStoreOrderProcessing.processTime).format('YYYY-MM-DD')}</Description> 
	
      </DescriptionList>
	)
}


const renderPermissionSetting = retailStoreOrderProcessing => {
  const {RetailStoreOrderProcessingBase} = GlobalComponents
  return <PermissionSetting targetObject={retailStoreOrderProcessing}  targetObjectMeta={RetailStoreOrderProcessingBase}/>
}

const internalRenderExtraHeader = defaultRenderExtraHeader

class RetailStoreOrderProcessingPermission extends Component {


  componentDidMount() {

  }
  

  render() {
    // eslint-disable-next-line max-len
    const  retailStoreOrderProcessing = this.props.retailStoreOrderProcessing;
    const { id,displayName, retailStoreOrderCount } = retailStoreOrderProcessing
    const cardsData = {cardsName:"Retail Store Order Processing",cardsFor: "retailStoreOrderProcessing",cardsSource: retailStoreOrderProcessing,
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
  retailStoreOrderProcessing: state._retailStoreOrderProcessing,
}))(Form.create()(RetailStoreOrderProcessingPermission))

