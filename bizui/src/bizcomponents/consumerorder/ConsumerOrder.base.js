import React from 'react'
import { Icon,Divider } from 'antd'

import { Link } from 'dva/router'
import moment from 'moment'
import ImagePreview from '../../components/ImagePreview'
import appLocaleName from '../../common/Locale.tool'
import BaseTool from '../../common/Base.tool'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList'
const { Description } = DescriptionList
const {
	defaultRenderReferenceCell,
	defaultRenderBooleanCell,
	defaultRenderMoneyCell,
	defaultRenderDateTimeCell,
	defaultRenderImageCell,
	defaultRenderDateCell,
	defaultRenderIdentifier,
	defaultRenderTextCell,
} = BaseTool

const renderTextCell=defaultRenderTextCell
const renderIdentifier=defaultRenderIdentifier
const renderDateCell=defaultRenderDateCell
const renderDateTimeCell=defaultRenderDateTimeCell
const renderImageCell=defaultRenderImageCell
const renderMoneyCell=defaultRenderMoneyCell
const renderBooleanCell=defaultRenderBooleanCell
const renderReferenceCell=defaultRenderReferenceCell


const menuData = {menuName:"Consumer Order", menuFor: "consumerOrder",
  		subItems: [
  {name: 'consumerOrderLineItemList', displayName:'Consumer Order Line Item', icon:'line',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '__no_group'},
  {name: 'consumerOrderShippingGroupList', displayName:'Consumer Order Shipping Group', icon:'first-order',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '__no_group'},
  {name: 'consumerOrderPaymentGroupList', displayName:'Consumer Order Payment Group', icon:'first-order',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '__no_group'},
  {name: 'consumerOrderPriceAdjustmentList', displayName:'Consumer Order Price Adjustment', icon:'ad',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '__no_group'},
  {name: 'retailStoreMemberGiftCardConsumeRecordList', displayName:'Retail Store Member Gift Card Consume Record', icon:'gift',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '__no_group'},
  
  		],
}

const fieldLabels = {
  id: 'Id',
  title: 'Title',
  consumer: 'Consumer',
  confirmation: 'Confirmation',
  approval: 'Approval',
  processing: 'Processing',
  shipment: 'Shipment',
  delivery: 'Delivery',
  store: 'Store',
  lastUpdateTime: 'Last Update Time',
  currentStatus: 'Current Status',

}

const displayColumns = [
  { title: fieldLabels.id, debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderTextCell(text,record,'consumerOrder') , sorter: true },
  { title: fieldLabels.title, debugtype: 'string', dataIndex: 'title', width: '8',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.consumer, dataIndex: 'consumer', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.confirmation, dataIndex: 'confirmation', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.approval, dataIndex: 'approval', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.processing, dataIndex: 'processing', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.shipment, dataIndex: 'shipment', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.delivery, dataIndex: 'delivery', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.store, dataIndex: 'store', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.lastUpdateTime, dataIndex: 'lastUpdateTime', render: (text, record) =>renderDateTimeCell(text,record), sorter: true},
  { title: fieldLabels.currentStatus, debugtype: 'string', dataIndex: 'currentStatus', width: '13',render: (text, record)=>renderTextCell(text,record)},

]
// refernce to https://ant.design/components/list-cn/
const renderItemOfList=(consumerOrder,targetComponent)=>{

	
	
	
	const userContext = null
	return (
	<div key={consumerOrder.id}>
	
	<DescriptionList  key={consumerOrder.id} size="small" col="4">
<Description term="Id">{consumerOrder.id}</Description> 
<Description term="Title">{consumerOrder.title}</Description> 
<Description term="Consumer">{consumerOrder.consumer==null?appLocaleName(userContext,"NotAssigned"):`${consumerOrder.consumer.displayName}(${consumerOrder.consumer.id})`}
</Description>
<Description term="Store">{consumerOrder.store==null?appLocaleName(userContext,"NotAssigned"):`${consumerOrder.store.displayName}(${consumerOrder.store.id})`}
</Description>
<Description term="Last Update Time">{ moment(consumerOrder.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
<Description term="Current Status">{consumerOrder.currentStatus}</Description> 
	
        
      </DescriptionList>
       <Divider style={{ height: '2px' }} />
      </div>
	)

}
	



const ConsumerOrderBase={menuData,displayColumns,fieldLabels,renderItemOfList}
export default ConsumerOrderBase



