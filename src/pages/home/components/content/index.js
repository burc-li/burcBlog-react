import React,{ Component,Fragment } from 'react';
import AvatarImg from '../../../../statics/diagramX.svg';
import DiagramXImg from '../../../../statics/DiagramX.jpg';
import BlogImg from '../../../../statics/blog.jpg';
import { Avatar,AvatarItem,ContentWrapper } from './style';
import { Divider } from 'antd';
import MediaQuery from 'react-responsive';

class Content extends Component{
    renderAvatar(){
        return(
            <Avatar>
                <img src={AvatarImg} alt="头像"></img>
                <AvatarItem className="burc">这里是柏成✘の博客</AvatarItem>
                <AvatarItem>6年+经验 | 前端开发工程师</AvatarItem>
            </Avatar>
        )
    }

    renderPortfolio(){
        return(
            <Fragment>
                <Divider className="divider" orientation="left">作品集</Divider>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
                    <div style={{ textAlign: 'center' }}>
                        <img src={DiagramXImg} alt="DiagramX QR码" style={{ width: '100px', height: '100px', margin: '0 auto 10px', display: 'block' }} />
                        <p style={{ margin: 0, fontSize: '14px', textIndent: 0 }}>DiagramX（仅支持 PC 端）</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <img src={BlogImg} alt="个人博客 QR码" style={{ width: '100px', height: '100px', margin: '0 auto 10px', display: 'block' }} />
                        <p style={{ margin: 0, fontSize: '14px', textIndent: 0 }}>个人博客（PC 端 / 移动端）</p>
                    </div>
                </div>
            </Fragment>
        )
    }

    renderResumeContent(){
        return(
            <Fragment>
                <Divider className="divider" orientation="left">个人简介</Divider>
                <p>6 年前端开发经验，专注企业级 Web 平台、GoJS 可视化图形编辑器与前端工程化建设，具备大型项目交付与系统架构能力</p>
                <p>关注底层原理与技术沉淀，深入阅读 Vue2 / Vue3 核心源码模块；热衷技术分享，掘金年度人气作者 TOP50，技术文章累计阅读量 10W+</p>
                
                <h6>代表作品：</h6>
                <p>1. <a target="_blank" rel="noopener noreferrer" href="https://burc.top/diagramX">DiagramX｜Web 端 2D 可视化图形编辑器</a></p>
                <p>基于 Vue3 + GoJS 独立设计并开发，实现图形绘制、节点编辑、连线交互、画布操作等能力</p>
                <p>2. <a target="_blank" rel="noopener noreferrer" href="https://burc.top">个人技术博客</a></p>
                <p>基于 React + Express 独立开发，使用 Docker Compose 实现前后端一键部署，持续沉淀 Vue 源码、微前端与工程化相关文章</p>
                
                <Divider className="divider" orientation="left">工作经历</Divider>
                <h6><i className="iconfont">&#xe646;</i>北京优锘科技股份有限公司｜前端开发工程师  (2021.09 - 至今)</h6>
                <p>• 深度参与 QuickEA 企业架构管理平台建设，负责元模型建模器、GoJS 图形编辑器核心模块开发与维护</p>
                <p>• 推动前端工程化升级，负责 Webpack4 至 Webpack5 升级、pnpm + Monorepo 架构建设，提升多模块协作、依赖复用与工程维护效率</p>
                <p>• 参与招商银行、国投证券、一汽大众、春秋航空等大型客户交付与定制开发，支撑 20+ 行业头部客户落地</p>
                
                <h6><i className="iconfont">&#xe646;</i>山东有人物联网股份有限公司 | 前端开发工程师  (2020.04 - 2021.09)</h6>
                <p>• 负责物联网云平台 PC 端及小程序开发，参与设备数据采集、报警推送、权限菜单等业务模块建设</p>
                <p>• 参与生物安全管控系统可视化大屏开发，基于 ECharts 实现地图三级下钻、数据实时监控等功能</p>
                <p>• 推动前端规范化建设，接入 ESLint、Prettier、Husky 等工具，提升团队代码质量与协作效率</p>
                
                <h6><i className="iconfont">&#xe646;</i>北京知道创宇信息技术股份有限公司 | 前端开发实习生  (2019.09 - 2019.12)</h6>
                <p>• 参与慧眼 UI2.0 重构，基于 React、AntD、ECharts 完成数据可视化页面开发</p>
                
                <Divider className="divider" orientation="left">项目经历</Divider>
                <h6><i className="iconfont">&#xe646;</i>QuickEA 企业架构管理平台</h6>
                <p>QuickEA 是面向企业数字化转型的架构管理平台，将企业架构管理与可视化图形编辑器深度融合，平台基于元模型定义架构对象及关系规则，并通过可视化图形编辑器将业务、数据等多层抽象架构转换为可编辑、可复用、可传承的数字化视图资产。项目获得 Open Group 亚太区年度大奖，并在招商银行、国投证券、一汽大众、春秋航空等 20+ 行业头部客户落地</p>
                <p><strong style={{ color: '#58666E' }}>个人职责与成果</strong>:</p>
                <p>- 负责 GoJS 图形编辑器核心能力建设，支持 ArchiMate / 组态图 / 实体图等多种建模场景；深度定制 GoJS 作图引擎，实现节点编辑、锚点吸附、拖拽缩放、多选等画布核心交互</p>
                <p>- 实现模型关系分析与智能成图能力，支持规则驱动成图、Dify AI 成图、全域资产逐层探索与路径萃取成图，将业务对象与模型关系自动转换为可编辑的 GoJS 架构视图，提升复杂架构分析和绘图效率</p>
                <p>- 负责组态图动画效果开发，实现 3D 立体管道、管线流动、管线生长、液位波浪动画效果，提升设备的可视化表达能力</p>
                <p>- 推动前端工程化升级，完成 Webpack4 → Webpack5 迁移，构建速度提升 60%；搭建 pnpm + Monorepo 架构，提升多模块协作、依赖复用和工程维护效率</p>
                
                <h6><i className="iconfont">&#xe646;</i>生物安全管控系统</h6>
                <p>基于物联网云平台二次开发的工业设备管控系统，面向洗消流程、设备状态、数据采集与实时监控等场景，帮助企业实现洗消流程可视化管理与风险防控</p>
                <p><strong style={{ color: '#58666E' }}>个人职责与成果</strong>:</p>
                <p>- 负责可视化大屏核心模块开发，基于 Vue 全家桶 + ECharts 实现设备数据、洗消状态、告警信息等实时展示</p>
                <p>- 实现 ECharts 地图三级下钻能力，支持省、市、县多层级区域数据展示，并沉淀开源方案 <a target="_blank" rel="noopener noreferrer" href="https://github.com/burc-li/vue-map-drilling">vue-map-drilling</a></p>
                <p>- 参与 Webpack4 构建性能优化，优化开发环境构建流程，打包速度提升 35%，并沉淀为 <a target="_blank" rel="noopener noreferrer" href="https://github.com/burc-li/webpack-vue">Vue 工程模板</a></p>
                
                <h6><i className="iconfont">&#xe646;</i>物联网云平台</h6>
                <p>面向工业设备的数据采集与管理平台，基于 MQTT 实现设备主题发布与订阅，支持终端设备数据采集、报警推送、设备管理等能力，帮助企业快速搭建物联网业务系统</p>
                <p><strong style={{ color: '#58666E' }}>个人职责与成果</strong>:</p>
                <p>- 负责平台 PC 端与小程序端业务开发，参与设备管理、数据采集、报警推送、权限菜单等核心模块建设</p>
                <p>- 实现基于 Vue 的角色权限控制模型，根据用户角色动态生成路由表与权限菜单，提升菜单配置与业务扩展能力</p>
                <p>- 优化小程序端大数据列表渲染卡顿问题，降低页面加载耗时，页面加载速度提升 90%</p>
                
                <h6><i className="iconfont">&#xe646;</i>大学生扫码签到系统 | 项目负责人</h6>
                <p>大学期间主导开发的在线签到系统，基于扫码识别与地理定位实现学生身份校验、签到记录管理和定位数据可视化，解决课堂代签、考勤统计低效等问题</p>
                <p><strong style={{ color: '#58666E' }}>个人职责与成果</strong>:</p>
                <p>- 负责项目方案设计与核心功能开发，前端采用 React，后端采用 PHP，集成百度地图 API 实现定位数据采集与可视化打点</p>
                <p>- 实现扫码签到、地理位置校验、签到记录管理、考勤数据统计等功能，支持课堂签到流程线上化</p>
                <p>- 项目在学院试点应用，考勤效率提升 80%，获得国家级大学生创新创业训练计划结题证书、挑战杯二等奖、山东省大学生软件设计大赛二等奖</p>
                
                <Divider className="divider" orientation="left">专业技能</Divider>
                <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>前端基础</strong>：熟练掌握 HTML / CSS / JavaScript，熟悉 ES6+、Promise、闭包、原型链、事件循环、浏览器渲染机制</p>
                <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>框架能力</strong>：熟练掌握 Vue2 / Vue3 全家桶，深入阅读 Vue2 / Vue3 响应式、计算属性、侦听器、Diff 算法等核心源码模块；熟悉 React 基础开发</p>
                <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>可视化开发</strong>：熟练使用 GoJS，具备复杂图形编辑器与业务图表系统开发经验</p>
                <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>工程化能力</strong>：熟悉 Webpack 构建体系、pnpm Monorepo、Qiankun 微前端与模块联邦等方案</p>
                <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>全栈基础</strong>：熟悉 Node.js、MySQL 基础开发，具备 Docker、Nginx 部署实践经验</p>

                <Divider className="divider" orientation="left">荣誉奖项</Divider>
                <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>技术专利</strong>：<a target="_blank" rel="noopener noreferrer" href="https://cpquery.cponline.cnipa.gov.cn/detail/index?zhuanlisqh=ZMW1vbwLwaOrMZ4BcNrEqg%253D%253D&anjianbh&searchType=1">用于画布的超链接文本绘制方法（申请号：202311528257.X，申请中）</a></p>
                <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>竞赛奖项</strong>：第十六届挑战杯二等奖、山东省软件设计大赛二等奖</p>
                <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>学术荣誉</strong>：国家励志奖学金、国家级大学生创新创业训练计划结题</p>
                <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i>掘金 2024 年度人气作者 TOP 50</p>

                {this.renderPortfolio()}
            </Fragment>
        )
    }

    render(){
        return(
            <Fragment>
            {/* 电脑平板 >=768px */}
            <MediaQuery minWidth={768}>
                <ContentWrapper>
                    {this.renderAvatar()}
                    {this.renderResumeContent()}
                </ContentWrapper>
            </MediaQuery>
            {/* 手机  <=767px */}
            <MediaQuery maxWidth={767}>
                <ContentWrapper className="phone">
                    {this.renderAvatar()}
                    {this.renderResumeContent()}
                </ContentWrapper>
            </MediaQuery>
            </Fragment>
        )
    }
}

export default Content;
