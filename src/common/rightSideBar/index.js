import React,{ Component,Fragment } from 'react';
import { RightSideBarWrapper,ArticleBox,TagBox,BlogBox,LinkBox,BackTop,Title,ArticleInfo,ArticleItem,ArticleTitle,ArticleAuthor,TagInfo,TagItem,BlogInfo,LinkItem} from './style';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCodeDataAction } from '../../pages/code/store/actionCreators'; 
import * as actionCreators from '../store/actionCreators'
import { Empty } from 'antd';

class RightSideBar extends Component{
    // 博客运行天数
    getDays(){
        const startdate = new Date('2019-8-13').getTime();
        const nowdate = new Date().getTime();
        const rundata =  Math.ceil( (nowdate - startdate) / (24 * 3600 * 1000) );
        return rundata;
    }
    render(){
        const { tagList,recentList,detail} = this.props;
        return(
            <Fragment>
               {/* 电脑 >=992px */}
                <MediaQuery minWidth={992}> 
                    <RightSideBarWrapper ref={(rightSideBarWrapper)=>{this.rightSideBarWrapper = rightSideBarWrapper}}>
                        <ArticleBox>
                            <Title>最新博客</Title>
                            <ArticleInfo>
                                {  recentList?
                                    recentList.map((item,index)=>{
                                        return(
                                            <ArticleItem  key={index}>
                                                 <Link to = {"/"+detail+"/"+item.get('id')}>
                                                    <ArticleTitle>{item.get('title')}</ArticleTitle>
                                                </Link>
                                                <ArticleAuthor><span className="iconfont">&#xe655;</span>{item.get('author')}</ArticleAuthor>
                                            </ArticleItem>
                                        );
                                    })
                                    :<Empty />
                                }
                            </ArticleInfo>
                        </ArticleBox>
                        <TagBox>
                            <Title>标签云</Title>
                            <TagInfo>
                                {  tagList?
                                    tagList.map((item,index)=>{
                                        return(
                                            // immutable 对象获取内容 item.get('id')
                                            //普通JS对象获取内容 item['id']
                                            <TagItem  key={index}> {item.get('label')} </TagItem>
                                        );
                                    })
                                    :<Empty />
                                }
                            </TagInfo>
                        </TagBox>
                        <BlogBox>
                            <Title>博客信息</Title>
                            <BlogInfo>柏成✘运行<span>{this.getDays()}</span>天</BlogInfo>
                        </BlogBox>
                        <LinkBox>
                            <Title>友情链接</Title>
                            <LinkItem href='http://blog.pea3nut.com/'>花生PeA的博客</LinkItem>
                            <LinkItem href='https://imathon.cn/'>桑儿记</LinkItem>
                            <LinkItem href='http://www.cinco.site/'>Cinco的小站</LinkItem>
                        </LinkBox>
                    </RightSideBarWrapper>
                    {/* <BackTop onClick = {this.props.handeleBackTop}></BackTop> */}
                    {/* {this.props.scrollShow?<BackTop onClick = {()=>{this.props.handeleBackTop(this.rightSideBarWrapper)}}></BackTop>:""} */}
                </MediaQuery>
            </Fragment>
        );
    }
    //在组件被挂载到页面之后，自动执行   Ajax() 写在class组件里面
    componentDidMount(){
        this.props.getRecentArticle(1,5);
        this.props.getTag();
        //绑定一个事件，函数名可以随便起
        this.bindEvents();
    }
    bindEvents(){
        //给window添加一个scroll事件typeof(exp) == "undefined"
        if(typeof (this.rightSideBarWrapper)!=="undefined")
            this.rightSideBarWrapper.parentNode.parentNode.addEventListener("scroll",()=>{this.props.changeScrollShow(this.rightSideBarWrapper)});
    }
}
//获取store数据池的内容
const mapStateToProps = (state)=>({
    scrollShow:state.getIn(["headerReducer","scrollShow"]),  // 是否显示返回顶部图标
    recentList:state.getIn(["headerReducer","recentList"]),  // 最新文章
    tagList:state.getIn(["headerReducer","tagList"]), //标签信息 
    search:state.getIn(["codeReducer","search"]), // 搜索界面更换
    detail:state.getIn(["detailReducer","detail"]) // 详情界面更换
});
//写在class组件外面 返回给组件一些函数让组件进行调用【函数功能：修改store数据池数据】，
const mapDispatchToProps = (dispatch)=>{
    return{
        // 获取最新文章
        getRecentArticle(currentPage,pagesize){
            const action = actionCreators.getRecentArticleAction(currentPage,pagesize);
            dispatch(action);
        },
        // 获取全部标签
        getTag(){
            const action = actionCreators.getTagAction();
            dispatch(action);
        },
        // 改变返回顶部是否显示
        changeScrollShow(rightSideBarWrapper){
            const win = rightSideBarWrapper.parentNode.parentNode;
            //做兼容性处理
            var scrollHeight = win.scrollTop;
            if(scrollHeight > 100){
                dispatch(actionCreators.ToggleScrollShow(true));
            }else{
                dispatch(actionCreators.ToggleScrollShow(false));
            }
        },
        // 返回顶部
        handeleBackTop(rightSideBarWrapper){
            const win = rightSideBarWrapper.parentNode.parentNode;
            // document.documentElement.scrollTop = 0;
            win.scrollTo(0,0);
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(RightSideBar);