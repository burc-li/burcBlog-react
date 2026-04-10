import React,{ PureComponent,Fragment } from "react";
import { connect } from "react-redux";
import { CommentBox,CommentHeader,CommentHeaderLeft,CommentHeaderRight,Avator,Button,CommentBody,
    CommentItem,CommentItemLeft,CommentItemRight,CommentItemHeader,CommentName,CommentTime,CommentContent,CommentReply,CommentDel} from "./style";
import { Divider  } from 'antd';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../store/actionCreators';
import MediaQuery from 'react-responsive';

class Comment extends PureComponent{
    getDate(){
        const date = new Date();
        const year = date.getFullYear();
        let month = date.getMonth()+1;
        month = month<10?'0'+month:month;
        let day = date.getDate();
        day = day<10?'0'+day:day;
        let hour = date.getHours();
        hour = hour<10?'0'+hour:hour;
        let minute = date.getMinutes();
        minute = minute<10?'0'+minute:minute;
        const createdate = year + "年" + month + "月" + day +"日 "+hour+':'+minute;
        return createdate;
    }
    render(){
        const { title,textarea,nameInput,emailInput,toname,commentList,loginState,addState,changeTextarea,changeNameInput,changeMailInput,delState,addComment,deleteComment,replayComment,cancelRep } = this.props;
        return(
            <Fragment>
            {
                title?
                <CommentBox>
                <CommentHeader>
                    {toname?<p>回复{toname}</p>:<p>发表新的评论</p>}
                    <CommentHeaderLeft>
                        <Avator></Avator>
                    </CommentHeaderLeft>
                    {/* 电脑 >=1366px */}
                    <MediaQuery minWidth={1366}>
                        <CommentHeaderRight>
                            <textarea placeholder="请在此输入评论内容..."  style={{ minHeight: '50px' }}   onChange={changeTextarea} ref={(textarea)=>{this.content=textarea}} value={textarea}></textarea>
                            <input placeholder="名字" onChange={changeNameInput} ref={(input)=>{this.fromname=input}} value={nameInput}></input>
                            <input placeholder="E-mail" onChange={changeMailInput} ref={(input)=>{this.mail=input}} value={emailInput}></input>
                            <Button onClick={()=>{addComment(this.props.match.params.id,this.content,this.fromname,toname,this.mail,this.getDate())}}>评论</Button>
                            {toname?<Button onClick={cancelRep}>取消评论</Button>:""}
                        </CommentHeaderRight>
                    </MediaQuery>
                    {/* 平板手机 <=1365px */}
                    <MediaQuery maxWidth={1365}>
                        <CommentHeaderRight className="phone">
                            <textarea placeholder="请在此输入评论内容..." style={{ minHeight: '50px' }}  onChange={changeTextarea} ref={(textarea)=>{this.content=textarea}} value={textarea}></textarea>
                            <input placeholder="名字" onChange={changeNameInput} ref={(input)=>{this.fromname=input}} value={nameInput}></input>
                            <input placeholder="E-mail" onChange={changeMailInput} ref={(input)=>{this.mail=input}} value={emailInput}></input>
                            <Button onClick={()=>{addComment(this.props.match.params.id,this.content,this.fromname,toname,this.mail,this.getDate())}}>评论</Button>
                            {toname?<Button onClick={cancelRep}>取消评论</Button>:""}
                        </CommentHeaderRight>
                    </MediaQuery>
        
                </CommentHeader>

                <Divider></Divider>
                <CommentBody>
                    {   commentList?
                            commentList.map((item,index)=>{
                                return(
                                    // immutable 对象获取内容 item.get('id')
                                    //普通JS对象获取内容 item['id']
                                    <CommentItem key={index}>
                                        <CommentItemLeft>
                                            <Avator></Avator>
                                        </CommentItemLeft>
                                        <CommentItemRight>
                                            <CommentItemHeader>
                                                <CommentName>{item.get('fromname')}{item.get('toname')?<i> 回复 {item.get('toname')}</i>:""}</CommentName>
                                            </CommentItemHeader>
                                            <CommentContent>
                                                {item.get('content')} 
                                            </CommentContent>
                                            <CommentReply onClick={()=>{replayComment(item.get('fromname'))}}>回复</CommentReply>
                                            {loginState? <CommentDel onClick={()=>{deleteComment(item.get('id'),item.get('blogid'))}}>删除</CommentDel>:""}
                                            {/* <CommentDel onClick={()=>{deleteComment(item.get('id'))}}>删除</CommentDel> */}
                                            <CommentTime>{item.get('commentdate')}</CommentTime>
                                        </CommentItemRight>
                                    </CommentItem>
                                );
                            })
                        :''
                    }
                </CommentBody>
             </CommentBox>
             :''
            }
           
            { addState?this.props.getComment(this.props.match.params.id):"" }
            { delState?this.props.getComment(this.props.match.params.id):"" } 
            </Fragment>
        )
    }
    //在组件被挂载到页面之后，自动执行
    componentDidMount(){
        //获取地址栏id
        // const id = this.props.location.search.match(/\d+/g)[0];
        // const id =this.props.location.pathname.match(/\d+/g)[0];
        const id =this.props.match.params.id;
        // 根据博客id获取该博客的评论
        this.props.getComment(id);  
    }
}

const mapStateToProps = (state)=>{
    return {
        loginState:state.getIn(['headerReducer','loginState']), // 登录状态
        textarea:state.getIn(['detailReducer','textarea']), // 评论内容
        nameInput:state.getIn(['detailReducer','nameInput']), // 评论者名字
        emailInput:state.getIn(['detailReducer','emailInput']), // 评论者email
        toname:state.getIn(['detailReducer','toname']), // 目标评论者
        commentList:state.getIn(['detailReducer','commentList']), // 评论列表
        addState:state.getIn(['detailReducer','addState']), // 是否添加评论，为true则重新获取评论列表
        delState:state.getIn(['detailReducer','delState']), // 是否删除评论，为true则重新获取评论列表
        title:state.getIn(['detailReducer','title'])
    };
}
const mapDispatchToProps = (dispatch)=>{
    return {
        changeTextarea(e){
            const action = actionCreators.changeTextareaAction(e.target.value);
            dispatch(action);
        },
        changeNameInput(e){
            const action = actionCreators.changeNameAction(e.target.value);
            dispatch(action);
        },
        changeMailInput(e){
            const action = actionCreators.changeMailAction(e.target.value);
            dispatch(action);
        },
        // 添加评论
        addComment(blogid,content,fromname,toname,email,createdate){
            if(!content.value||!fromname.value||!email.value){
                alert("请填写必填项目【评论、姓名、邮件】");
            }else if(!/^\w+@[a-zA-Z0-9]+\.[a-z]+$/i.test(email.value)){
                alert("E-mail格式不正确")
            }else{
                const action = actionCreators.addCommentAction(blogid,content.value,fromname.value,toname,email.value,createdate);
                dispatch(action);
            }         
        },
        // 获取评论列表
        getComment(blogid){
            // console.log("初始化评论列表")
            const action = actionCreators.getCommentAction(blogid);
            dispatch(action);
        },
        // 删除评论
        deleteComment(id,blogid){
            // console.log(id,blogid)
            const action = actionCreators.delCommentAction(id,blogid);
            dispatch(action);
        },
        // 回复评论 设置评论目标名字
        replayComment(toname){
            const action = actionCreators.repCommentAction(toname);
            dispatch(action);
        },
        // 取消评论
        cancelRep(){
            const action = actionCreators.cancelRepAction();
            dispatch(action);
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Comment));