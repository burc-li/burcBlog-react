import React,{ Component,Fragment } from 'react';
import { RightSideBarWrapper,ArticleBox,TagBox,BlogBox,LinkBox,Title,ArticleInfo,ArticleItem,ArticleTitle,ArticleAuthor,TagInfo,TagItem,BlogInfo,LinkItem} from './style';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import * as actionCreators from '../store/actionCreators'
import { Empty } from 'antd';

class RightSideBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            tocItems:[]
        };
        this.tocObserver = null;
        this.tocTimer = null;
        this.scrollHandler = null;
    }

    isTocPage(pathname = ''){
        return /^(\/(detail|deta)\/|\/write$|\/update\/)/.test(pathname);
    }

    initTocMode(){
        this.collectHeadings();
        this.bindTocObserver();
    }

    bindTocObserver(){
        this.unbindTocObserver();
        this.tocObserver = new MutationObserver(()=>{
            if(this.tocTimer){
                clearTimeout(this.tocTimer);
            }
            this.tocTimer = setTimeout(()=>{
                this.collectHeadings();
            },80);
        });
        this.tocObserver.observe(document.body, {
            childList:true,
            subtree:true,
            characterData:true
        });
    }

    unbindTocObserver(){
        if(this.tocObserver){
            this.tocObserver.disconnect();
            this.tocObserver = null;
        }
        if(this.tocTimer){
            clearTimeout(this.tocTimer);
            this.tocTimer = null;
        }
    }

    collectHeadings(){
        const selector = '.article-content-root h1, .article-content-root h2, .article-content-root h3, .article-content-root h4, .article-content-root h5, .article-content-root h6';
        const nodes = document.querySelectorAll(selector);
        const tocItems = Array.from(nodes).map((node,index)=>{
            const text = (node.textContent || '').trim();
            if(!text){
                return null;
            }
            const id = node.id || `toc-heading-${index + 1}`;
            if(!node.id){
                node.id = id;
            }
            return {
                id,
                text,
                level:Number(node.tagName.slice(1)) || 1
            };
        }).filter(Boolean);
        this.setState({ tocItems });
    }

    scrollToHeading(id){
        const node = document.getElementById(id);
        if(node){
            node.scrollIntoView({ behavior:'smooth', block:'start' });
        }
    }

    // 博客运行天数
    getDays(){
        const startdate = new Date('2019-8-13').getTime();
        const nowdate = new Date().getTime();
        const rundata =  Math.ceil( (nowdate - startdate) / (24 * 3600 * 1000) );
        return rundata;
    }
    render(){
        const { tagList,recentList,detail,location } = this.props;
        const { tocItems } = this.state;
        const tocMode = this.isTocPage(location.pathname);
        return(
            <Fragment>
               {/* 电脑 >=992px */}
                <MediaQuery minWidth={992}> 
                    <RightSideBarWrapper ref={(rightSideBarWrapper)=>{this.rightSideBarWrapper = rightSideBarWrapper}}>
                        {
                            tocMode
                            ? <ArticleBox className="tocPanel">
                                <Title className="tocTitle">文章目录</Title>
                                <ArticleInfo className="tocList">
                                    {
                                        tocItems.length
                                        ? tocItems.map((item)=>(
                                            <ArticleItem className={`tocItem tocLevel${item.level}`} key={item.id}>
                                                <ArticleTitle className="tocLink" onClick={()=>this.scrollToHeading(item.id)}>
                                                    {item.text}
                                                </ArticleTitle>
                                            </ArticleItem>
                                        ))
                                        : null
                                    }
                                </ArticleInfo>
                              </ArticleBox>
                            : <Fragment>
                                <ArticleBox>
                                    <Title>最新博客</Title>
                                    <ArticleInfo>
                                        {  recentList?
                                            recentList.map((item,index)=>{
                                                return(
                                                    <ArticleItem  key={index}>
                                                        <Link to = {"/"+detail+"/"+item.get('id')}>
                                                            <ArticleTitle tooltip title={item.get('title')}>{item.get('title')}</ArticleTitle>
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
                              </Fragment>
                        }
                    </RightSideBarWrapper>
                    {/* <BackTop onClick = {this.props.handeleBackTop}></BackTop> */}
                    {/* {this.props.scrollShow?<BackTop onClick = {()=>{this.props.handeleBackTop(this.rightSideBarWrapper)}}></BackTop>:""} */}
                </MediaQuery>
            </Fragment>
        );
    }
    //在组件被挂载到页面之后，自动执行   Ajax() 写在class组件里面
    componentDidMount(){
        if(this.isTocPage(this.props.location.pathname)){
            this.initTocMode();
        }else{
            this.props.getRecentArticle(1,5);
            this.props.getTag();
        }
        //绑定一个事件，函数名可以随便起
        this.bindEvents();
    }
    componentDidUpdate(prevProps){
        const prevPath = prevProps.location.pathname;
        const curPath = this.props.location.pathname;
        if(prevPath !== curPath){
            const isToc = this.isTocPage(curPath);
            if(isToc){
                this.initTocMode();
            }else{
                this.unbindTocObserver();
                this.setState({ tocItems:[] });
                this.props.getRecentArticle(1,5);
                this.props.getTag();
            }
        }
    }
    componentWillUnmount(){
        this.unbindTocObserver();
        if(this.scrollHandler && typeof (this.rightSideBarWrapper)!=="undefined"){
            this.rightSideBarWrapper.parentNode.parentNode.removeEventListener("scroll", this.scrollHandler);
        }
    }
    bindEvents(){
        //给window添加一个scroll事件typeof(exp) == "undefined"
        if(typeof (this.rightSideBarWrapper)!=="undefined"){
            this.scrollHandler = ()=>{this.props.changeScrollShow(this.rightSideBarWrapper)};
            this.rightSideBarWrapper.parentNode.parentNode.addEventListener("scroll", this.scrollHandler);
        }
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

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(RightSideBar));