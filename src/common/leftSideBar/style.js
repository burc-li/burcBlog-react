import styled from 'styled-components';

export const LeftSideBarWrapper = styled.div`
    position:absolute;
    bottom:0;
    z-index:88;
    border-right:1px solid rgba(0,0,0,0.1);
    // max-width:280px;
    // min-width:220px;
    background:#F1F3F4;
    color:#58666E;
    line-height:1.5em;
    // color:#9D9D9D;
    // background:#26292E;
    &.desktop{
        top:56px;
        left:0;
        width:220px;
    }
    &.phone{
        top:0px;
        left:-220px;
        width:220px;
    }
    .divider{
        margin:0px 0;
    }
    .text{
      font-szie: 12px;
    }
`;
export const SideBarScroll = styled.div`
    position:absolute;
    top:0px;
    bottom:50px;
    left:0;
    width:100%;
    overflow:auto;
    // border:1px solid #f00;
`;
export const Img = styled.img`
    margin-top: 4px;
    width: 19px;
    height: 19px;
`;
export const TagLabel = styled.span`
   font-size: 13px;
`;
export const Avatar = styled.div`
    // border-bottom:1px solid #fff;
    cursor:pointer;
    padding:10px 0;
    img{
        width:120px;
        height:120px;
        display:block;
        margin:10px auto;
        // border:1px solid #CCC;
        // border-radius:40% 40% 2% 40%;
    }
`;
export const AvatarWord = styled.i`
    z-inde: 99;
    left:30px;
    position: absolute;
    font-size:14px;
    font-weight: bold;
    color: #DE5E60;
    &.show{
        opacity:1;
    }
    &.hide{
        opacity:0;
    }
    &.slide-enter{
        opacity:0;
    }
    &.slide-enter-active{
        opacity:1;
        transition: all 1s ease-out;
    }
    &.slide-exit{
        opacity:1;
    }
    &.slide-exit-active{
        top:-16px!important;
        opacity:0;
        transition: all 1s ease-in;
    }
`;
export const AvatarItem = styled.p`
   text-align:center;
   line-height:1.5em;
   font-size:12px;
   color:#98A6AD;
   margin-bottom:12px;
   &.identity{
       color:#58666E;
       font-weight:700;
   }
`;
export const Nav = styled.ul`
    // border-bottom:1px solid #fff;

`;
export const NavItem = styled.li`
    // border:1px solid #000;
    // border-bottom:1px solid #fff;
    font-size:14px;
    line-height:40px;
    padding:0 30px;
    cursor:pointer;
    color:#58666E;
    &:hover{
        background:#fff;
    }
    span{
        margin-right:20px;
    }
    &.sum{
        color:#98A6AD;
        font-size:12px;
    }
`;
export const Footer = styled.ul`
    position:absolute;
    margin:0;
    bottom:0;
    right:0;
    left:0;
    height:50px;
    background:#fff;
    border-top:1px solid #fff;
`;
export const FooterItem = styled.li`
    float:left;
    text-align:center;
    height:49px;
    width:33.3%;
    cursor:pointer;
    font-size:14px;
    span{
        display:block;
        line-height:1.5em;
    }
    span:first-child{
        color:#58666E;
        // padding:8px 0 0 0;
    }
    span:last-child{
        color:#98A6AD;
        // padding:5px 0;
    }
    &:hover{
        background:#F1F3F4;
    }
`;