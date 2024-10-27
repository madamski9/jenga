export const isEven = (num) => num % 2 === 0;
export const handleLewoPress = (setCurrNumber) => {
    setCurrNumber(prev => {
        let newNumber;
        if (prev > 1 && prev <= 2) {
            newNumber = prev - 1
        } else {
            newNumber = 2
        }
        return newNumber
    })
};

export const handlePrawoPress = (setCurrNumber) => {
    setCurrNumber(prev => {
        let newNumber;
        if (prev >= 1 && prev < 2) {
            newNumber = prev + 1;
        } else {
            newNumber = 1;
        }
        return newNumber;
    });
};
export const generateBlocks = (currNumber) => {
    let blocks = [];
    let base = (currNumber - 1) * 12;
    if (currNumber === 1) {
        for (let i = 0; i <= 12; i++) {
            blocks.push(base + i + 1);
        }
    } else {
        for (let i = 0; i <= 12; i++) {
            blocks.push(base + i + 2);
        }
    }
    return blocks
};