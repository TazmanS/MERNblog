export const verty = (min, max = 10000, ...string) => {
    let arr = [...string]
    for(const str of arr){
        if (str.trim().length > 0 && str.length <= max && str.length >= min){
            
        }
        else{
            return false
        }
    }
    return true
}


