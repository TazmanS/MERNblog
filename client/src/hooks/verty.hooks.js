export const verty = (min, max = 10000, ...string) => {
    let arr = [...string]
    for(const str of arr){
        if (str.trim().length <= max && str.trim().length >= min){
            return true
        }
        else{
            return false
        }
    }
    return true
}


