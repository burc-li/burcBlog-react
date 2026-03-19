import React,{ PureComponent,Fragment } from 'react';
import { ContentWrapper} from './style';
import BreadCrumb from './breadcrumb';
import ArticleDetail from './articleDetail';
import Comment from './comment';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import * as actionCreators  from '../store/actionCreators';
import MediaQuery from 'react-responsive';

class Content extends PureComponent{

    render(){
        return(
            <Fragment>
            {/* 电脑 平板>=768px */}
            <MediaQuery minWidth={768}>
                <ContentWrapper>
                    <BreadCrumb></BreadCrumb> 
                    <ArticleDetail></ArticleDetail> 
                    <Comment></Comment>
                </ContentWrapper>
            </MediaQuery>

            {/* 手机>=768px */}
            <MediaQuery maxWidth={767}>
                <ContentWrapper className="phone">
                    <BreadCrumb></BreadCrumb> 
                    <ArticleDetail></ArticleDetail> 
                    <Comment></Comment>
                </ContentWrapper>
            </MediaQuery>
            </Fragment>
        )
    }

    //在组件被挂载到页面之后，自动执行
    componentDidMount(){
        const path = this.props.match.path;
        let detail = 'deta';
        if(path === '/detail/:id'){
            detail = 'deta';
        }else if(path === '/deta/:id'){
            detail = 'detail';
        }
        this.props.initType(detail);
        //获取地址栏id
        // const id = this.props.location.search.match(/\d+/g)[0];
        // const id =this.props.location.pathname.match(/\d+/g)[0];
        const id =this.props.match.params.id;
        // 根据博客id获取博客详细内容
        // setTimeout(()=>{
            this.props.getDetail(id);
        // },4000);
        // 根据博客id获取该博客的评论
        // this.props.getComment(id);  
    }
     //当这个组件即将被从页面上剔除时，会被执行
     componentWillUnmount(){
        // console.log("content componentWillUnmount");
        // 清除数据
        this.props.clearDetailData();
    }
}

const mapDisaptchToProps = (dispatch)=>({
    getDetail(id){
        const action = actionCreators.getDetailAction(id);
        dispatch(action);
    },
    initType(detail){
        const action = actionCreators.initTypeAction(detail);
        dispatch(action);
    },
    clearDetailData(){
        const action = actionCreators.clearDetailDataAction();
        dispatch(action);
    }
    // getComment(blogid){
    //     const action = actionCreators.getCommentAction(blogid);
    //     dispatch(action);
    // }
});
//withRouter 让Detail有能力获取Router里的所有参数和内容【App.js】 主要是获取地址栏的id
export default connect(null,mapDisaptchToProps)(withRouter(Content));