import React,{ Component,Fragment } from 'react';
import { HeaderWrapper,Logo,SearchWrapper,SearchInput,NavItem,Menu,MenuItem,LoginBox,Close,Input} from './style';
import { CSSTransition } from 'react-transition-group';
import 'antd/dist/antd.css';
import { Button,Alert  } from 'antd';
import LogoImg from '../../statics/diagramX.svg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../store/actionCreators'
import MediaQuery from 'react-responsive';

class Header extends Component {
  render(){
    return (
        <Fragment>
            <HeaderWrapper className="container">
                {/* <Row gutter={0} className="row"> */}
                    {/* <Col className="col" xs={{ span: 24, offset: 0 }} md={{ span: 22, offset: 1 }} lg={{ span: 18, offset: 3 }}> */}
                         {/* 电脑平板 >=768px */}
                        <MediaQuery minWidth={768}>
                            <Logo className="desktop"><img alt="BurCha" src={LogoImg} />柏成✘</Logo>
                            <SearchWrapper className="desktop">
                                <CSSTransition
                                    in={this.props.focus}
                                    timeout={400}
                                    classNames="slide"
                                    >
                                    <SearchInput className={this.props.focus?"focused":""} 
                                        onFocus={this.props.inputFocus} 
                                        onBlur={this.props.inputBlur}
                                        onChange={this.props.inputChange}
                                        value={this.props.inputValue}
                                        ref={(SearchInput)=>(this.SearchInput = SearchInput)}
                                        onKeyDown={(e)=>{
                                            if(e.key === 'Enter' && this.props.inputValue){
                                                window.location.hash = "/"+this.props.search+"/"+this.props.inputValue;
                                            }
                                        }}
                                        >
                                    </SearchInput>
                                </CSSTransition>
                                 {/*函数带参数一定要用箭头函数 onClick={()=>this.props.searchArtical(this.props.inputValue)}*/}
                                 {
                                    this.props.inputValue?
                                        <Link to = {"/"+this.props.search+"/"+this.props.inputValue} replace>
                                            <span className="iconfont zoom zoomDesktop">&#xe637;</span>
                                        </Link>
                                    : <span className="iconfont zoom zoomDesktop" >&#xe637;</span>
                                 }
                                 
                            </SearchWrapper>
                            {
                                this.props.loginState ? <Fragment><NavItem className="right" onClick={this.props.logout}><span>退出</span></NavItem>
                                <Link to='/write'><NavItem className="right"><span>写文章</span></NavItem></Link>
                                </Fragment>
                                :(window.location.hash.includes('root') ? <NavItem className="right" onClick={()=>{this.props.loginBoxShowHide(true)}}><span>登录</span></NavItem> : null)
                            }
                            <LoginBox className={this.props.loginBox?"show":"hide"}>
                                <form>
                                    <Close onClick={()=>{this.props.loginBoxShowHide(false)}}>X</Close>
                                    <Input placeholder ="用户名" ref={(input)=>{this.username=input}}></Input>
                                    <Input placeholder ="密码" type="password" autocomplete="new-password"  ref={(input)=>{this.password=input}}></Input>
                                    <Button type="primary" className="loginBtn" onClick={()=>{this.props.login(this.username,this.password)}}>
                                        登录
                                    </Button>
                                </form>
                                { this.props.loginMessage?<Alert
                                    message={this.props.loginMessage}
                                    banner
                                    closable
                                />:"" }
                            </LoginBox>
                        </MediaQuery>

                        {/* 手机  <=767px */}
                        <MediaQuery maxWidth={767}>
                            <NavItem className="right" onClick={this.props.loginNavShowHide}>
                                <span className="iconfont zoom">&#xe606;</span>
                            </NavItem>
                            <NavItem className="left" onClick={this.props.navShowHide}>
                                <span className="iconfont zoom">&#xe663;</span>
                            </NavItem>
                            {/* <Logo className="phone">
                                <img alt="BurCha" src={LogoImg} />柏成✘
                            </Logo> */}
                            <Menu className={this.props.loginNavShow?"show":"hide"}>
                                <MenuItem>
                                    <SearchWrapper className="phone">
                                        <SearchInput className="phone"
                                            value={this.props.inputValue}
                                            onChange={this.props.inputChange}
                                            ref={(SearchInput)=>(this.SearchInput = SearchInput)}
                                            onKeyDown={(e)=>{
                                                if(e.key === 'Enter' && this.props.inputValue){
                                                    window.location.hash = "/"+this.props.search+"/"+this.props.inputValue;
                                                }
                                            }}
                                        >
                                        </SearchInput>
                                        {
                                            this.props.inputValue?
                                                <Link to = {"/"+this.props.search+"/"+this.props.inputValue} replace>
                                                  <span className="iconfont zoom zoomPhone">&#xe637;</span>
                                                </Link>
                                            : <span className="iconfont zoom zoomPhone">&#xe637;</span>
                                        }
                                        
                                    </SearchWrapper>
                                </MenuItem> 
                                {
                                    this.props.loginState ? <Fragment><MenuItem onClick={this.props.logout}><span>退出</span></MenuItem>
                                      <Link to='/write'><MenuItem><span>写文章</span></MenuItem></Link>
                                    </Fragment>
                                   :(window.location.hash.includes('root') ? <NavItem className="right" onClick={()=>{this.props.loginBoxShowHide(true)}}><span>登录</span></NavItem> : null)
                                   
                                }
                                <LoginBox className={this.props.loginBox?"show phone":"hide phone"}>
                                    <form>
                                        <Close onClick={()=>{this.props.loginBoxShowHide(false)}}>X</Close>
                                        <Input placeholder ="用户名" ref={(input)=>{this.username=input}}></Input>
                                        <Input placeholder ="密码" type="password" autocomplete="new-password"  ref={(input)=>{this.password=input}}></Input>
                                        <Button type="primary" className="loginBtn" onClick={()=>{this.props.login(this.username,this.password)}}>
                                            登录
                                        </Button>
                                    </form>
                                    { this.props.loginMessage?<Alert
                                    message={this.props.loginMessage}
                                    banner
                                    closable
                                />:"" }
                            </LoginBox>                                                                                     
                            </Menu>
                        </MediaQuery>
                    {/* </Col> */}
                {/* </Row> */}
            </HeaderWrapper>
        </Fragment>
    );
  }

  //在组件被挂载到页面之后，自动执行
  componentDidMount(){
    
    // 确认是否登录
    this.props.isLogin(); 
    // console.log("去人是否登录")
 }
}

//获取store数据
//参数state就是store的数据，把store的数据映射给这个组件【TodoList】变成组件的props，
const mapStateToProps = (state)=>{
    return{
        //获取immutable对象的元素值 .get("属性名")
        //方法一
        // focus:state.get('headerReducer').get('focus')
        //方法二
        focus:state.getIn(["headerReducer","focus"]), // 搜索框是否聚焦
        inputValue:state.getIn(["headerReducer","inputValue"]), // 搜索框的内容
        loginNavShow:state.getIn(["headerReducer","loginNavShow"]), // 登录菜单是否显示
        loginBox:state.getIn(["headerReducer","loginBox"]), // 登录框是否显示
        loginState:state.getIn(["headerReducer","loginState"]), // 是否登录
        root: window.location.hash.includes('root'), // 是否登录
        loginMessage:state.getIn(["headerReducer","loginMessage"]), // 登录错误信息
        search:state.getIn(["codeReducer","search"]) // 搜索界面更换
    }
};

//修改store的数据
//把store.dispatch方法挂载到props上,return一些方法给这个组件的props this.props.XXX
const mapDispatchToProps = (dispatch)=>{
    return{
        // 搜索框获取焦点
        inputFocus(){
            // 创建action
            const action = actionCreators.inputFocusAction();
             //将action传给store，一旦store接受到数据，将会自动将当前数据previousState,接受到的action传给reducer
            dispatch(action);
        },
        // 搜索框失去焦点
        inputBlur(){
            // 由于JavaScript为单线程，同一时间只能执行处理一个事件。“blur优先于click执行” 解决方法：对blur事件进行延迟，让click先执行。
            setTimeout(function(){  
                const action = actionCreators.inputBlurAction();
                dispatch(action);
            }, 100);  
        },
        // 手机模式<=767px时，点击设置图标，登录菜单显示或隐藏
        loginNavShowHide(){
            const action = actionCreators.loginNavShowAction();
            dispatch(action);
        },
        // 手机模式<=767px时，点击导航图标，导航菜单显示或隐藏
        navShowHide(){
            const action = actionCreators.navShowAction();
            dispatch(action);
        },
        // 搜索框内容发生改变
        inputChange(e){
            const action = actionCreators.inputChangeAction(e.target.value);
            dispatch(action);
        },
        // 搜索功能未完成
        searchArtical(inputValue){
            if(inputValue){
                console.log(`搜索框未完成 搜索内容:${inputValue}`);
            }
        },
        // 点击登录，登录框显示
        loginBoxShowHide(flag){
            const action = actionCreators.loginBoxShowAction(flag);
            dispatch(action);
        },
        //登录
        login(username,password){
            if(username.value==='' && password.value===''){
                const action = actionCreators.loginMessageAction("请输入用户名");
                dispatch(action);
            }else if(username.value==='' && password.value!==''){
                const action = actionCreators.loginMessageAction("请输入用户名");
                dispatch(action);
            }else if(username.value!=='' && password.value===''){
                const action = actionCreators.loginMessageAction("请输入密码");
                dispatch(action);
            }
            else{
                const action = actionCreators.loginAction(username.value,password.value);
                dispatch(action);
            }
        },
        // 确认是否登录
        isLogin(){
            const action = actionCreators.isLoginAction();
            dispatch(action);
        },
        //注销
        logout(){
            const action = actionCreators.logoutAction();
            dispatch(action);
        },
    }
};

//connect是连接，谁和谁做连接，TodoList和store做连接，
//有一个映射关系是mapStateToProps，参数state就是store的数据，把store的数据映射给这个组件【TodoList】变成组件的props，
//mapDispatchToProps， 把store.dispatch方法挂载到props上
export default connect(mapStateToProps,mapDispatchToProps)(Header);
