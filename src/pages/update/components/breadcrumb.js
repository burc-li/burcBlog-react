import React,{ PureComponent,Fragment } from "react";
import { Link } from 'react-router-dom';
import { Breadcrumb  } from 'antd';

class BreadCrumb extends PureComponent{
    render(){

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
                    <Breadcrumb.Item>
                        修改文章
                    </Breadcrumb.Item>
                </Breadcrumb>
            </Fragment>
        )
    }
}


export default BreadCrumb;