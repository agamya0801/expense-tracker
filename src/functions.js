// This file contains all the functions that are used in multiple components to reduce redundant code.

export function refactorText(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function assignSign(amount){
    return amount >= 0 ? '' : '-';
}

export function assignStripColor(amount){
    return amount >= 0 ? "positive" : "negative";
}

export function concatenateText(text){
    return text.length > 16 ? (text.substring(0, 16)).concat('...') : text;
}

export function checkRounded(amount){
    return parseFloat(amount) >= 10000000 ? true : false || parseFloat(amount) >= -10000000 ? true : false;
}

export function truncateAmount(amount){
    return (amount/10000000).toFixed(2);
}

export function concatPositiveAmountWithK(props){
    return Boolean(props.isRounded) ? props.netIncome+'K' : props.netIncome;
}

export function concatNegativeAmountWithK(props){
    return Boolean(props.isRounded) ? props.netExpense+'K' : props.netExpense;
}

export function concatBalanceAmountWithK(props){
    return Boolean(props.isRounded) ? props.netBalance+'K' : props.netBalance;
}