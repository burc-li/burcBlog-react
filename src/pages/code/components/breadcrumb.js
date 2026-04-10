import React,{ PureComponent,Fragment } from "react";
import { Link } from 'react-router-dom';
import { Breadcrumb  } from 'antd';
import { connect } from "react-redux";

class BreadCrumb extends PureComponent{
    render(){
        const { articleType,keyword } = this.props;
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
                        articleType?
                            <Breadcrumb.Item>
                                {articleType}
                            </Breadcrumb.Item>
                        :
                            <Breadcrumb.Item>
                                {keyword}
                            </Breadcrumb.Item>
                    }
                    
                </Breadcrumb>
            </Fragment>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        articleType:state.getIn(['codeReducer','articleType']),// 页面类型 【代码笔记/闲言碎语/搜索界面
        keyword:state.getIn(['codeReducer','keyword'])// 页面类型 【代码笔记/闲言碎语/搜索界面
    };
}

export default connect(mapStateToProps,null)(BreadCrumb);