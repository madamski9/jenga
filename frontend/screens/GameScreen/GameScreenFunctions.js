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
    } else if(currNumber === 2){
        for (let i = 0; i <= 12; i++) {
            blocks.push(base + i + 2); 
        }
    } 
    return blocks;
};

export const handleRemoveBlock = (block, setRemovedBlocks) => {
    const relatedBlocks = [1, 3, 5, 7, 9, 11, 13];
    const relatedBlocks2 = [15, 17, 19, 21, 23, 25];
    const blocks200_2 = [214, 216, 218, 220, 222, 224, 226];
    const blocks300 = [314, 316, 318, 320, 322, 324, 326];
    const block300_2 = [302, 304, 306, 308, 310, 312];
    const blocks100_2 = [114, 116, 118, 120, 122, 124, 126];
    const blocks1000 = [1302];

    if (relatedBlocks.includes(block)) {
        setRemovedBlocks(prev => [...prev, block, block + 113]);
    } else if (relatedBlocks2.includes(block)) {
        setRemovedBlocks(prev => [...prev, block, block + 287]);
    } else if (blocks200_2.includes(block) || blocks300.includes(block)) {
        setRemovedBlocks(prev => [...prev, block]);
    } else if (block300_2.includes(block)) {
        setRemovedBlocks(prev => [...prev, block, block - 287]);
    } else if (blocks100_2.includes(block)) {
        setRemovedBlocks(prev => [...prev, block, block - 113]);
    } else if (blocks1000.includes(block)) {
        console.log(block, "is 1000")
        setRemovedBlocks(prev => [...prev, block]);
    } else {
        setRemovedBlocks(prev => [...prev, block]);
    }
};