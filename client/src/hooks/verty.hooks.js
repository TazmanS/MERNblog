export const verty = (...string) => {
    for(const str of string){
        if (str.trim().length > 0){
            return true
        }
        else{
            return false
        }
    }
}


