import styled from 'styled-components';

export const ContentWrapper = styled.div`
    padding:0 30px;
    line-height:1.5em;
    margin-bottom:30px;
    &.phone{
        padding:0 15px;
    }
    .divider{
        background:#fff;
        .ant-divider-inner-text{
          color: #De5e60;
        }
    }
    .divider::before,.divider::after{
        border-top: 1px solid #fff !important;
    }
    h6{
        text-indent:0em;
        font-size:14px;
        color:#58666E;
        font-weight: bold;
        margin-top:1.2em;
        margin-bottom:0.5em;
    }
    p{
        text-indent:2em;
        font-size:14px;
        margin-bottom:0.5em;
    }
`;
export const Avatar = styled.div`
    // border:1px solid rgba(0,0,0,.1);
    padding:30px 0 5px 0;
    img{
        width:250px;
        height:250px;
        display:block;
        margin:0 auto;
        border-radius:40% 40% 2% 40%;
    }
`;
export const AvatarItem = styled.p`
    text-align:center; 
    text-indent:0em !important;; 
    color:#58666E;
    font-size:18px;
    margin:15px 0;
    &.burc{
        color:#58666E;
        font-weight:600;
        font-size:20px;
    }
`;