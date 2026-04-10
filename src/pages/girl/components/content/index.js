import React,{ Component,Fragment } from 'react';
import { ContentWrapper,PicBox,Pic,PicDes } from './style';
import { Divider,Breadcrumb,Collapse  } from 'antd';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actionCreators';
import { CSSTransition } from 'react-transition-group';

class Content extends Component{
    // 计算相恋日
    getLoveDays(){
        const startdate= new Date(this.props.loveStart).getTime();
        const nowdate = new Date().getTime();
        const lovedata =  Math.ceil( (nowdate - startdate) / (24 * 3600 * 1000) );
        return(
            <span className="scale">{lovedata}</span>
        )
    };
    // 计算距离生日还有多长时间
    getBirthday(){
        const nowyear=new Date().getFullYear();
        const nowmonth=new Date().getMonth()+1;
        const nowdate=new Date().getDate();
        // const startyear = new Date(this.props.birthday).getFullYear();
        const startmonth  = new Date(this.props.birthday).getMonth()+1;
        const startdate  = new Date(this.props.birthday).getDate();
        let birthyear=nowyear;
        //计算今年生日是否过完，过完就算明年生日了
        if((nowmonth > startmonth) || (nowmonth === startmonth && nowdate > startdate)){
            birthyear++;
        }
         
        const birthday=new Date(birthyear+"-"+startmonth+"-"+startdate).getTime();
         
        //核心，两个日期相减，得到一个整数，是两个日期之间相差的毫秒数
        const dms=birthday-new Date().getTime();
        //毫秒除以1000得到秒，除以3600得到小时，除以24得到日
        const dday=Math.ceil(dms/(1000*3600*24));
        return(
            <span className="scale">{dday}</span>
        )
    };
    // 计算小孩生日
    getYears(){
        const nowyear = new Date().getFullYear();
        const nowmonth  = new Date().getMonth()+1;
        const nowdate   = new Date().getDate();
        const startyear = new Date(this.props.birthday).getFullYear();
        const startmonth  = new Date(this.props.birthday).getMonth()+1;
        const startdate  = new Date(this.props.birthday).getDate();
        let girlyear = 0;
        if((nowmonth < startmonth) || (nowmonth === startmonth && nowdate <= startdate) )
            girlyear = nowyear - startyear;
        else
            girlyear = nowyear - startyear + 1;
        return(
            <span className="scale">{girlyear}</span>
        )
    };

    render(){
        const { Panel } = Collapse;
        return(
            <Fragment>
                {/* 电脑 平板>=768px */}
                <MediaQuery minWidth={768}>
                <ContentWrapper>
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
                            我的小孩
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <p className="title">我の小小孩</p>
                    <Divider className="divider"></Divider>
                    <p className="tag">嘿，遇见你，我很幸运</p>
                    <Divider orientation="left">2016-11-22</Divider>
                        <p className="day">
                        在一起{this.getLoveDays()}天
                        </p>
                    <Divider orientation="left">{this.props.birthday}</Divider>
                        <p className="day">
                        距离小孩{this.getYears()}岁生日还有<span className="scale">{this.getBirthday()}</span>天
                        </p>
                    <Collapse bordered={false} defaultActiveKey={['1']}>
                        <Panel header="收藏妙妙屋" key="1">
                            <p className="panelP">柏成收藏了好多一看到就蹦起来找妙妙屋摘抄的句子送给小孩。。。</p>
                            <p className="panelP"><i className="iconfont">&#xe77a;</i>如果可以 当然让你永远围着果酱罐 尝着蜂蜜糖 站在象牙塔 光明正大晒月亮 人间是个什么玩意儿 你看也不要看</p>
                            {/* <p>———— 林鹤连</p> */}
                            <p className="panelP"><i className="iconfont">&#xe77a;</i>我心里那一座天下 你坐镇笑靥如桃花</p>
                            {/* <p>————歌曲《绝代风华》许嵩</p> */}
                            <p className="panelP"><i className="iconfont">&#xe77a;</i>喜欢是两手空空 是蠢蠢欲动 是开始汹涌 是似懂非懂 是风吹草动都让我心事重重</p>
                            <p className="panelP"><i className="iconfont">&#xe77a;</i>少年与爱永不老去，即便披荆斩棘，丢失怒马鲜衣。</p>
                            <p className="panelP"><i className="iconfont">&#xe77a;</i>如果可以，想和你游遍四海山川，听京城潭柘寺的钟声，看扬州廿四桥的明月，在天山的冰雪下策马，在珠峰海拔四千米看落日。 
可如果不可以，我也想和你路过县城街角巷尾，小龙坎的火锅很好吃，贡茶一直有很棒的炒酸奶，姜妈花甲的粉丝汤，小淮娘的爆肚粉。 最后回家，给你一个甜甜的吻。</p>
                        </Panel>
                    </Collapse>
                    <PicBox>
                        <CSSTransition
                            in={this.props.picShow}
                            timeout={400}
                            classNames="slide"
                            // unmountOnExit
                            >
                            <Pic className={this.props.picShow?"enter":""} onMouseEnter={()=>{this.props.picShowHide(true)}} onMouseLeave={()=>{this.props.picShowHide(false)}}></Pic>
                        </CSSTransition>
                        <PicDes>
                            <p>柏成遇到了一个很美很美的女生...</p>
                            <p>希望你是披荆斩棘的女英雄</p>
                            <p>也是令人疼爱的小朋友</p>
                        </PicDes>
                    </PicBox>
                    <Collapse bordered={false} defaultActiveKey={['1']} className="collapse">
                        <Panel header="小本本" key="1">
                            <p className="panelP">小孩说的话柏成要认真记在小本本上</p>
                            <p className="panelP"><i className="iconfont">&#xe77a;</i>吵架不隔夜不冷战，主动一点又不会死翘翘</p>
                            <p className="panelP"><i className="iconfont">&#xe77a;</i>出去嗨皮时不要只顾着刷知乎、逛B站，毕竟手机哪有小孩好看</p>
                        </Panel>
                    </Collapse>
                </ContentWrapper>
            </MediaQuery>

            {/* 手机>=768px */}
            <MediaQuery maxWidth={767}>
            <ContentWrapper className="phone">
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
                            我的小孩
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <p className="title">我の小小孩</p>
                    <Divider className="divider"></Divider>
                    <p className="tag">嘿，遇见你，我很幸运</p>
                    <Divider orientation="left">2016-11-22</Divider>
                        <p className="day">
                        在一起{this.getLoveDays()}天
                        </p>
                    <Divider orientation="left">{this.props.birthday}</Divider>
                        <p className="day">
                        距离小孩{this.getYears()}岁生日还有<span className="scale">{this.getBirthday()}</span>天
                        </p>
                    <Collapse bordered={false} defaultActiveKey={['1']}>
                        <Panel header="收藏妙妙屋" key="1">
                            <p className="panelP">柏成收藏了好多一看到就蹦起来找妙妙屋摘抄的句子送给小孩。。。</p>
                            <p className="panelP"><i className="iconfont">&#xe77a;</i>如果可以 当然让你永远围着果酱罐 尝着蜂蜜糖 站在象牙塔 光明正大晒月亮 人间是个什么玩意儿 你看也不要看</p>
                            {/* <p>———— 林鹤连</p> */}
                            <p className="panelP"><i className="iconfont">&#xe77a;</i>我心里那一座天下 你坐镇笑靥如桃花</p>
                            {/* <p>————歌曲《绝代风华》许嵩</p> */}
                            <p className="panelP"><i className="iconfont">&#xe77a;</i>喜欢是两手空空 是蠢蠢欲动 是开始汹涌 是似懂非懂 是风吹草动都让我心事重重</p>
                            <p className="panelP"><i className="iconfont">&#xe77a;</i>少年与爱永不老去，即便披荆斩棘，丢失怒马鲜衣。</p>
                            <p className="panelP"><i className="iconfont">&#xe77a;</i>如果可以，想和你游遍四海山川，听京城潭柘寺的钟声，看扬州廿四桥的明月，在天山的冰雪下策马，在珠峰海拔四千米看落日。 
可如果不可以，我也想和你路过县城街角巷尾，小龙坎的火锅很好吃，贡茶一直有很棒的炒酸奶，姜妈花甲的粉丝汤，小淮娘的爆肚粉。 最后回家，给你一个甜甜的吻。</p>
                        </Panel>
                    </Collapse>
                    <PicBox>
                        <CSSTransition
                            in={this.props.picShow}
                            timeout={400}
                            classNames="slide"
                            // unmountOnExit
                            >
                            <Pic className={this.props.picShow?"enter":""} onMouseEnter={()=>{this.props.picShowHide(true)}} onMouseLeave={()=>{this.props.picShowHide(false)}}></Pic>
                        </CSSTransition>
                        <PicDes className='phone'>
                            <p>柏成遇到了一个很美很美的女生...</p>
                            <p>希望你是披荆斩棘的女英雄</p>
                            <p>也是令人疼爱的小朋友</p>
                        </PicDes>
                    </PicBox>
                    <Collapse bordered={false} defaultActiveKey={['1']} className="collapse">
                        <Panel header="小本本" key="1">
                            <p className="panelP">小孩说的话柏成要认真记在小本本上</p>
                            <p className="panelP"><i className="iconfont">&#xe77a;</i>吵架不隔夜不冷战，主动一点又不会死翘翘</p>
                            <p className="panelP"><i className="iconfont">&#xe77a;</i>出去嗨皮时不要只顾着刷知乎、逛B站，毕竟手机哪有小孩好看</p>
                        </Panel>
                    </Collapse>
                </ContentWrapper>   
            </MediaQuery>
            </Fragment>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        picShow:state.getIn(["girlReducer","picShow"]),
        loveStart:state.getIn(["girlReducer","loveStart"]),
        birthday:state.getIn(["girlReducer","birthday"])
    }
};
const mapDispatchToProps = (dispatch)=>{
    return{
        picShowHide(flag){
            const action = actionCreators.picShowAction(flag);
            dispatch(action);
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Content);