import * as actionTypes from './actionTypes';
import axios from 'axios';

// 防止移动端媒体查询导致重复挂载时，同一接口重复请求
let inflightGetLine = false;

const getLine = (result)=>{
    return {
        type:actionTypes.GET_LINE,
        lineList:result
    };
};

export const getLineAction = ()=>{
    return (dispatch)=>{       
        if(inflightGetLine){
            return;
        }
        inflightGetLine = true;

        axios.post('/api/blog/line', {
        // axios.post('https://www.easy-mock.com/mock/5d48fd5ffc529c75f94136fd/api/blog/line', {
          }).then((res)=>{
            // if(res.data.success){
                const result = res.data.data;
                const action = getLine(result);
                dispatch(action);
            // }else{
                // alert("获取文章目录失败")
            // }
        }).catch(()=>{
            console.log("获取文章目录error");
        }).finally(()=>{
            inflightGetLine = false;
        });
    }
}