

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
import styles from './GoodsPackaging.profile.less'
import DescriptionList from '../../components/DescriptionList';

import GlobalComponents from '../../custcomponents';
import PermissionSetting from '../../permission/PermissionSetting'
import appLocaleName from '../../common/Locale.tool'
const { Description } = DescriptionList;
const {defaultRenderExtraHeader}= DashboardTool


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const internalSummaryOf = (goodsPackaging,targetComponent) =>{
    const userContext = null
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="Id">{goodsPackaging.id}</Description> 
<Description term="Package Name">{goodsPackaging.packageName}</Description> 
<Description term="Rfid">{goodsPackaging.rfid}</Description> 
<Description term="Package Time">{ moment(goodsPackaging.packageTime).format('YYYY-MM-DD')}</Description> 
<Description term="Description">{goodsPackaging.description}</Description> 
	
      </DescriptionList>
	)
}


const renderPermissionSetting = goodsPackaging => {
  const {GoodsPackagingBase} = GlobalComponents
  return <PermissionSetting targetObject={goodsPackaging}  targetObjectMeta={GoodsPackagingBase}/>
}

const internalRenderExtraHeader = defaultRenderExtraHeader

class GoodsPackagingPermission extends Component {


  componentDidMount() {

  }
  

  render() {
    // eslint-disable-next-line max-len
    const  goodsPackaging = this.props.goodsPackaging;
    const { id,displayName, goodsCount } = goodsPackaging
    const cardsData = {cardsName:"Goods Packaging",cardsFor: "goodsPackaging",cardsSource: goodsPackaging,
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
  goodsPackaging: state._goodsPackaging,
}))(Form.create()(GoodsPackagingPermission))

