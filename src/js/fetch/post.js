import 'whatwg-fetch';
import 'es6-promise';

function obj2params(obj){
    let result = '';
    for(let item in obj){
        result += '&' + item + '=' + encodeURIComponent(obj[item])
    }
    if(result){
        result = result.slice(1);
    }
    return result;
}

export function post(url,paramsObj){
    let result = fetch(url,{
        method: 'POST',
        headers : {
            'Accept' : 'application/json,text/plain,*/*',
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body : obj2params(paramsObj)
    }).then(response => {
        if(response.ok) {
            alert('操作成功！');
        } else {
            alert('操作失败！');
        }
    }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        });
    return result;
}