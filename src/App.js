import React,{ Component } from 'react';
import { ResetGlobalStyled } from './style';
import { IconfontGlobalStyled } from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import {HashRouter,Route} from 'react-router-dom';
// loadable.js异步加载 所有页面第一次加载会频闪
import Home from './pages/home/index';
import ArticleLine from './pages/articleLine/index';
import Code from './pages/code/index';
import Girl from './pages/girl/index';
import About from './pages/about/index';
import Detail from './pages/detail/index';
import Write from './pages/write/index';
import Update from './pages/update/index';
import 'antd/dist/antd.css';
import store from './store/index';


//provider 内部的组件都有能力连接store的内容
class App extends Component{
  render(){
    return (
      <Provider store={store}>
        {/* 全局reset重置样式 */}
        <ResetGlobalStyled/>
        {/* 全局字体图标 */}
        <IconfontGlobalStyled/>
        <HashRouter>
          {/*<Header>组件必须写在BrowserRouter里面,使用<Link>的组件必须在BrowserRouter里面,*/}
          {/* <Header/> */}
          {/* /表示根目录 */}
          <Route path='/' exact component={Home}></Route>
          <Route path='/articleLine' exact component={ArticleLine}></Route>
          <Route path='/code' exact component={Code}></Route>
          <Route path='/notes' exact component={Code}></Route>
          {/* <Route path='/girl' exact component={Girl}></Route> */}
          <Route path='/about' exact component={About}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
          <Route path='/deta/:id' exact component={Detail}></Route>
          <Route path='/write' exact component={Write}></Route>
          <Route path='/update/:id' exact component={Update}></Route>
          <Route path='/search/:keyword' exact component={Code}></Route>
          <Route path='/sear/:keyword' exact component={Code}></Route>
        </HashRouter>
        
      </Provider>
    );
  }
}

export default App;
