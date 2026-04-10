import React,{ PureComponent } from "react";
import { connect } from "react-redux";
import { Link,withRouter } from 'react-router-dom';
import { ArticleBox,ArticleItem,ArticleHeader,ArticleInfo,ArticleFooter,Button,SkeletonBox} from "./style";
import * as actionCreators from '../store/actionCreators';
import { updateBlog } from '../../update/store/actionCreators';
import { addBlog } from '../../write/store/actionCreators';
import { Pagination,Empty  } from 'antd';


class ArticlePanel extends PureComponent{
    render(){
        const { articleType,keyword,articleList,deleteState,currentPage,pageSize,totalCount,changePage,getCodeData } = this.props;
        let SkeletonShow = false;
        if(articleList)
            if(articleList.size){
                SkeletonShow = true;
        
                // console.log(articleList.get(0).get('id'));
            }
                
        return(
            <ArticleBox ref='pag'>
                {  SkeletonShow?
                   articleList.get(0).get('id')?
                        articleList.map((item,index)=>{
                            return(
                                // immutable 对象获取内容 item.get('id')
                                //普通JS对象获取内容 item['id']
                                <ArticleItem
                                    key={index}
                                    onClick={(e) => {
                                        // 排除删除/修改按钮区域：该区域内点击保持原逻辑
                                        const actionArea = e.target && e.target.closest && e.target.closest('.article-action');
                                        if (actionArea) return;

                                        // 标题/简介本身已经是 Link，避免重复 push
                                        const anchorEl = e.target && e.target.closest && e.target.closest('a');
                                        if (anchorEl) return;

                                        this.props.history.push('/detail/' + item.get('id'));
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <ArticleHeader>
                                        {/* 地址栏传递id */}
                                            <p tooltip title={item.get('title')}>{item.get('title')}</p>
                                    </ArticleHeader>
                                    <ArticleInfo>
                                        <p>{item.get('abstract')}</p>
                                    </ArticleInfo>
                                    <ArticleFooter>
                                        <ul>
                                            <li className="left"><span className="iconfont">&#xe602;</span>{item.get('label')}</li>
                                            <li className="left"><span className="iconfont">&#xe65d;</span>{item.get('createdate')}</li>
                                            <li className="left"><span className="iconfont">&#xe64b;</span>{item.get('commentcount')}</li>
                                        </ul>
                                        {this.props.loginState?
                                        <ul className="article-action"> 
                                            <li className="right"> <Button  onClick={()=>{this.props.deleteBlog(item.get('id'))}}>删除</Button></li>
                                            <li className="right"> <Link to={"/update/"+item.get('id')}><Button className='udp'>修改</Button></Link> </li>
                                        </ul> 
                                        :""}   
                                    </ArticleFooter>
                                </ArticleItem>
                            );
                        })
                        :<Empty style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:'60vh'}} />
                    :<SkeletonBox>
                        <div className="pageSpinner"></div>
                    </SkeletonBox>
               }
               {/* defaultCurrent	默认的当前页数 */}
               {/* current	        当前页数 */}
               {/* defaultPageSize	默认的每页条数 */}
               {/* total	        数据总数 */}
               {
                   SkeletonShow && Math.ceil(totalCount/pageSize)>1?
                    <Pagination className="pagination" defaultCurrent={1} current={currentPage} defaultPageSize={pageSize} total={totalCount}  onChange={(page, pageSize)=>{changePage(articleType,keyword,page, pageSize,this.refs.pag,getCodeData)}}/>
                    :''
               }              
               {
                   deleteState? this.props.getTotalCount(articleType,keyword):''
               }
               {
                   //    删除成功之后会自动刷新数据
                   currentPage>(Math.ceil(totalCount/pageSize))?
                   deleteState? this.props.getCodeData(articleType,keyword,currentPage-1,pageSize):''
                   :deleteState? this.props.getCodeData(articleType,keyword,currentPage,pageSize):''
               }
            </ArticleBox>
        )
    }

     //在组件被挂载到页面之后，自动执行   Ajax() 写在class组件里面
     componentDidMount(){
        const path = this.props.match.path;
        let keyword = this.props.match.params.keyword;
        let articleType;
        let search = 'sear';
        if(path === '/search/:keyword'){
            search = 'sear';
            articleType = '';
        }else if(path === '/sear/:keyword'){
            search = 'search';
            articleType = '';
        }else if(path === '/code'){
            keyword='';
            articleType = '代码笔记';
        }else if(path === '/notes'){
            keyword='';
            articleType = '闲言碎语';
        }
        this.props.initType(articleType,keyword,search);

        // console.log("在组件被挂载到页面",articleType,keyword)
        // setTimeout(()=>{
            this.props.getCodeData(articleType,keyword,1,this.props.pageSize);
        // },1000)
        this.props.getTotalCount(articleType,keyword);
        this.props.addBlogState();
        this.props.updateBlogState();
    }

}

const mapStateToProps = (state)=>{
    return {
        articleType:state.getIn(['codeReducer','articleType']),// 页面类型 【代码笔记/闲言碎语/搜索界面
        keyword:state.getIn(['codeReducer','keyword']),// 页面类型 【代码笔记/闲言碎语/搜索界面
        articleList:state.getIn(['codeReducer','articleList']), // 文章列表
        loginState:state.getIn(['headerReducer','loginState']), // 登录状态
        deleteState:state.getIn(['codeReducer','deleteState']), // 删除状态 若为true则重新刷新数据
        currentPage:state.getIn(['codeReducer','currentPage']), // 当前页码
        pageSize:state.getIn(['codeReducer','pageSize']), // 一页多少条数据
        totalCount:state.getIn(['codeReducer','totalCount']) // 一共多少条数据
    };
}
const mapDispatchToProps = (dispatch)=>{
    return {
        initType(articleType,keyword,search){
            const action = actionCreators.initTypeAction(articleType,keyword,search);
            dispatch(action);
        },
        // 按id删除文章
        deleteBlog(id){
            const action = actionCreators.deleteBlogAction(id);
            dispatch(action);
        },
        getTotalCount(articleType,keyword){
            // console.log('执行getTotalCount',pag)
            const action = actionCreators.getTotalAction(articleType,keyword);
            dispatch(action);
         },
        getCodeData(articleType,keyword,currentPage,pageSize,winDesktop,winPhone){
            // console.log("getCodeData",articleType,keyword,currentPage,pageSize)
            // setTimeout(()=>{
                const action = actionCreators.getCodeDataAction(articleType,keyword,currentPage,pageSize,winDesktop,winPhone);
                dispatch(action);
            // },800)
         },
         // 写博客状态改为false ，目的：可以回调添加博客界面
         addBlogState(){
            const action = addBlog(false);
            dispatch(action);
        },
         // 修改博客状态改为false ，目的：可以回调修改博客界面
         updateBlogState(){
            const action = updateBlog(false);
            dispatch(action);
        },
        // 监听页码的改变
        changePage(articleType,keyword,page, pageSize,pag,getCodeData){
            // console.log("监听页码改变")
            const winDesktop = pag.parentNode.parentNode.parentNode.parentNode;
            const winPhone = pag.parentNode.parentNode.parentNode;
            // winDesktop.scrollTo(0,0);
            // winPhone.scrollTo(0,0);
            getCodeData(articleType,keyword,page,pageSize,winDesktop,winPhone);
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ArticlePanel));