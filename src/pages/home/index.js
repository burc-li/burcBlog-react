import React,{Component,Fragment } from 'react';
import { PageWrapper,PageRightWrapper,PageRight,PageContent,PageSlide } from './style';
import { CSSTransition } from 'react-transition-group';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import Header from '../../common/header/index';
import LeftSideBar from '../../common/leftSideBar/index';
import Content  from './components/content/index';
import RightSideBar from '../../common/rightSideBar/index';
import Footer from '../../common/footer/index';
// import * as actionCreators from './store/actionCreators'
import MediaQuery from 'react-responsive';

class Home extends Component{
    console(){
        console.clear();
        console.log("   /*");
        console.log("                           _ooOoo_");
        console.log("                          o8888888o");
        console.log("                          88\" . \"88\"");
        console.log("                          (| -_- |)");
        console.log("                          O\\  =  /O");
        console.log("                       ____/`---'\\____");
        console.log("        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log("                    佛祖保佑       永无BUG");
        console.log("   */");
    }
    render(){
        return(
        <Fragment>
            <PageWrapper className="container">
                <Row gutter={0} className="row">
                    <Col ref={(col)=>{this.col=col}} className="col" xs={{ span: 24, offset: 0 }} md={{ span: 22, offset: 1 }} lg={{ span: 20, offset: 2 }} xxl={{ span: 16, offset: 4 }}>
                        {/* 顶部导航条 */}
                        <Header></Header>
                         {/* 电脑 >=992px */}
                        <MediaQuery minWidth={992}>
                            {/* 左侧菜单栏 */}
                            <LeftSideBar></LeftSideBar>
                            {/* 右侧页面 */}
                            <PageRightWrapper className="desktop">
                                {/* 右侧页面内容 */}
                                <PageRight className="clearfix">   
                                    {/* 右侧菜单栏 */}
                                    <RightSideBar></RightSideBar>
                                     {/* 页面中间内容 */}
                                     <PageContent className="desktop">
                                         <Content></Content>
                                         <Footer></Footer>
                                     </PageContent>
                                </PageRight>
                            </PageRightWrapper>
                        </MediaQuery>

                        {/* 平板 <=991px */}
                        <MediaQuery maxWidth={991}>
                            {/* 左侧菜单栏 */}
                            <LeftSideBar></LeftSideBar>
                            {/* 右侧页面 */}
                            <PageRightWrapper className="desktop">
                                {/* 右侧页面内容 */}
                                <PageRight className="clearfix">   
                                    {/* 右侧菜单栏 */}
                                    <RightSideBar></RightSideBar>
                                     {/* 页面中间内容 */}
                                     <PageContent className="ipad">
                                        <Content></Content>
                                        <Footer></Footer>
                                     </PageContent>
                                </PageRight>
                            </PageRightWrapper>
                        </MediaQuery>

                         {/* 手机  <=767px */}
                        <MediaQuery maxWidth={767}>
                            <CSSTransition
                                in={this.props.navShow}
                                timeout={400}
                                classNames="slide"
                            >
                                {/* 包裹 左侧菜单栏、右侧内容，便于菜单栏和右侧内容联动滑入滑出*/}
                                <PageSlide className={this.props.navShow?"show":"hide"}>
                                    {/* 左侧菜单栏 */}
                                    <LeftSideBar></LeftSideBar>
                                    {/* 右侧页面 */}
                                    <PageRightWrapper className="phone">
                                        {/* 页面中间内容 */}
                                        <PageContent className="phone">
                                            <Content></Content>
                                            <Footer></Footer>
                                        </PageContent>
                                    </PageRightWrapper>
                                </PageSlide>
                            </CSSTransition>
                        </MediaQuery>
                    </Col>
                </Row>
            </PageWrapper>
        </Fragment>
        )
    }

    //在组件被挂载到页面之后，自动执行   Ajax() 写在class组件里面
    componentDidMount(){
        this.console();
    }
}
const mapStateToProps = (state)=>{
    return{
        navShow:state.getIn(["headerReducer","navShow"])
    }
};

export default connect(mapStateToProps,null)(Home);