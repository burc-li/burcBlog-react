import styled from 'styled-components';

export const RightSideBarWrapper = styled.div`
    position:absolute;
    border-left:1px solid rgba(0,0,0,.15);
    background:#fff;
    color:#000;
    width:200px;
    top:0;
    bottom:0;
    right:0;
    height:100%;
    overflow-y:auto;
    float:right;
    line-height:1.5em;
`;
export const ArticleBox = styled.div`
    border-bottom:1px solid rgba(0,0,0,.1);
    background:#fff;
    padding:20px;
    &.tocPanel{
        padding:14px 16px 10px 5px;
    }
`;
export const TagBox = styled.div`
    border-bottom:1px solid rgba(0,0,0,.1);
    background:#fff;
    padding:20px;
`;
export const BlogBox = styled.div`
    border-bottom:1px solid rgba(0,0,0,.1);
    background:#fff;
    padding:20px;
`;
export const LinkBox = styled.div`
    background:#fff;
    padding:20px;
`;
export const ArticleInfo = styled.div`
    color:#58666E;
    overflow:hidden;
    // border:1px solid #f00;
    &.tocList{
        max-height: calc(100vh - 115px);
        overflow: auto;
        padding: 0 2px 0 1px;
        scrollbar-width: thin;
        scrollbar-color: rgba(148, 163, 184, 0.5) rgba(241, 245, 249, 0.9);
    }
    &.tocList::-webkit-scrollbar{
        width: 6px;
        height: 6px;
    }
    &.tocList::-webkit-scrollbar-track{
        background: rgba(241, 245, 249, 0.9);
        border-radius: 6px;
    }
    &.tocList::-webkit-scrollbar-thumb{
        background: rgba(148, 163, 184, 0.4);
        border-radius: 6px;
    }
    .tocItem{
        margin: 0 0 3px 0;
    }
    .tocLink{
        color:#58666E;
        cursor:pointer;
        white-space: nowrap;
        display:block;
        width:max-content;
        min-width:100%;
        font-size:13px;
        line-height:1.45;
        padding:5px 7px;
        border-radius:6px;
        border-left:2px solid transparent;
        transition:all .2s;
    }
    .tocLink:hover{
        color:#DE5E60;
        // background:#f6f8fb;
    }
    .tocLevel2 .tocLink{
        padding-left:18px;
    }
    .tocLevel3 .tocLink{
        padding-left:36px;
    }
    .tocLevel4 .tocLink{
        padding-left:54px;
    }
    .tocLevel5 .tocLink{
        padding-left:72px;
    }
    .tocLevel6 .tocLink{
        padding-left:90px;
    }
`;
export const ArticleItem = styled.div`
    // border:1px solid rgba(0,0,0,.15); 
    margin-bottom:8px;
    cursor:pointer;
`;
export const ArticleTitle = styled.div`
    color:#DE5E60;
    font-size:14px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    cursor: pointer;
    margin-bottom:2px;
`;
export const ArticleAuthor = styled.div`
    font-size:14px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    span{
        padding:0 10px 0 0;
    }
    cursor: default;
`;
export const TagInfo = styled.div`
    color:#DE5E60;
    overflow:hidden;
`;
export const TagItem = styled.span`
    color:#58666E;
    font-size:14px;
    border:1px solid rgba(0,0,0,.15);
    float:left;
    padding:0px 5px;
    margin:5px 3px;
    background:#fff;
    border-radius:2px;
    cursor:pointer;
    &:hover{
        border:1px solid #DE5E60;
        color:#DE5E60;
    }
`;
export const BlogInfo = styled.div`
    color:#58666E;
    font-size:14px;
    span{
        color:#DE5E60;
        font-size:16px;
        padding:0 3px;
    }
`;
export const Title = styled.div`
    font-size:16px;
    color:#58666E;
    margin-bottom:10px;
    &.tocTitle{
        font-size:15px;
        color:#475569;
        font-weight:600;
        margin-bottom:6px;
        padding:0 6px 6px 6px;
        border-bottom:1px solid #eef2f6;
    }
`;
export const LinkItem = styled.a.attrs({
    target:'_blank'
})`
    font-size:14px;
    color:#DE5E60;
    display:block;
    margin-bottom:5px;
`;
export const BackTop = styled.div`
    position:fixed;
    right:30px;
    bottom:30px;
    width:50px;
    height:50px;
    background:#777;
    border-radius:5px;
    cursor:pointer;
`;