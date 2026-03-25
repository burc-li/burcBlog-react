import React,{ PureComponent,Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { EditorBox,Input,Textarea,Select,Button } from "./style";
import { ArticalBox,ArticalTitle,ArticalInfo } from "../../detail/components/style";
import * as actionCreators from '../store/actionCreators';
import { getDetailAction } from '../../detail/store/actionCreators';
import E from "wangeditor";
import { Divider } from 'antd';
import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-dark.css'; 

class Editor extends PureComponent{ 
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
    render(){
        const { title,author,label,option,abstract,content,updateState,titleChange,abstractChange, authorChange,labelChange,selectChange,updateBlog } = this.props;
        return(
            <Fragment>
            <EditorBox> 
                <Input placeholder="标题" ref={(input)=>{this.title = input}} onChange={titleChange} value={title}></Input>
                <Input placeholder="作者" ref={(input)=>{this.author = input}}  onChange={authorChange} value={author}></Input>
                <Input placeholder="标签" ref={(input)=>{this.label = input}}  onChange={labelChange} value={label}></Input>
                <Select ref={(select)=>{this.option = select}} onChange={selectChange} value={option}>
                    <option value ="代码笔记">代码笔记</option>
                    <option value ="闲言碎语">闲言碎语</option>
                </Select>
                {/* {console.log("123123")} */}
                <Button onClick={()=>{updateBlog(this.props.match.params.id,this.title,this.author,this.label,this.option,this.abstract, content)}}>修改博客</Button>
                <Textarea placeholder="摘要" ref={(input)=>{this.abstract = input}}  onChange={abstractChange} value={abstract}></Textarea>
                <div ref="editorElem">
                   
                </div>
                <Divider></Divider>
                <ArticalBox>
                <ArticalTitle>
                    <p>{title}</p>
                </ArticalTitle>
                <ArticalInfo className="article-content-root" ref={(el) => (this.articleRef = el)}  dangerouslySetInnerHTML={{ __html: this.formatContent(content) }}>
                </ArticalInfo>
             </ArticalBox>
            </EditorBox>
            {updateState? 
                option==='代码笔记'?<Redirect to='/code' />:<Redirect to='/notes' />
                :''}
            </Fragment>
        )
    }
    
     //在组件被挂载到页面之后，自动执行
     componentDidMount(){
        this.highlightCode();
        const elem = this.refs.editorElem; //获取editorElem盒子
        const editor = new E(elem);  //new 一个 editorElem富文本
        // 自定义菜单配置
        editor.customConfig.menus = [
            'head',  // 标题
            'bold',  // 粗体
            'fontSize',  // 字号
            'fontName',  // 字体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'quote',  // 引用
            'emoticon',  // 表情
            'image',  // 插入图片
            'table',  // 表格
            'code'  // 插入代码
        ]
        //富文本编辑器发生变化
        editor.customConfig.onchange = (html)=>{
            this.props.editorChange(html);
        } 
        editor.create();
        
        // 获取地址栏id，根据id获取文章内容
        const id =this.props.match.params.id;
        this.props.getDetail(id,editor); 
    }

}


const mapStateToProps = (state)=>{
    return{
        title:state.getIn(["updateReducer","title"]), // 标题
        author:state.getIn(["updateReducer","author"]), // 初始化数据 作者
        label:state.getIn(["updateReducer","label"]), // 初始化数据 标签
        option:state.getIn(["updateReducer","option"]), // 文章类型
        abstract:state.getIn(["updateReducer","abstract"]), // 文章摘要
        content:state.getIn(["updateReducer","content"]), // 文章内容
        updateState:state.getIn(["updateReducer","updateState"]), // 修改博客是否完成
        // initTitle:state.getIn(["updateReducer","title"]), // 初始化数据 标题
        // initContent:state.getIn(["detailReducer","content"]), // 初始化数据 内容
        // articletype:state.getIn(["updateReducer","articletype"]), // 初始化数据 文章类型
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        // 标题发生改变
        titleChange(e){
            const action = actionCreators.titleChangeAction(e.target.value);
            dispatch(action);
        },
        // 摘要发生改变
        abstractChange(e){
            const action = actionCreators.abstractChangeAction(e.target.value);
            dispatch(action);
        },
        // 作者发生改变
        authorChange(e){
            const action = actionCreators.authorChangeAction(e.target.value);
            dispatch(action);
        },
        // 标签发生改变
        labelChange(e){
            const action = actionCreators.labelChangeAction(e.target.value);
            dispatch(action);
        },
        // 选择框发生改变
        selectChange(e){
            const action = actionCreators.selectChangeAction(e.target.value);
            dispatch(action);
        },
        // 富文本编辑器发生改变
        editorChange(html){
            const action = actionCreators.editorChangeAction(html);
            dispatch(action);
        },
        // 页面加载成功自动将文章数据填充到文本框
        getDetail(id,editor){
            const action = getDetailAction(id,editor);
            dispatch(action);
        },
        // 修改博客
        updateBlog(id,title,author,label,option,abstract,content){
            if(!title.value||!author.value||!label.value||!option.value||!abstract.value||!content){
                alert("请将内容填写完整")
            }else{
                const action = actionCreators.updateBlogAction(id,title.value,author.value,label.value,option.value,abstract.value,content);
                dispatch(action);
            }
        }
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Editor));
