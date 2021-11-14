const generateChangLang = (val) => {
    return{
        type: 'CHANGLANG',
        payload: val
    }
}   

const generateChangUser = (val) => {
   return{
    type: 'CHANGUSER',
    payload: val
   }
}