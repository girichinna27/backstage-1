(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{302:function(module,exports,__webpack_require__){__webpack_require__(303),__webpack_require__(449),module.exports=__webpack_require__(450)},367:function(module,exports){},450:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(291);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(640),__webpack_require__(647)],module)}.call(this,__webpack_require__(451)(module))},640:function(module,exports,__webpack_require__){var map={"./InfoCard/InfoCard.stories.tsx":648};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=640},647:function(module,exports,__webpack_require__){var map={"./Progress/Progress.stories.tsx":649};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=647},648:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Subhead",(function(){return Subhead})),__webpack_require__.d(__webpack_exports__,"LinkInFooter",(function(){return LinkInFooter}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),prop_types=__webpack_require__(5),prop_types_default=__webpack_require__.n(prop_types),withStyles=__webpack_require__(7),CardHeader=__webpack_require__(668),CardActions=__webpack_require__(669),Card=__webpack_require__(676),Divider=__webpack_require__(664),CardContent=__webpack_require__(670);var layout_ErrorBoundary_ErrorBoundary=class ErrorBoundary extends react.Component{constructor(props){super(props),this.state={error:void 0,errorInfo:void 0}}componentDidCatch(error,errorInfo){console.error(`ErrorBoundary, error: ${error}, info: ${errorInfo}`),this.setState({error:error,errorInfo:errorInfo}),this.props.onError&&this.props.onError(error,errorInfo)}render(){const{slackChannel:slackChannel}=this.props,{error:error,errorInfo:errorInfo}=this.state;return errorInfo?react_default.a.createElement(Error,{error:error,errorInfo:errorInfo,slackChannel:slackChannel}):this.props.children}};const Error=({slackChannel:slackChannel})=>react_default.a.createElement("div",null,"Something went wrong here. Please contact ",slackChannel," for help.");var Link=__webpack_require__(665),ListItemText=__webpack_require__(666),ListItem=__webpack_require__(674),ListItemIcon=__webpack_require__(667),ArrowForward=__webpack_require__(296),ArrowForward_default=__webpack_require__.n(ArrowForward),grey=__webpack_require__(292),grey_default=__webpack_require__.n(grey),Box=__webpack_require__(673);class BottomLink_BottomLink extends react.Component{render(){const{link:link,title:title,onClick:onClick,classes:classes}=this.props;return react_default.a.createElement("div",null,react_default.a.createElement(Divider.a,null),react_default.a.createElement(Link.a,{href:link,onClick:onClick,highlight:"none"},react_default.a.createElement(ListItem.a,{className:classes.root},react_default.a.createElement(ListItemText.a,null,react_default.a.createElement(Box.a,{className:classes.boxTitle,fontWeight:"fontWeightBold",m:1},title)),react_default.a.createElement(ListItemIcon.a,null,react_default.a.createElement(ArrowForward_default.a,null)))))}}!function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(BottomLink_BottomLink,"propTypes",{link:prop_types_default.a.string,title:prop_types_default.a.string,onClick:prop_types_default.a.func});var InfoCard_BottomLink=Object(withStyles.a)(theme=>({root:{maxWidth:"fit-content",padding:theme.spacing(2,2,2,2.5)},boxTitle:{margin:0,color:grey_default.a[900]}}))(BottomLink_BottomLink),react_addons_text_content=__webpack_require__(297),react_addons_text_content_default=__webpack_require__.n(react_addons_text_content);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const BoldHeader=Object(withStyles.a)({title:{fontWeight:"700"},subheader:{paddingTop:"2px"}})(CardHeader.a),CardActionsTopRight=Object(withStyles.a)({root:{display:"inline-block",paddingRight:"16px",paddingTop:"16px",float:"right"}})(CardActions.a),VARIANT_STYLES_card={flex:{display:"flex",flexDirection:"column"},widget:{height:430},fullHeight:{height:"100%"},height100:{display:"flex",flexDirection:"column",height:"calc(100% - 10px)",marginBottom:"10px"},contentheader:{height:"calc(100% - 40px)"},contentheadertabs:{height:"calc(100% - 97px)"},noShrink:{flexShrink:0},minheight300:{minHeight:300,overflow:"initial"}},VARIANT_STYLES_cardContent={widget:{overflowY:"auto",height:332,width:"100%"},fullHeight:{height:"calc(100% - 50px)"},height100:{height:"calc(100% - 50px)"},contentRow:{display:"flex",flexDirection:"row"}};class InfoCard_InfoCard extends react.Component{render(){const{title:title,subheader:subheader,divider:divider,deepLink:deepLink,children:children,actions:actions,actionsTopRight:actionsTopRight,headerStyle:headerStyle,headerProps:headerProps,classes:classes,slackChannel:slackChannel,variant:variant}=this.props;this.props.style&&console.warn("InfoCard: using `style` property directly, consider migrating your style to variant in InfoCard"),this.props.cardStyle&&console.warn("InfoCard: using `cardStyle` property directly, consider migrating your style to variant in InfoCard");let calculatedStyle={},calculatedCardStyle={};if(variant){variant.split(/[\s]+/g).forEach(name=>{calculatedStyle={...calculatedStyle,...VARIANT_STYLES_card[name]},calculatedCardStyle={...calculatedCardStyle,...VARIANT_STYLES_cardContent[name]}})}const computedStyle={...calculatedStyle,...this.props.style},computedCardStyle={...calculatedCardStyle,...this.props.cardStyle};return react_default.a.createElement(Card.a,{style:computedStyle,classes:classes,gacontext:react_addons_text_content_default()(title)},react_default.a.createElement(layout_ErrorBoundary_ErrorBoundary,{slackChannel:slackChannel},title&&react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(BoldHeader,_extends({className:classes.header,title:title,subheader:subheader,style:{display:"inline-block",...headerStyle}},headerProps)),react_default.a.createElement(Divider.a,null)),actionsTopRight&&react_default.a.createElement(CardActionsTopRight,null,actionsTopRight),divider&&react_default.a.createElement(Divider.a,null),react_default.a.createElement(CardContent.a,{className:this.props.cardClassName,style:computedCardStyle},children),actions&&react_default.a.createElement(CardActions.a,{className:this.props.actionsClassName},actions),deepLink&&react_default.a.createElement(InfoCard_BottomLink,deepLink)))}}!function InfoCard_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(InfoCard_InfoCard,"propTypes",{title:prop_types_default.a.oneOfType([prop_types_default.a.element,prop_types_default.a.string]),subheader:prop_types_default.a.oneOfType([prop_types_default.a.node,prop_types_default.a.string]),divider:prop_types_default.a.bool,deepLink:prop_types_default.a.object,slackChannel:prop_types_default.a.string,variant:prop_types_default.a.string});var layout_InfoCard_InfoCard=Object(withStyles.a)(theme=>({header:{padding:theme.spacing(2,2,2,2.5)}}))(InfoCard_InfoCard),Grid=__webpack_require__(671);const cardContentStyle={height:200,width:500},linkInfo={title:"Go to XYZ Location",link:"#"};__webpack_exports__.default={title:"Information Card",component:layout_InfoCard_InfoCard};const Wrapper=({children:children})=>react_default.a.createElement(Grid.a,{container:!0,spacing:4},react_default.a.createElement(Grid.a,{item:!0},children)),Default=()=>react_default.a.createElement(Wrapper,null,react_default.a.createElement(layout_InfoCard_InfoCard,{title:"Information Card"},react_default.a.createElement("div",{style:cardContentStyle}))),Subhead=()=>react_default.a.createElement(Wrapper,null,react_default.a.createElement(layout_InfoCard_InfoCard,{title:"Information Card",subheader:"Subhead"},react_default.a.createElement("div",{style:cardContentStyle}))),LinkInFooter=()=>react_default.a.createElement(Wrapper,null,react_default.a.createElement(layout_InfoCard_InfoCard,{title:"Information Card",deepLink:linkInfo},react_default.a.createElement("div",{style:cardContentStyle})))},649:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"progress",(function(){return progress}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),LinearProgress=__webpack_require__(677);var Progress_Progress=props=>{const[isVisible,setIsVisible]=Object(react.useState)(!1);return Object(react.useEffect)(()=>{const handle=setTimeout(()=>setIsVisible(!0),250);return()=>clearTimeout(handle)},[]),isVisible?react_default.a.createElement(LinearProgress.a,Object.assign({},props,{"data-testid":"progress"})):react_default.a.createElement("div",{style:{display:"none"},"data-testid":"progress"})};__webpack_exports__.default={title:"Progress",component:Progress_Progress};const progress=()=>react_default.a.createElement(Progress_Progress,null)}},[[302,1,2]]]);
//# sourceMappingURL=main.6730b9c94020937721dc.bundle.js.map