export function truncateAmount(amount){
    if(amount <= 10000000){
        return amount.toFixed(2);
    }else{
        return (amount/10000000).toFixed(2);
    }
}