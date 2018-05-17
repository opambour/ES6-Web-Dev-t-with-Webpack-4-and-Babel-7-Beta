export const addition = (num_1, num_2) => {
    const validateType = typeof num_1 === 'number' || typeof num_2 === 'number';
    if (validateType) { // true
        return num_1 + num_2;
    } else {
        console.error('addition() requires number parameters');
    }
};