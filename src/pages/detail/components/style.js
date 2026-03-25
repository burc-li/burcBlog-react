import styled from 'styled-components';
import  AvatorImg  from '../../../statics/headicon.jpg'

export const ContentWrapper = styled.div`
    // border:1px solid #f00;
    padding:0 15px;
    font-size:15px;
    line-height:1.5em;
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
`; 
export const ArticalBox = styled.div`
    background:#FFF; 
    color:#58666E;
    padding:15px 20px;
    border-bottom:1px solid #CCC;
`;
export const ArticalTitle = styled.div`
    background:#FFF;
    p{
        text-align:center;
        font-size:22px;
        margin-bottom:30px;
        font-weight:600;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }

`;
export const ArticalInfo = styled.div`
    background:#FFF;
    
    /* 字体 样式 */
    p{
        // text-indent:2em;
        font-size:15px;
        line-height:1.8em;
        margin-bottom:12px;
    } 
    h1 { font-size: 2em; margin: .67em 0 }
    h2 { font-size: 1.5em; margin: .75em 0 }
    h3 { font-size: 1.17em; margin: .83em 0 }
    h4 { font-size: .97em; margin: 1.12em 0 }
    h5 { font-size: .83em; margin: 1.5em 0 }
    h6 { font-size: .75em; margin: 1.67em 0 }
    h1, h2, h3, h4,
    h5, h6 { font-weight: bolder }
    /* table 样式 */
    table {
        min-width: calc(100% - 4em);
        table-layout: fixed;
        border-collapse: separate;
        border-spacing: 0;
        margin: 16px 2em;
        background: #ffffff;
        border: 1px solid #e6eaf0;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);
        display: table;
        box-sizing: border-box;
    }
    table tr{
        &:hover{
            background:#f7fafc;
        }
    }
    table tbody tr:nth-child(odd){
        background:#fbfcfe;
    }
    table td,
    table th {
        border-bottom: 1px solid #edf1f5;
        border-right: 1px solid #edf1f5;
        padding: 10px 12px;
        font-size: 14px;
        line-height: 1.6;
        white-space: normal;
        word-break: break-word;
        overflow-wrap: anywhere;
    }
    table th {
        background: #f4f7fb;
        color: #334155;
        font-weight: 600;
        border-bottom: 1px solid #dfe6ee;
        text-align: center;
    }
    table th:last-child,
    table td:last-child {
        border-right: none;
    }
    table tr:last-child td {
        border-bottom: none;
    }
    @media (max-width: 991px) {
        table {
            margin: 16px 0;
        }
    }

    /* blockquote 样式 */
    blockquote {
        display: block;
        border-left: 12px solid #d0e5f2;
        padding: 12px 20px;
        margin: 12px 0em 12px 0em;
        line-height: 1.6em;
        font-size: 100%;
        background-color: #F1F3F4;
    }

    /* 行内代码 */
    code:not(pre code) {
        font-family: "Fira Code", "Consolas", "Monaco", monospace;
        font-size: 0.85em;
        line-height: 1.45;
        color: #de5e60;
        border: 1px solid rgba(27, 31, 36, 0.1);
        background-color: #f6f8fa;
        border-radius: 2px;
        padding: 0.2em 0.4em;
        margin: 0 0.1em;
        box-shadow: none;
        word-break: break-word;
    }

    /* 代码块 */
    pre {
        position: relative;
        margin: 16px 2em;
        border-radius:  6px;
        // box-shadow: 0 3px 10px rgba(15, 23, 42, 0.12), 0 1px 2px rgba(15, 23, 42, 0.08);
        box-shadow: 0 0 5px hsla(0,0%,43.1%,.35);
        background: #F1F3F4;
        overflow: hidden;
    }
    @media (max-width: 991px) {
        pre {
            margin: 16px 0;
        }
    }
    pre::before {
        content: "";
        display: block;
        height: 28px;
        // background: linear-gradient(180deg, #30343b 0%, #292d34 100%);
        background: #FFFFFF;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        border-bottom: 1px solid #3a4048;
    }
    pre::after {
        content: "";
        position: absolute;
        top: 10px;
        left: 12px;
        width: 42px;
        height: 10px;
        border-radius: 10px;
        background:
            radial-gradient(circle at 5px 5px, #ff5f57 5px, transparent 6px),
            radial-gradient(circle at 21px 5px, #febc2e 5px, transparent 6px),
            radial-gradient(circle at 37px 5px, #28c840 5px, transparent 6px);
    }

    pre code {
        display: block;
        font-family: "Fira Code", "Consolas", "Monaco", monospace;
        font-size: 13px;
        line-height: 1.75;
        padding: 14px 16px 16px;
        max-height: 800px;
        white-space: pre;
        word-break: normal;
        overflow-wrap: normal;
        overflow-x: auto;
        overflow-y: auto;
        border: none;
        border-radius: 0 0 6px 6px;
        background: #26292E;
        color: #f5f5f7;
        scrollbar-width: thin;
        scrollbar-color: #7f8694 #2b3038;
    }

    .hljs {
        background: #26292E !important;
        color: #f5f5f7;
        white-space: pre;
        word-break: normal;
        overflow-wrap: normal;
    }
    pre code::-webkit-scrollbar {
        height: 10px;
        width: 10px;
    }
    pre code::-webkit-scrollbar-track {
        background: #2b3038;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.06);
    }
    pre code::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #8f97a7 0%, #6f7786 100%);
        border-radius: 999px;
        border: 2px solid #2b3038;
    }
    pre code::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #a4adbe 0%, #818a9b 100%);
    }
    pre code::-webkit-scrollbar-thumb:active {
        background: linear-gradient(180deg, #b2bbcd 0%, #8d96a8 100%);
    }
    pre code::-webkit-scrollbar-corner {
        background: #2b3038;
    }



    /* ul ol 样式 */
    ul, ol {
        margin: 12px 0 12px 2em;
        padding-left: 0.3em;
        line-height: 1.9em;
        color: #4b5563;
    }
    li{
        margin: 4px 0;
    }
    li > ul,
    li > ol{
        margin: 6px 0 6px 1.4em;
    }
    ul{
        list-style: disc;
    }
    ol{
        list-style: decimal;
    }
    ul li::marker,
    ol li::marker{
        color: #333333;
    }
    @media (max-width: 991px){
        ul, ol{
            margin: 10px 0 10px 1.4em;
            padding-left: 0.3em;
        }
    }

    /* img 样式 */
    img{
        box-shadow: 0 2px 8px rgba(15, 23, 42, 0.1);
        border-radius:10px;
        border:1px solid #e6eaf0;
        max-width: calc(100% - 4em) !important;
        width: auto;
        height: auto;
        max-height: 560px;
        object-fit: contain;
        margin: 0 auto;
        margin-top:12px;
        margin-bottom:8px;
        display: block;
    }
    `;
export const ArticalFooter = styled.div`
    background:#FFF;
    p{
        text-align:center;
        margin-bottom:0px;
    }
`;
export const CommentBox = styled.div`
    border-bottom:1px solid #CCC;
    background:#FFF; 
    color:#58666E;
    padding:15px 20px 0 20px;
    margin:20px auto;
    overflow:hidden;
    p{
        color:#58666E;
        font-weight:700;
    }
`;
export const CommentHeader = styled.div`
    font-size:15px;
    overflow:hidden;
    position:relative;
    p{
        margin-bottom:1em;
    }
`;
export const CommentHeaderLeft = styled.div`
    float:left;
    display: table-cell;
    padding-right:10px;
`;
export const Avator = styled.div`
    border:1px solid #CCC; 
    width:50px;
    height:50px;
    background:url(${AvatorImg});
    background-size:cover;
`;
export const CommentHeaderRight = styled.div`
    display: table-cell;
    width: 10000px;
    textarea{
        width:100%;
        height:70px;
        padding-left:8px;
        margin-bottom:0px;
        background:#F1F3F4;
        border:1px solid #CCC;
        // resize:none;
        &::placeholder{
            color:#999;
        }
    }
    input{
        background:#F1F3F4;
        border:1px solid #CCC;
        margin-right:10px;
        margin-top:10px;
        padding-left:8px;
        height:30px;
        &::placeholder{
            color:#999;
        }
    }
    &.phone{
        input{
            width:100%;
        }
    }
`;
export const Button = styled.button`
    height:30px;
    padding:0 10px;
    color: #ffffff;
    border:none;
    background-color: #DE5E60;
    border-color: #d43f3a;
    margin-top:10px;
    margin-right:10px;
    cursor:pointer;
    &:hover{
        background-color: #c9302c;
        border-color: #ac2925;
    }
`;
export const CommentBody = styled.div`
    padding-bottom:15px;
`;
export const CommentItem = styled.div`
    font-size:15px;
    overflow:hidden;
    position:relative;
    margin-bottom:15px;
    color:#555;
`;
export const CommentItemLeft = styled.div`
    float:left;
    display: table-cell;
    padding-right:10px;
`;
export const CommentItemRight = styled.div`
    display: table-cell;
    width: 10000px;
`;
export const CommentItemHeader = styled.div`
    overflow:hidden;
    margin-bottom:5px;
`;
export const CommentName = styled.div`
    // font-size:16px;
    float:left;
    color:#333;
    i{
        color:#999;
        font-size:15px;
    }
`;
export const CommentTime = styled.div`
    float:right;
    color:#999;
`;
export const CommentContent = styled.div`
    margin-bottom:5px;
`;
export const CommentReply = styled.div`
    float:left;
    margin-right:10px;
    cursor:pointer;
    color:#DE5E60;
`;
export const CommentDel = styled.div`
    float:left;
    cursor:pointer;
    color:#DE5E60;
`;