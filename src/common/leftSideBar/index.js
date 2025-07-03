import React,{ Component,Fragment } from 'react';
import { LeftSideBarWrapper,SideBarScroll,Avatar,AvatarWord,AvatarItem,Nav,NavItem,Footer,FooterItem, Img, TagLabel } from './style';
import { CSSTransition } from 'react-transition-group';
import 'antd/dist/antd.css';
import AvatarImg from '../../statics/headicon.jpg';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators'
import { Link } from 'react-router-dom';
import { Divider } from 'antd';


class LeftSideBar extends Component {

    //点击头像区域出现富强民主...等提示词
    clickShowWord(){
        // 结构赋值
        const { wordShow,clientX,clientY,offsetLeft,currWord } = this.props;
        const array = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善"];
        // css样式 设置提示词在鼠标点击的位置出现
        let avatarWordStyle = {
            left:clientX-offsetLeft-14+'px', 
            top:clientY-56-20+'px'
        };
        return(
            <CSSTransition
                in={this.props.wordShow}
                timeout={1000}
                classNames="slide"
                unmountOnExit
                >
                <AvatarWord className={wordShow?"show":"hide"} style={avatarWordStyle}>{array[currWord]}</AvatarWord>
            </CSSTransition>
        )
    }
  render(){
    return (
        <Fragment>
            {/* 电脑平板 */}
             <MediaQuery minWidth={768}>
                {/* 侧边框 */}
                <LeftSideBarWrapper ref={(LeftSideBarWrapper)=>{this.LeftSideBarWrapper=LeftSideBarWrapper}} className="desktop">
                    {/* 高度太小时可滑动的部分 */}
                    <SideBarScroll>
                        {/* 头像 */}
                            <Avatar onMouseDown ={(e)=>{this.props.wordMouseDown(this.LeftSideBarWrapper,this.props.currWord,e,"desktop")}} onMouseUp={this.props.wordMouseUp}>
                                {this.clickShowWord()}
                                <img src={AvatarImg} alt="头像"></img>
                                <AvatarItem className='identity'>前端程序员</AvatarItem>
                                <AvatarItem>人间不正经生活手册</AvatarItem>
                            </Avatar>
                            <Divider className="divider"></Divider>
                            {/* 导航栏 */}
                            <Nav>
                                {/* <NavItem className="sum">导航</NavItem> */}
                                <Link to="/">
                                    <NavItem><span className="iconfont">&#xe610;</span>首页</NavItem>
                                </Link>
                                {/* <Divider className="divider"></Divider> */}
                                {/* <NavItem className="sum">页面</NavItem> */}
                                <Link  to="/articleLine">
                                    <NavItem><span className="iconfont">&#xe67a;</span>文章目录</NavItem>
                                </Link>
                                <Link  to="/code">
                                    <NavItem><span className="iconfont">&#xe695;</span>代码笔记</NavItem>
                                </Link>
                                <Link  to="/notes">
                                    <NavItem><span className="iconfont">&#xe616;</span>闲言碎语</NavItem>
                                </Link>
                                {/* <Link  to="/girl">
                                    <NavItem><span className="iconfont">&#xe77a;</span>我的小孩</NavItem>
                                </Link> */}
                                <Link  to="/about">
                                    <NavItem><span className="iconfont">&#xe655;</span>关于柏成</NavItem>
                                </Link>
                            </Nav>
                        </SideBarScroll>
                        {/* 底部页脚 */}
                        <Footer>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.cnblogs.com/burc">
                                <FooterItem><Img alt='' src = {require('../../statics/bokeyuan.png')}></Img><TagLabel>博客园</TagLabel></FooterItem>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://juejin.cn/user/2057887654093064/columns">
                                <FooterItem><Img alt='' src = {require('../../statics/juejin.png')}></Img><TagLabel>掘金</TagLabel></FooterItem>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/burc-li">
                                <FooterItem><Img alt='' src = {require('../../statics/github-fill.png')}></Img><TagLabel>GitHub</TagLabel></FooterItem>
                            </a>
                        </Footer>
                </LeftSideBarWrapper>   
             </MediaQuery>

            {/* 手机 */}
             <MediaQuery maxWidth={767}>
                {/* 侧边框 */}
                <LeftSideBarWrapper className="phone">
                    {/* 高度太小时可滑动的部分 */}
                    <SideBarScroll>
                        {/* 头像 */}
                                <Avatar onMouseDown ={(e)=>{this.props.wordMouseDown(this.LeftSideBarWrapper,this.props.currWord,e,"phone")}} onMouseUp={this.props.wordMouseUp}>
                                {this.clickShowWord()}
                                <img src={AvatarImg} alt="头像"></img>
                                <AvatarItem className='identity'>前端程序员</AvatarItem>
                                <AvatarItem>人间不正经生活手册</AvatarItem>
                            </Avatar>
                            {/* 导航栏 */}
                            <Nav>
                                <Link to="/">
                                    <NavItem><span className="iconfont">&#xe610;</span>首页</NavItem>
                                </Link>
                                <Link  to="/articleLine">
                                    <NavItem><span className="iconfont">&#xe67a;</span>文章目录</NavItem>
                                </Link>
                                <Link  to="/code">
                                    <NavItem><span className="iconfont">&#xe695;</span>代码笔记</NavItem>
                                </Link>
                                <Link  to="/notes">
                                    <NavItem><span className="iconfont">&#xe616;</span>闲言碎语</NavItem>
                                </Link>
                                {/* <Link  to="/girl">
                                    <NavItem><span className="iconfont">&#xe77a;</span>我的小孩</NavItem>
                                </Link> */}
                                <Link  to="/about">
                                    <NavItem><span className="iconfont">&#xe655;</span>关于柏成</NavItem>
                                </Link>
                            </Nav>
                        </SideBarScroll>
                        {/* 底部页脚 */}
                        <Footer>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.cnblogs.com/burc">
                                <FooterItem><Img alt='' src = {require('../../statics/bokeyuan.png')}></Img><TagLabel>博客园</TagLabel></FooterItem>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://juejin.cn/user/2057887654093064/columns">
                                <FooterItem><Img alt='' src = {require('../../statics/juejin.png')}></Img><TagLabel>掘金</TagLabel></FooterItem>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/burc-li">
                                <FooterItem><Img alt='' src = {require('../../statics/github-fill.png')}></Img><TagLabel>GitHub</TagLabel></FooterItem>
                            </a>
                        </Footer>
                </LeftSideBarWrapper>   
             </MediaQuery>
        </Fragment>
    );
  }
}

//获取store数据
//参数state就是store的数据，把store的数据映射给这个组件【TodoList】变成组件的props，
const mapToStateProps = (state)=>{
    return{
        //获取immutable对象的元素值 .get("属性名")
        //方法一
        // focus:state.get('headerReducer').get('focus')
        //方法二
        navShow:state.getIn(["headerReducer","navShow"]), // 左侧菜单栏是否显示
        wordShow:state.getIn(["headerReducer","wordShow"]), // 单词提示是否显示
        currWord:state.getIn(["headerReducer","currWord"]), // 当前显示第几个单词
        clientX:state.getIn(["headerReducer","clientX"]), // 鼠标点击的X轴坐标
        clientY:state.getIn(["headerReducer","clientY"]), // 鼠标点击的Y轴坐标
        offsetLeft:state.getIn(["headerReducer","offsetLeft"]) // 左侧菜单栏距离浏览器最左边的距离
    }

};

//修改store的数据
//把store.dispatch方法挂载到props上,return一些方法给这个组件的props this.props.XXX
const mapToDispatchProps = (dispatch)=>{
    return{
        // 头像区域鼠标按下显示动画
        wordMouseDown(sideBarWrapper,currWord,e,deviceType){
            // console.log("wordShow",e.clientX,e.clientY);
            let offsetLeft = null;
            // 如果是大屏设备offsetLeft：右侧菜单栏边框sideBarWrapper的父元素col距离浏览器最左边的距离
            // 如果是小平设备offsetLeft：0
            if(deviceType==="desktop")
                 offsetLeft = sideBarWrapper.parentNode.offsetLeft;
            else
                offsetLeft = 0;
            // console.log("offsetLeft",offsetLeft);
            let action = null;
            // 当前点击应该显示哪个单词
            if(currWord>=11){
                action = actionCreators.wordShowAction(e.clientX,e.clientY,offsetLeft,-1);
            }else{
                action = actionCreators.wordShowAction(e.clientX,e.clientY,offsetLeft,currWord);
            }
            //将action传给store，一旦store接受到数据，将会自动将当前数据previousState,接受到的action传给reducer
            dispatch(action);
        },
        // 头像区域鼠标抬起结束动画
        wordMouseUp(e){
            // console.log("wordHide",e.clientX,e.clientY);
            const action = actionCreators.wordHideAction(e.clientX,e.clientY);
            dispatch(action);
        }
    }
};

//connect是连接，谁和谁做连接，TodoList和store做连接，
//有一个映射关系是mapStateToProps，参数state就是store的数据，把store的数据映射给这个组件【TodoList】变成组件的props，
//mapDispatchToProps， 把store.dispatch方法挂载到props上
export default connect(mapToStateProps,mapToDispatchProps)(LeftSideBar);
