export const formatNumberForUSCurrency = (number) => {
    if(isNaN(number)){
        return '';
    }
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        trailingZeroDisplay: 'stripIfInteger'
    }).format(number);
}