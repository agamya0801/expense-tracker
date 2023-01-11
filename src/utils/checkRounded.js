export function checkRounded(amount){
    return parseFloat(amount) >= 10000000 ? true : false || parseFloat(amount) <= -10000000 ? true : false;
}