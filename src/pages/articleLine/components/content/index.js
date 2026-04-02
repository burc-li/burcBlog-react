import React,{ Component,Fragment } from 'react';
// import AvatarImg from '../../../../statics/headicon.jpg';
import { ContentWrapper,TimeLineBox } from './style';
import { Breadcrumb,Timeline   } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as actionCreators from '../../store/actionCreators'
import MediaQuery from 'react-responsive';

class Content extends Component{
    render(){
        const { lineList } = this.props;
        return(
            <Fragment>
            {/* 电脑 平板>=768px */}
            <MediaQuery minWidth={768} defaultMatches={false} debounceTime={200}>
                <ContentWrapper>
                    <Breadcrumb className="breadcrumb">
                        <Breadcrumb.Item className="breadcrumbTitle">
                            当前位置：
                        </Breadcrumb.Item>
                        <Breadcrumb.Item className="breadcrumbItem">
                            <Link to="/" className="link">
                                首页
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            文章目录
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <TimeLineBox>
                        <Timeline>
                            {  
                            lineList?
                                lineList.map((item,index)=>{
                                    return(
                                        <Link key={item.get('id') || index} to = {"/detail/"+item.get('id')}>
                                            <Timeline.Item className='item'>
                                                <span>{item.get('title')}</span>
                                                <span className="itemDate">{item.get('createdate')}</span>
                                            </Timeline.Item>
                                        </Link>
                                    );
                                })
                            :''
                            }
                        </Timeline>
                    </TimeLineBox>
                </ContentWrapper>
            </MediaQuery>
            {/* 手机>=768px */}
            <MediaQuery maxWidth={767} defaultMatches={false} debounceTime={200}>
                <ContentWrapper className = 'phone'>
                    <Breadcrumb className="breadcrumb">
                        <Breadcrumb.Item className="breadcrumbTitle">
                            当前位置：
                        </Breadcrumb.Item>
                        <Breadcrumb.Item className="breadcrumbItem">
                            <Link to="/" className="link">
                                首页
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            文章目录
                        </Breadcrumb.Item>
                    </Breadcrumb>

                    <TimeLineBox className='phone'>
                        <Timeline>
                            {  
                            lineList?
                                lineList.map((item,index)=>{
                                    return(
                                        <Link key={item.get('id') || index} to = {"/detail/"+item.get('id')}>
                                            <Timeline.Item className='item'>
                                                <span>{item.get('title')}</span>
                                                <span className="itemDate">{item.get('createdate')}</span>
                                            </Timeline.Item>
                                        </Link>
                                    );
                                })
                            :''
                            }
                        </Timeline>
                    </TimeLineBox>
                </ContentWrapper>
            </MediaQuery>
            </Fragment>
        )
    }
     //在组件被挂载到页面之后，自动执行   Ajax() 写在class组件里面
     componentDidMount(){
        this.props.getLine();
    }
}

const mapStateToProps = (state)=>{
    return {
        lineList:state.getIn(['lineReducer','lineList']) // 文章标题 创建时间等信息
    };
}
const mapDispatchToProps = (dispatch)=>{
    return {
        getLine(){
            const action = actionCreators.getLineAction();
            dispatch(action);
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Content);