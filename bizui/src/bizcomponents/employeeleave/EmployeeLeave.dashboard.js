

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from 'components/BooleanOption';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge, Switch,Select,Form,AutoComplete,Modal } from 'antd'
import { Link, Route, Redirect} from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './EmployeeLeave.dashboard.less'
import DescriptionList from '../../components/DescriptionList';
import ImagePreview from '../../components/ImagePreview';
import GlobalComponents from '../../custcomponents';
import DashboardTool from '../../common/Dashboard.tool'
import appLocaleName from '../../common/Locale.tool'

const {aggregateDataset,calcKey, defaultHideCloseTrans,
  defaultImageListOf,defaultSettingListOf,defaultBuildTransferModal,
  defaultExecuteTrans,defaultHandleTransferSearch,defaultShowTransferModel,
  defaultRenderExtraHeader,
  defaultSubListsOf,defaultRenderAnalytics,
  defaultRenderExtraFooter,renderForTimeLine,renderForNumbers,
  defaultQuickFunctions, defaultRenderSubjectList,
}= DashboardTool



const { Description } = DescriptionList;
const { TabPane } = Tabs
const { RangePicker } = DatePicker
const { Option } = Select


const imageList =(employeeLeave)=>{return [
	 ]}

const internalImageListOf = (employeeLeave) =>defaultImageListOf(employeeLeave,imageList)

const optionList =(employeeLeave)=>{return [ 
	]}

const buildTransferModal = defaultBuildTransferModal
const showTransferModel = defaultShowTransferModel
const internalRenderSubjectList = defaultRenderSubjectList
const internalSettingListOf = (employeeLeave) =>defaultSettingListOf(employeeLeave, optionList)
const internalLargeTextOf = (employeeLeave) =>{

	return null
	

}


const internalRenderExtraHeader = defaultRenderExtraHeader

const internalRenderExtraFooter = defaultRenderExtraFooter
const internalSubListsOf = defaultSubListsOf


const internalRenderTitle = (cardsData,targetComponent) =>{
  
  
  const linkComp=cardsData.returnURL?<Link to={cardsData.returnURL}> <FontAwesome name="arrow-left"  /> </Link>:null
  return (<div>{linkComp}{cardsData.cardsName}: {cardsData.displayName}</div>)

}


const internalSummaryOf = (employeeLeave,targetComponent) =>{
	
	
	const {EmployeeLeaveService} = GlobalComponents
	const userContext = null
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="Id">{employeeLeave.id}</Description> 
<Description term="Who">{employeeLeave.who==null?appLocaleName(userContext,"NotAssigned"):`${employeeLeave.who.displayName}(${employeeLeave.who.id})`}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"Who","employee",EmployeeLeaveService.requestCandidateWho,
	      EmployeeLeaveService.transferToAnotherWho,"anotherWhoId",employeeLeave.who?employeeLeave.who.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="Type">{employeeLeave.type==null?appLocaleName(userContext,"NotAssigned"):`${employeeLeave.type.displayName}(${employeeLeave.type.id})`}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"Type","leaveType",EmployeeLeaveService.requestCandidateType,
	      EmployeeLeaveService.transferToAnotherType,"anotherTypeId",employeeLeave.type?employeeLeave.type.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="Leave Duration Hour">{employeeLeave.leaveDurationHour}</Description> 
<Description term="Remark">{employeeLeave.remark}</Description> 
	
        {buildTransferModal(employeeLeave,targetComponent)}
      </DescriptionList>
	)

}

const internalQuickFunctions = defaultQuickFunctions

class EmployeeLeaveDashboard extends Component {

 state = {
    transferModalVisiable: false,
    candidateReferenceList: {},
    candidateServiceName:"",
    candidateObjectType:"city",
    targetLocalName:"",
    transferServiceName:"",
    currentValue:"",
    transferTargetParameterName:"",  
    defaultType: 'employeeLeave'


  }
  componentDidMount() {

  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.employeeLeave
    if(!this.props.employeeLeave.class){
      return null
    }
    const returnURL = this.props.returnURL
    
    const cardsData = {cardsName:"Employee Leave",cardsFor: "employeeLeave",
    	cardsSource: this.props.employeeLeave,returnURL,displayName,
  		subItems: [
    
      	],
  	};
    
    const renderExtraHeader = this.props.renderExtraHeader || internalRenderExtraHeader
    const settingListOf = this.props.settingListOf || internalSettingListOf
    const imageListOf = this.props.imageListOf || internalImageListOf
    const subListsOf = this.props.subListsOf || internalSubListsOf
    const largeTextOf = this.props.largeTextOf ||internalLargeTextOf
    const summaryOf = this.props.summaryOf || internalSummaryOf
    const renderTitle = this.props.renderTitle || internalRenderTitle
    const renderExtraFooter = this.props.renderExtraFooter || internalRenderExtraFooter
    const renderAnalytics = this.props.renderAnalytics || defaultRenderAnalytics
    const quickFunctions = this.props.quickFunctions || internalQuickFunctions
    const renderSubjectList = this.props.renderSubjectList || internalRenderSubjectList
    
    return (

      <PageHeaderLayout
        title={renderTitle(cardsData,this)}
        content={summaryOf(cardsData.cardsSource,this)}
        wrapperClassName={styles.advancedForm}
      >
       
        {renderExtraHeader(cardsData.cardsSource)}
        {quickFunctions(cardsData)} 
        {renderAnalytics(cardsData.cardsSource)}
        {settingListOf(cardsData.cardsSource)}
        {imageListOf(cardsData.cardsSource)}  
        {renderSubjectList(cardsData)}       
        {largeTextOf(cardsData.cardsSource)}
        {renderExtraFooter(cardsData.cardsSource)}
  		
      </PageHeaderLayout>
    
    )
  }
}

export default connect(state => ({
  employeeLeave: state._employeeLeave,
  returnURL: state.breadcrumb.returnURL,
  
}))(Form.create()(EmployeeLeaveDashboard))

