import React,{ Component,Fragment } from 'react';
// import AvatarImg from '../../../../statics/headicon.jpg';
import { ContentWrapper,ImformationBox,ImformationItem } from './style';
import { Divider,Breadcrumb,Collapse  } from 'antd';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

class Content extends Component{
    

    render(){
        const { Panel } = Collapse;
        return(
            <Fragment>
                {/* 电脑 平板>=768px */}
                <MediaQuery minWidth={768}>
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
                            关于柏成
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <p className="title">柏成の个人资料</p>
                    <Divider className="divider"></Divider>
                    <p className="tag">人间不正经生活手册</p>
                    <ImformationBox>
                        <ImformationItem className="left">姓名<span>柏成</span></ImformationItem>
                        <ImformationItem className="right">学校<span>青岛理工大学</span></ImformationItem>
                        <ImformationItem className="left">性别<span>男</span></ImformationItem>
                        <ImformationItem className="right">学院<span>信控学院</span></ImformationItem>
                        <ImformationItem className="left">昵称<span>柏成/BurC/BurCha</span></ImformationItem>
                        <ImformationItem className="right">专业<span>软件工程</span></ImformationItem>
                        <ImformationItem className="left">职业<span>学生</span></ImformationItem>
                        <ImformationItem className="right">现状态<span>学习ing</span></ImformationItem>
                        <ImformationItem className="left">现居地<span>青岛市</span></ImformationItem>
                    </ImformationBox>
                    <Collapse defaultActiveKey={['2']}>
                        <Panel header="站点指南" key="1">
                            <p className="panelP">欢迎来到柏成BurCの博客！</p>
                            <p className="panelP">柏成会尽可能把所学知识应用到本网站，<span className="through">绝对不是秀技术</span>，所以柏成会留下几个好奇宝宝彩蛋。</p>
                            <p className="panelP">比如你可以点击头像区域会出现社会价值观，绝对官方严谨。</p>
                            <p className="panelP">你可以按F12查看逗比代码注释。</p>
                            <p className="panelP">......</p>
                            <p className="panelP">对了，柏成BurCの博客可以完美适配手机、平板、PC端，so，你可以在pc端或者移动端打开对比一下有什么不同，其实也没什么太大差别。</p>
                        </Panel>
                        <Panel header="简单的自我介绍" key="2">
                            <p className="panelP">Hello，大家好，我是柏成，BurC。</p>
                            <p className="panelP">98年老男人,<span className="through">喜欢屁股奶子大长腿</span>，超喜欢编程（你信我都不信）。一枚<span className="through">不正经</span>的草根程序员、华为脑残粉。</p>
                            <p className="panelP">我的梦想呢，就是开个小书店，偶尔看看书，喝喝茶，再养一只萨摩耶，做个文艺小青年。梦想很美好，现实很残酷，跌跌撞撞，一不小心入了IT的坑，我会不会秃了啊。</p>
                            <p className="panelP">柏成有一个炒鸡崇拜的大佬-花生PeA。作为学院最强Web开发的存在，花生PeA有着超级强大的能力以及貌似很高冷的性格。看完花生PeA的博客，我自闭了，so，经过学长的同意（借用了部分素材），柏成BurC的博客正在孵化中...</p>
                            <p className="panelP">奋斗吧，BurC！</p>
                        </Panel>
                        <Panel header="视觉性先兆偏头痛" key="3">
                            <p className="panelP">偏头痛属于那种不是什么大病，发作起来要命的症状。很多朋友也许永远体会不到。</p>
                            <p className="panelP">柏成的症状是视觉性先兆偏头痛，发病时间没有任何规律，完全随机，主要看它心情......</p>
                            <p className="panelP">请想象一下，在未知的下一秒，它就会突然降临，你必须停止一切活动，将自己置于一个安静、黑暗的地方进行休息。并且，三十分钟后必定会带来剧烈的头痛。</p>
                            <p className="panelP">so,柏成要少吃巧克力少喝咖啡，保持心情舒畅，做一个没心没肺毫无压力的人。</p>
                        </Panel>
                    </Collapse>
                </ContentWrapper>
            </MediaQuery>

                {/* 手机>=768px */}
                <MediaQuery maxWidth={767}>
                <ContentWrapper className="phone">
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
                            关于柏成
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <p className="title">柏成の个人资料</p>
                    <Divider className="divider"></Divider>
                    <ImformationBox>
                        <ImformationItem className="phone">姓名<span>柏成</span></ImformationItem>
                        <ImformationItem className="phone">学校<span>青岛理工大学</span></ImformationItem>
                        <ImformationItem className="phone">性别<span>男</span></ImformationItem>
                        <ImformationItem className="phone">学院<span>信控学院</span></ImformationItem>
                        <ImformationItem className="phone">昵称<span>柏成/BurC/BurCha</span></ImformationItem>
                        <ImformationItem className="phone">专业<span>软件工程</span></ImformationItem>
                        <ImformationItem className="phone">职业<span>学生</span></ImformationItem>
                        <ImformationItem className="phone">现状态<span>学习ing</span></ImformationItem>
                        <ImformationItem className="phone">现居地<span>青岛市</span></ImformationItem>
                    </ImformationBox>
                    <Collapse defaultActiveKey={['1']}>
                        <Panel header="站点指南" key="1">
                            <p className="panelP">欢迎来到柏成BurCの博客！</p>
                            <p className="panelP">柏成会尽可能把所学知识应用到本网站，<span className="through">绝对不是秀技术</span>，所以柏成会留下几个好奇宝宝彩蛋。</p>
                            <p className="panelP">比如你可以点击头像区域会出现社会价值观，绝对官方严谨。</p>
                            <p className="panelP">你可以按F12查看逗比代码注释。</p>
                            <p className="panelP">......</p>
                            <p className="panelP">对了，柏成BurCの博客可以完美适配手机、平板、PC端，so，你可以在pc端或者移动端打开对比一下有什么不同，其实也没什么太大差别。</p>
                        </Panel>
                        <Panel header="简单的自我介绍" key="2">
                            <p className="panelP">Hello，大家好，我是柏成，BurC。</p>
                            <p className="panelP">98年老男人,<span className="through">喜欢屁股奶子大长腿</span>，超喜欢编程（你信我都不信）。一枚<span className="through">不正经</span>的草根程序员、华为脑残粉。</p>
                            <p className="panelP">我的梦想呢，就是开个小书店，偶尔看看书，喝喝茶，再养一只萨摩耶，做个文艺小青年。梦想很美好，现实很残酷，跌跌撞撞，一不小心入了IT的坑，我会不会秃了啊。</p>
                            <p className="panelP">柏成有一个炒鸡崇拜的大佬-花生PeA。作为学院最强Web开发的存在，花生PeA有着超级强大的能力以及貌似很高冷的性格。看完花生PeA的博客，我自闭了，so，经过学长的同意（借用了部分素材），柏成BurC的博客正在孵化中...</p>
                            <p className="panelP">奋斗吧，BurC！</p>
                        </Panel>
                        <Panel header="视觉性先兆偏头痛" key="3">
                            <p className="panelP">偏头痛属于那种不是什么大病，发作起来要命的症状。很多朋友也许永远体会不到。</p>
                            <p className="panelP">柏成的症状是视觉性先兆偏头痛，发病时间没有任何规律，完全随机，主要看它心情......</p>
                            <p className="panelP">请想象一下，在未知的下一秒，它就会突然降临，你必须停止一切活动，将自己置于一个安静、黑暗的地方进行休息。并且，三十分钟后必定会带来剧烈的头痛。</p>
                            <p className="panelP">so,柏成要少吃巧克力少喝咖啡，保持心情舒畅，做一个没心没肺毫无压力的人。</p>
                        </Panel>
                    </Collapse>
                </ContentWrapper>
            </MediaQuery>
            </Fragment>
        )
    }
}

export default Content;