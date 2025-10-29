import React,{ Component,Fragment } from 'react';
import AvatarImg from '../../../../statics/headicon.jpg';
import DiagramXImg from '../../../../statics/DiagramX.jpg';
import BlogImg from '../../../../statics/blog.jpg';
import { Avatar,AvatarItem,ContentWrapper } from './style';
import { Divider } from 'antd';
import MediaQuery from 'react-responsive';

class Content extends Component{
    render(){
        return(
            <Fragment>
            {/* 电脑平板 >=768px */}
            <MediaQuery minWidth={768}>
                <ContentWrapper>
                    <Avatar>
                        <img src={AvatarImg} alt="头像"></img>
                        <AvatarItem className="burc">这里是柏成BurC的官方博客</AvatarItem>
                        <AvatarItem>6年+经验 | 前端开发工程师</AvatarItem>
                    </Avatar>
                    
                    <Divider className="divider" orientation="left">个人简介</Divider>
                    <p>6 年前端开发经验，主导企业架构平台、物联网系统、作图引擎等复杂系统从 0 到 1 落地，具备大型项目交付与系统架构能力</p>
                    <p>热衷技术分享，掘金年度人气作者 TOP 50，持续输出 Vue 源码、Qiankun 微前端架构与工程化等系列博文，累计阅读量超10W+</p>
                    
                    <h6>代表作品：</h6>
                    <p>1. <a target="_blank" rel="noopener noreferrer" href="http://burc.top/diagramX">DiagramX | 在线作图平台</a></p>
                    <p>独立开发，基于 Vue3 + GoJS 构建的 Web 端作图平台，专业强大！</p>
                    <p>2. <a target="_blank" rel="noopener noreferrer" href="http://burc.top">个人博客系统</a></p>
                    <p>大学期间独立开发，React+Express 前后端分离架构，使用 Docker Compose 实现前后端一键部署，部署效率提升 70%</p>
                    
                    <Divider className="divider" orientation="left">工作经历</Divider>
                    <h6><i className="iconfont">&#xe646;</i>北京优诺科技股份有限公司  (2021.09 - 至今)</h6>
                    <p>• 负责企业架构管理平台（QuickEA）从 0 到 1 开发，涵盖多人协同作图、可视化编辑器、元模型建模器等核心模块</p>
                    <p>• 深度定制 GoJS 作图引擎，实现 UML / BPMN / ArchiMate 等图形建模能力，GoJS画布内智能作图、Mention系统(@mention)、交互式 Tree Viewer 组件、D3力导向图可视化模块</p>
                    <p>• 主导前端架构升级，完成 webpack4 → webpack5 升级；构建速度提升 60%；搭建基于 pnpm + monorepo 的微前端（Qiankun）方案，支持模块联邦，减少重复依赖 80%</p>
                    
                    <h6><i className="iconfont">&#xe646;</i>山东有人物联网股份有限公司  (2020.04 - 2021.09)</h6>
                    <p>• 负责物联网云平台 PC端和小程序开发，推动项目规范化流程</p>
                    <p>• 主导构建 ESlint + Prettier + Husky 等开发规范体系，代码 review 时间减少 30%</p>
                    <p>• 主导生物安全系统可视化大屏设计，支持 ECharts 地图三级下钻、数据实时监控等功能</p>
                    
                    <h6><i className="iconfont">&#xe646;</i>北京知道创宇信息技术股份有限公司  (2019.09 - 2019.12)</h6>
                    <p>• 参与慧眼 UI2.0 重构，使用 React + AntD + ECharts 重构页面，完成电信研究院数据可视化展示</p>
                    
                    <Divider className="divider" orientation="left">项目经历</Divider>
                    <h6><i className="iconfont">&#xe646;</i>QuickEA企业架构管理平台</h6>
                    <p>• <strong style={{ color: '#58666E' }}>角色</strong>: 负责平台及作图工具全周期开发维护</p>
                    <p>• <strong style={{ color: '#58666E' }}>简介</strong>: 该系统为企业架构管理平台。企业数字化转型核心工具，基于元模型实现数图联动，形成可传承架构资产</p>
                    <p>• <strong style={{ color: '#58666E' }}>成果</strong>: 获得 Open Group 亚太区年度大奖，成功落地于招商银行、国投证券、一汽大众、春秋航空等20+行业头部客户</p>
                    <p>• <strong style={{ color: '#58666E' }}>技术</strong>:</p>
                    <p>  - 深度定制 GoJS 作图引擎，支持 UML/BPMN/ArchiMate/组态图等多类型模型在线建模与协同编辑</p>
                    <p>  - 实现  GoJS 画布内智能成图、Mention 系统（@提及）、交互式 Tree Viewer 组件 以及 D3 力导向图可视化模块等</p>
                    <p>  - 完成 Webpack4 → Webpack5 升级，搭建基于 pnpm + monorepo 的微前端架构（Qiankun + 模块联邦）</p>
                    
                    <h6><i className="iconfont">&#xe646;</i>生物安全管控系统</h6>
                    <p>• <strong style={{ color: '#58666E' }}>简介</strong>: 该系统为温氏食品集团股份有限公司的管控系统，基于物联网云平台二开，实现工业设备数据实时采集与洗消流程全周期监控，构建病毒阻隔智能防控体系。</p>
                    <p>• <strong style={{ color: '#58666E' }}>技术</strong>:</p>
                    <p>  - 采用 Vue 全家桶 + ECharts 开发数据可视化大屏，实现地图三级下钻（省-市-县）数据展示。开源解决方案: <a target="_blank" rel="noopener noreferrer" href="https://github.com/burc-li/vue-map-drilling">https://github.com/burc-li/vue-map-drilling</a></p>
                    <p>  - 完成 Webpack V4 性能优化，开发环境打包速度提升35%，并沉淀为 Vue 工程模板: <a target="_blank" rel="noopener noreferrer" href="https://github.com/burc-li/webpack-vue">https://github.com/burc-li/webpack-vue</a></p>
                    
                    <h6><i className="iconfont">&#xe646;</i>物联网云平台</h6>
                    <p>• <strong style={{ color: '#58666E' }}>简介</strong>: 面向工业设备的数据采集与管理系统，基于 MQTT 实现主题发布与订阅，支持终端设备数据采集、报警推送等功能，帮助企业快速搭建低成本、高效率的物联网平台</p>
                    <p>• <strong style={{ color: '#58666E' }}>技术</strong>:</p>
                    <p>  - 实现基于 Vue 的角色权限控制模型，动态生成路由表与权限菜单，提高系统菜单扩展性</p>
                    <p>  - 优化小程序中 ECharts 的万级数据渲染卡顿现象，页面加载时间缩短 90%</p>
                    
                    <h6><i className="iconfont">&#xe646;</i>大学生扫码签到</h6>
                    <p>• <strong style={{ color: '#58666E' }}>角色</strong>: 项目负责人</p>
                    <p>• <strong style={{ color: '#58666E' }}>简介</strong>: 一款基于手机扫码 + 地理定位的在线签到系统，通过扫码获取学生身份与地理位置，集成百度地图 API 实现定位数据可视化打点，实现课堂防代签与自动签到管理</p>
                    <p>• <strong style={{ color: '#58666E' }}>成果</strong>: 获国家级大学生创新创业训练计划结题证书、挑战杯二等奖、山东省大学生软件设计大赛二等奖，在信控学院试点，考勤效率提升 80%</p>
                    <p>• <strong style={{ color: '#58666E' }}>技术</strong>: 前端用 React，后端用 PHP，集成百度地图 API 实现定位与可视化</p>
                    
                    <Divider className="divider" orientation="left">专业技能</Divider>
                    <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>核心技能</strong>：精通 HTML / CSS / JavaScript（ES6+），熟练掌握 Vue 全家桶（阅读并输出部分源码笔记）、React 框架</p>
                    <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>可视化开发</strong>：熟练使用 GoJS，具备复杂图形编辑器与业务图表系统开发经验</p>
                    <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>工程化能力</strong>：掌握 Webpack 构建体系与性能优化，熟悉微前端架构（Qiankun）、Monorepo 项目架构与模块联邦拆分</p>
                    <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>全栈基础</strong>：熟悉 Node.js + MySQL 简单后端开发，具备 Docker 容器部署与 Nginx 反向代理实战经验</p>

                    <Divider className="divider" orientation="left">荣誉奖项</Divider>
                    <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>技术专利</strong>：《用于画布的超链接文本绘制方法》（CN202311528257.X）</p>
                    <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>竞赛奖项</strong>：第十六届挑战杯二等奖、山东省软件设计大赛二等奖</p>
                    <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>学术荣誉</strong>：国家励志奖学金、国家级大学生创新创业训练计划结题</p>
                    <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i>掘金 2024 年度人气作者 TOP 50</p>

                    
                    <Divider className="divider" orientation="left">作品集</Divider>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '20px' }}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={DiagramXImg} alt="DigramX QR码" style={{ width: '100px', height: '100px', margin: '0 auto 10px', display: 'block' }} />
                            <p style={{ margin: 0, fontSize: '14px' }}>DigramX (仅支持PC端)</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <img src={BlogImg} alt="个人博客 QR码" style={{ width: '100px', height: '100px', margin: '0 auto 10px', display: 'block' }} />
                            <p style={{ margin: 0, fontSize: '14px' }}>个人博客 (PC端/移动端)</p>
                        </div>
                    </div>
                </ContentWrapper>
            </MediaQuery>
            {/* 手机  <=767px */}
            <MediaQuery maxWidth={767}>
                <ContentWrapper className="phone">
                    <Avatar>
                        <img src={AvatarImg} alt="头像"></img>
                        <AvatarItem className="burc">这里是柏成BurC的官方博客</AvatarItem>
                        <AvatarItem>6年前端开发工程师 | 专注企业级应用开发</AvatarItem>
                    </Avatar>
                    
                    <Divider className="divider" orientation="left">个人简介</Divider>
                    <p>6 年前端开发经验，主导企业架构平台、物联网系统、作图引擎等复杂系统从 0 到 1 落地，具备大型项目交付与系统架构能力</p>
                    <p>热衷技术分享，掘金年度人气作者 TOP 50，持续输出 Vue 源码、Qiankun 微前端架构与工程化等系列博文，累计阅读量超10W+</p>
                    
<h6>代表作品：</h6>
                    <p>1. <a target="_blank" rel="noopener noreferrer" href="http://burc.top/diagramX">DiagramX | 在线作图平台</a></p>
                    <p>独立开发，基于 Vue3 + GoJS 构建的 Web 端作图平台，专业强大！</p>
                    <p>2. <a target="_blank" rel="noopener noreferrer" href="http://burc.top">个人博客系统</a></p>
                    <p>大学期间独立开发，React+Express 前后端分离架构，使用 Docker Compose 实现前后端一键部署，部署效率提升 70%</p>
                    
                    <Divider className="divider" orientation="left">工作经历</Divider>
                    <h6><i className="iconfont">&#xe646;</i>北京优诺科技股份有限公司  (2021.09 - 至今)</h6>
                    <p>• 负责企业架构管理平台（QuickEA）从 0 到 1 开发，涵盖多人协同作图、可视化编辑器、元模型建模器等核心模块</p>
                    <p>• 深度定制 GoJS 作图引擎，实现 UML / BPMN / ArchiMate 等图形建模能力，GoJS画布内智能作图、Mention系统(@mention)、交互式 Tree Viewer 组件、D3力导向图可视化模块</p>
                    <p>• 主导前端架构升级，完成 webpack4 → webpack5 升级；构建速度提升 60%；搭建基于 pnpm + monorepo 的微前端（Qiankun）方案，支持模块联邦，减少重复依赖 80%</p>
                    
                    <h6><i className="iconfont">&#xe646;</i>山东有人物联网股份有限公司  (2020.04 - 2021.09)</h6>
                    <p>• 负责物联网云平台 PC端和小程序开发，推动项目规范化流程</p>
                    <p>• 主导构建 ESlint + Prettier + Husky 等开发规范体系，代码 review 时间减少 30%</p>
                    <p>• 主导生物安全系统可视化大屏设计，支持 ECharts 地图三级下钻、数据实时监控等功能</p>
                    
                    <h6><i className="iconfont">&#xe646;</i>北京知道创宇信息技术股份有限公司  (2019.09 - 2019.12)</h6>
                    <p>• 参与慧眼 UI2.0 重构，使用 React + AntD + ECharts 重构页面，完成电信研究院数据可视化展示</p>
                    
                    <Divider className="divider" orientation="left">项目经历</Divider>
                    <h6><i className="iconfont">&#xe646;</i>QuickEA企业架构管理平台</h6>
                    <p>• <strong style={{ color: '#58666E' }}>角色</strong>: 负责平台及作图工具全周期开发维护</p>
                    <p>• <strong style={{ color: '#58666E' }}>简介</strong>: 该系统为企业架构管理平台。企业数字化转型核心工具，基于元模型实现数图联动，形成可传承架构资产</p>
                    <p>• <strong style={{ color: '#58666E' }}>成果</strong>: 获得 Open Group 亚太区年度大奖，成功落地于招商银行、国投证券、一汽大众、春秋航空等20+行业头部客户</p>
                    <p>• <strong style={{ color: '#58666E' }}>技术</strong>:</p>
                    <p>  - 深度定制 GoJS 作图引擎，支持 UML/BPMN/ArchiMate/组态图等多类型模型在线建模与协同编辑</p>
                    <p>  - 实现  GoJS 画布内智能成图、Mention 系统（@提及）、交互式 Tree Viewer 组件 以及 D3 力导向图可视化模块等</p>
                    <p>  - 完成 Webpack4 → Webpack5 升级，搭建基于 pnpm + monorepo 的微前端架构（Qiankun + 模块联邦）</p>
                    
                    <h6><i className="iconfont">&#xe646;</i>生物安全管控系统</h6>
                    <p>• <strong style={{ color: '#58666E' }}>简介</strong>: 该系统为温氏食品集团股份有限公司的管控系统，基于物联网云平台二开，实现工业设备数据实时采集与洗消流程全周期监控，构建病毒阻隔智能防控体系。</p>
                    <p>• <strong style={{ color: '#58666E' }}>技术</strong>:</p>
                    <p>  - 采用 Vue 全家桶 + ECharts 开发数据可视化大屏，实现地图三级下钻（省-市-县）数据展示。开源解决方案: <a target="_blank" rel="noopener noreferrer" href="https://github.com/burc-li/vue-map-drilling">https://github.com/burc-li/vue-map-drilling</a></p>
                    <p>  - 完成 Webpack V4 性能优化，开发环境打包速度提升35%，并沉淀为 Vue 工程模板: <a target="_blank" rel="noopener noreferrer" href="https://github.com/burc-li/webpack-vue">https://github.com/burc-li/webpack-vue</a></p>
                    
                    <h6><i className="iconfont">&#xe646;</i>物联网云平台</h6>
                    <p>• <strong style={{ color: '#58666E' }}>简介</strong>: 面向工业设备的数据采集与管理系统，基于 MQTT 实现主题发布与订阅，支持终端设备数据采集、报警推送等功能，帮助企业快速搭建低成本、高效率的物联网平台</p>
                    <p>• <strong style={{ color: '#58666E' }}>技术</strong>:</p>
                    <p>  - 实现基于 Vue 的角色权限控制模型，动态生成路由表与权限菜单，提高系统菜单扩展性</p>
                    <p>  - 优化小程序中 ECharts 的万级数据渲染卡顿现象，页面加载时间缩短 90%</p>
                    
                    <h6><i className="iconfont">&#xe646;</i>大学生扫码签到</h6>
                    <p>• <strong style={{ color: '#58666E' }}>角色</strong>: 项目负责人</p>
                    <p>• <strong style={{ color: '#58666E' }}>简介</strong>: 一款基于手机扫码 + 地理定位的在线签到系统，通过扫码获取学生身份与地理位置，集成百度地图 API 实现定位数据可视化打点，实现课堂防代签与自动签到管理</p>
                    <p>• <strong style={{ color: '#58666E' }}>成果</strong>: 获国家级大学生创新创业训练计划结题证书、挑战杯二等奖、山东省大学生软件设计大赛二等奖，在信控学院试点，考勤效率提升 80%</p>
                    <p>• <strong style={{ color: '#58666E' }}>技术</strong>: 前端用 React，后端用 PHP，集成百度地图 API 实现定位与可视化</p>
                    
                    <Divider className="divider" orientation="left">专业技能</Divider>
                    <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>核心技能</strong>：精通 HTML / CSS / JavaScript（ES6+），熟练掌握 Vue 全家桶（阅读并输出部分源码笔记）、React 框架</p>
                    <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>可视化开发</strong>：熟练使用 GoJS，具备复杂图形编辑器与业务图表系统开发经验</p>
                    <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>工程化能力</strong>：掌握 Webpack 构建体系与性能优化，熟悉微前端架构（Qiankun）、Monorepo 项目架构与模块联邦拆分</p>
                    <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>全栈基础</strong>：熟悉 Node.js + MySQL 简单后端开发，具备 Docker 容器部署与 Nginx 反向代理实战经验</p>

                    <Divider className="divider" orientation="left">荣誉奖项</Divider>
                    <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>技术专利</strong>：《用于画布的超链接文本绘制方法》（CN202311528257.X）</p>
                    <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>竞赛奖项</strong>：第十六届挑战杯二等奖、山东省软件设计大赛二等奖</p>
                    <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i><strong style={{ color: '#58666E' }}>学术荣誉</strong>：国家励志奖学金、国家级大学生创新创业训练计划结题</p>
                    <p style={{ textIndent: 0 }}><i className="iconfont">&#xe646;</i>掘金 2024 年度人气作者 TOP 50</p>
                </ContentWrapper>
            </MediaQuery>
            </Fragment>
        )
    }
}

export default Content;