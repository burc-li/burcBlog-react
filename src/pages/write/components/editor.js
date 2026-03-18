import React,{ PureComponent,Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { EditorBox,Input,Textarea,Select,Button } from "./style";
import { ArticalBox,ArticalTitle,ArticalInfo } from "../../detail/components/style";
import * as actionCreators from '../store/actionCreators';
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
        const { title,option,content,addState,inputChange,selectChange,addBlog } = this.props;
        return(
            <Fragment>
            <EditorBox> 
                <Input placeholder="标题" onChange={inputChange}></Input>
                <Input placeholder="作者" ref={(input)=>{this.author = input}}></Input>
                <Input placeholder="标签" ref={(input)=>{this.label = input}}></Input>
                <Select ref={(select)=>{this.option = select}} onChange={selectChange}>
                    <option value ="代码笔记">代码笔记</option>
                    <option value ="闲言碎语">闲言碎语</option>
                </Select>
                <Button onClick={()=>{addBlog(title,this.author,this.label,this.option,this.abstract, content)}}>添加博客</Button>
                <Textarea placeholder="摘要" ref={(input)=>{this.abstract = input}}></Textarea>
                <div ref="editorElem" >
                    <p>000请输入文章内容...[首行不能为空行][代码不能存在单引号][文章摘要为前两个p标签]</p>
                </div>
                <Divider></Divider>
                <ArticalBox>
                <ArticalTitle>
                    <p>{title}</p>
                </ArticalTitle>
                <ArticalInfo ref={(el) => (this.articleRef = el)} dangerouslySetInnerHTML={{ __html: this.formatContent(content) }}>
                </ArticalInfo>
             </ArticalBox>
            </EditorBox>
            {addState?
                <Redirect to={"/"+option} />
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
        this.props.InitEditor();
    }

    //当这个组件即将被从页面上剔除时，会被执行
    componentWillUnmount(){
        // console.log("content componentWillUnmount");
    }

}


const mapStateToProps = (state)=>{
    return{
        title:state.getIn(["writeReducer","title"]), // 搜索框的内容
        option:state.getIn(["writeReducer","option"]), // 搜索框的内容
        content:state.getIn(["writeReducer","content"]), // 搜索框的内容
        addState:state.getIn(["writeReducer","addState"]) // 添加博客是否完成
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        // 标题发生改变
        inputChange(e){
            const action = actionCreators.inputChangeAction(e.target.value);
            dispatch(action);
        },
        // 选择框发生改变
        selectChange(e){
            if(e.target.value==="代码笔记"){
                const action = actionCreators.selectChangeAction("code");
                dispatch(action);
            }else{
                const action = actionCreators.selectChangeAction("notes");
                dispatch(action);
            }
        },
        // 初始化富文本内容设置为请输入文章内容...[首行不能为空行]
        InitEditor(){
            const action = actionCreators.InitEditorAction();
            dispatch(action);
        },
        // 富文本编辑器发生改变
        editorChange(html){
            const action = actionCreators.editorChangeAction(html);
            dispatch(action);
        },
        // 添加博客
        addBlog(title,author,label,option,abstract,content){
            // console.log(content)
            const reg = /(?!<p><br><\/p>|<p><br><\/p>)^.*$/; //匹配了首行不为空
            if(!title||!author.value||!label.value||!abstract.value||!option.value||!reg.test(content)){
                alert("请将内容填写完整")
            }else{
                const year = new Date().getFullYear();
                let month = new Date().getMonth()+1;
                month = month<10?'0'+month:month;
                let date = new Date().getDate();
                date = date<10?'0'+date:date;
                const createdate = year + "年" + month + "月" + date +"日";

                const action = actionCreators.addBlogAction(title,author.value,label.value,option.value,abstract.value,content,createdate);
                dispatch(action);
            }
        }
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Editor);
