import React,{ PureComponent,Fragment } from 'react';
import { ContentWrapper} from './style';
import BreadCrumb from './breadcrumb';
import ArticlePanel from './articlePanel';
import { connect } from "react-redux";
import * as actionCreators  from '../store/actionCreators';
import MediaQuery from 'react-responsive';

class Content extends PureComponent{

    render(){
        return(
            <Fragment>
            {/* 电脑 平板>=768px */}
            <MediaQuery minWidth={768} defaultMatches={false} debounceTime={200}>
                <ContentWrapper>
                    <BreadCrumb></BreadCrumb> 
                    <ArticlePanel></ArticlePanel> 
                </ContentWrapper>
            </MediaQuery>

            {/* 手机>=768px */}
            <MediaQuery maxWidth={767} defaultMatches={false} debounceTime={200}>
                <ContentWrapper className="phone">
                    <BreadCrumb></BreadCrumb> 
                    <ArticlePanel></ArticlePanel> 
                </ContentWrapper>
            </MediaQuery>
            </Fragment>
        )
    }

    //  //在组件被挂载到页面之后，自动执行   Ajax() 写在class组件里面
    //  componentDidMount(){
    //     this.props.getCodeData();
    // }
    //当这个组件即将被从页面上剔除时，会被执行
    componentWillUnmount(){
        // console.log("content componentWillUnmount");
        // 清除数据
        this.props.clearCodeData();
    }
}


//写在class组件外面 返回给组件一些函数让组件进行调用【函数功能：修改store数据池数据】，
const mapDispatchToProps = (dispatch)=>{
    return{
        clearCodeData(){
           const action = actionCreators.clearCodeDataAction();
           dispatch(action);
        }
    }
};

export default connect(null,mapDispatchToProps)(Content);