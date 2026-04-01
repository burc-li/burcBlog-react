import React,{ Component,Fragment } from 'react';
import { FooterWrapper,FooterItem } from './style';
// import { CSSTransition } from 'react-transition-group';
import MediaQuery from 'react-responsive';
// import { connect } from 'react-redux';
// import * as actionCreators from '../store/actionCreators'

class Footer extends Component{
    render(){
        return(
            <Fragment>
               {/* 电脑 >=992px */}
                <MediaQuery minWidth={992}> 
                    <FooterWrapper  className="desktop">
                        <FooterItem className="left">© 2025 Copyright <a href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备2025142701号</a></FooterItem>
                        <FooterItem className="right">Powered by React and Node</FooterItem>
                    </FooterWrapper>
                </MediaQuery>
                {/* 手机平板 <= 991px */}
                <MediaQuery maxWidth={991}> 
                    <FooterWrapper className="phone">
                        <FooterItem className="left">© 2025 Copyright <a href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备2025142701号</a></FooterItem>
                        {/* <FooterItem className="right">Powered by React and Node</FooterItem> */}
                    </FooterWrapper>
                </MediaQuery>
            </Fragment>
        );
    }
}

export default Footer;