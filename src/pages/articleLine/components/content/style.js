import styled from 'styled-components';

export const ContentWrapper = styled.div`
    // border:1px solid #f00;
    padding:0 15px;
    &.phone{
        padding:0 10px;
    }
    .breadcrumb{
        color:#000;
        padding:8px 20px;
        width:100%;
        margin:20px auto;
        background:#FFFFFF;
        border-radius:5px;
    }
    .breadcrumbTitle{
        color:#58666E;
    }
    .breadcrumbItem{
        .link{
            color:#DE5E60;
        }
    }
    .divider{
        background:#fff;
        margin:5px;
        
    }
    .divider::before,.divider::after{
        border-top: 1px solid #fff !important;
    }
    .title{
        font-size:22px;
        text-align:center;
        font-weight:600;
        margin-bottom:10px;
    }
    .tag{
        color:#98A6AD;
        text-align:center;
    }
    .panelP{
        text-indent:2em;
    }
    .through{
        text-decoration:line-through;
        color:#CCC;
    }
`;
export const TimeLineBox = styled.ul`
    // border:1px solid #f00;
    margin:30px 0;
    padding:0 20px;
    &.phone{
        padding:0 0px;
    }
    .item{
        color:#58666E;
        cursor:pointer;
    }
    .itemDate{
        display:block;
        margin-top:4px;
        color:#999;
        font-size:13px;
        line-height:1.4;
    }
    .iconfont{
        color:#999;
        padding:0 5px 0 15px;
        font-size:14px;
    }
    
`;