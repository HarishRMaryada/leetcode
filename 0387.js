/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj = {}
    for (let index = 0; index < s.length; index++) {
        const element = s[index]
        if(!obj[element]){
            obj[element]={
                count:1,
                index:index
            }
        }else{
            obj[element].count+=1;
        }
    }
    for (const property in obj) {
     if(obj[property].count==1) return obj[property].index
    }
    return -1
};
