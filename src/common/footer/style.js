import styled from 'styled-components';

export const FooterWrapper = styled.div`
    background:#FFF;
    position:relative;
    z-index:1;
    font-size:14px;
    min-height:50px;
    border-top:1px solid rgba(0,0,0,0.1);
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 10px;
    &.desktop{
        width:100%;
    }
    &.phone{
        width:100%;
        justify-content:center;
    }
`;
export const FooterItem = styled.p`
    line-height:1.5;
    margin:0;
    padding:12px 0;
    color:#58666E;
    a{
        margin-left:10px;
    }
`;
