export function checkSign(amount){
    return amount >= 0 ? '' : '-';
}

export function checkRounded(amount){
    return parseFloat(amount) >= 10000000 ? true : false || parseFloat(amount) <= -10000000 ? true : false;
}

export function truncateAmount(amount){
    if(amount <= 10000000){
        return amount.toFixed(2);
    }else{
        return (amount/10000000).toFixed(2);
    }
}