import React,{ PureComponent,Fragment } from "react";
import { connect } from "react-redux";
import { ArticalBox,ArticalTitle,ArticalInfo,ArticalFooter } from "./style";
import { SkeletonBox } from '../../code/components/style';
import { Skeleton } from 'antd';
import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-dark.css'; 


class ArticleDetail extends PureComponent{
    // 格式化内容
    formatContent(html) {
        return html.replace(/<br\s*\/?>/g, '\n')
        .replace(/<code(?!.*class=)/g, '<code class="language-js"')
    }
    // 高亮代码
    highlightCode = () => {
        if (!this.articleRef) return;
        const blocks = this.articleRef.querySelectorAll('pre code');
        blocks.forEach((block) => {
            hljs.highlightElement(block);
        });
    };

    componentDidUpdate() {
        this.highlightCode();
    }

    componentDidMount() {
        this.highlightCode();
    }

    render(){
        const { title,content, createdate} = this.props;
        return(
            <Fragment>
            {
                title? 
                <ArticalBox>
                    <ArticalTitle>
                        <p tooltip title={title}>{title}</p>
                    </ArticalTitle>
                    <ArticalInfo className="article-content-root" ref={(el) => (this.articleRef = el)} dangerouslySetInnerHTML={{ __html: this.formatContent(content) }}>
                    </ArticalInfo>
                    <ArticalFooter>
                        <p>{createdate}</p>
                    </ArticalFooter>
                </ArticalBox>
                 :
                 <SkeletonBox>
                    <div className="pageSpinner"></div>
                 </SkeletonBox>
            }
            </Fragment>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        title:state.getIn(['detailReducer','title']),
        content:state.getIn(['detailReducer','content']),
        label:state.getIn(['detailReducer','label']),
        author:state.getIn(['detailReducer','author']),
        createdate:state.getIn(['detailReducer','createdate']),
        commentcount:state.getIn(['detailReducer','commentcount']),
        articleType:state.getIn(['detailReducer','articleType'])
    };
}

export default connect(mapStateToProps,null)(ArticleDetail);