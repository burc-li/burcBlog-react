import React,{ PureComponent,Fragment } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Breadcrumb  } from 'antd';

class BreadCrumb extends PureComponent{
    render(){
        const { articletype } = this.props;
        return(
            <Fragment>
               <Breadcrumb className="breadcrumb" style={{borderRadius:'2px'}}>
                    <Breadcrumb.Item className="breadcrumbTitle">
                        当前位置：
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumbItem">
                        <Link to="/" className="link">
                            首页
                        </Link>
                    </Breadcrumb.Item>
                    {
                        articletype === '代码笔记'? <Breadcrumb.Item className="breadcrumbItem">
                            <Link to="/code" className="link">
                                代码笔记
                            </Link>
                            </Breadcrumb.Item>:''
                    }
                    {
                        articletype === '闲言碎语'? <Breadcrumb.Item className="breadcrumbItem">
                            <Link to="/notes" className="link">
                            闲言碎语
                            </Link>
                            </Breadcrumb.Item>:''
                    }
                    <Breadcrumb.Item>
                        正文
                    </Breadcrumb.Item>
                </Breadcrumb>
            </Fragment>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        articletype:state.getIn(['detailReducer','articletype'])
    };
}

export default connect(mapStateToProps,null)(BreadCrumb);