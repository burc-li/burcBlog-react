import styled from 'styled-components';

export const HeaderWrapper = styled.div`
&.container{
    font-size:14px;
    // border:1px #f00 solid ;
    // background: #3a3f51;
    background: #26292E;
    position:relative;
    border-bottom:2px #DE5E60 solid;
    height:56px;
    color:#B4B6BD;
    // color:#9D9D9D;
}
.row{
    border:1px #000 solid;
}
.col{
    position:relative;
    border-bottom:2px #DE5E60 solid;
    height:56px;
    background: #26292E;
    // box-shadow:0 0 10px #26292E;
}
`;
export const Logo = styled.div`
    display: flex;
    align-items: center;
    height:54px;
    font-size:18px;
    font-weight:700;
    cursor:pointer;
    margin-top:3px;
    color: #F1F3F4;
    margin-left: 42px;
    img{
        vertical-align: middle;
        height:32px;
        width:32px;
        padding:4px;
        border-radius:4px;
        background: rgba(255, 255, 255, 0.92);
        box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.28),
            0 4px 10px rgba(0, 0, 0, 0.28);
        object-fit: contain;
        margin-right:8px;
    }
    &.desktop{
        position:absolute;
        left:20px;
    }
    &.phone{
        width:200px;
        text-align:center;
        margin:1px auto;
        padding:5px 0;
    }
`;
export const SearchWrapper = styled.div`
    position:relative;
    .zoom{
        position:absolute;
        right:0px;
        line-height:30px;
        text-align:center;
        width:30px;
        cursor:pointer;
        color:#fff;
        background:#DE5E60;
        border-radius: 0 2px 2px 0;
    }
    .zoomDesktop{
    }
    &.desktop{
        position: absolute;
        // right: 182px;
        right: 28px;
        display:inline-block;
        height:54px;
        padding:14px 0;
        // margin-left:300px;
    }
    .zoomPhone{
        top:5px;
    }
    &.phone{
        // padding:5px 0;
        display:block;
        width:70%;
        height:40px;
        margin:0 auto;
    }
`;
export const SearchInput = styled.input.attrs({
    placeholder:'输入关键词搜索...'
})`
    font-size:14px;
    width:200px;
    background:#fff;
    height:30px;
    border:none;
    outline:0;
    color:#000;
    padding-left:0.8em;
    border-radius: 2px;

    &::placeholder{
        color:#999;
    }
    &.phone{
        width:100%;
    }
`;
export const NavItem = styled.div`
    // box-sizing:border-box;
    cursor:pointer;
    height:54px;
    padding:20px 20px;
    color:#B4B6BD;
    &:hover{
        height:56px;
        color:#eee;
        background:#000;
        border-bottom:2px solid #f00;
    }
    &.right{
        float:right;
    }
    &.left{
        float:left;
    }
    span{
        padding:0;
        margin:0;
    }
`;
export const Menu = styled.ul`
    position:absolute;
    z-index:99;
    width:100%;
    border-bottom:2px solid #DE5E60;
    display:none;
    &.show{
        display:block;
    }
    &.hide{
        display:none;
    }
`;
export const MenuItem = styled.li`
    line-height:40px;
    background:#26292E;
    color:#9D9D9D;
    padding:0 20px;
    text-align:center;
    border-bottom:1px solid #222;
    &:last-child:hover{
        color:#eee;
        background:#000;
    }
`;
export const LoginBox = styled.div`
    position:absolute;
    z-index:100;
    top:56px;
    right:0px;
    width:280px;
    border: 1px solid rgba(0,0,0,.1);
    background:#F1F3F4;
    box-shadow: 0 2px 6px rgba(0,0,0,.1);
    &.phone{
        top:84px;
    }
    .loginBtn{
        width:250px;
        margin:20px 15px 20px 15px;
        border-radius:0;
    }
    &.show{
        display:block;
    }
    &.hide{
        display:none;
    }
`;
export const Input = styled.input`
    border: 1px solid rgba(0,0,0,.1);
    width:250px;
    background:#fff;
    height:30px;
    margin:20px 15px 0 15px;
    padding-left:1em;
    color:#000;
    &::placeholder{
        color:#999;
    }
    &:nth-child(2){
        margin-top:30px;
    }
`;
export const Close = styled.span`
    position:absolute;
    top:0px;
    right:0px;
    width:20px;
    // height:20px;
    color:#fff;
    padding:3px;
    background:#d9534f;
    text-align:center;
    cursor:pointer;
    &:hover{
        background:#d2322d;
    }
`;
