import styles from "./GameScreenStyles";

export const getBlockStyle = (block, isRemoved) => {
    const relatedBlocks = [1, 3, 5, 7, 9, 11, 13];
    const relatedBlocks2 = [15, 17, 19, 21, 23, 25];
    const blocks300 = [302, 304, 306, 308, 310, 312, 314, 316, 318, 320, 322, 324, 326];
    const blocks200 = [202, 204, 206, 208, 210, 212];
    const blocks100 = [102, 104, 106, 108, 110, 112];
    const blocks200_2 = [214, 216, 218, 220, 222, 224, 226];
    const blocks100_2 = [114, 116, 118, 120, 122, 124, 126];
    //const regex = /^(11|12|13)(0|1|2)[02468]$/
    const blocks1000 = [1102, 1202, 1302]
    const blocks1000_2 = [1103]
 
    if (isRemoved(block)) {
        console.log(block, "is removed")
        if (relatedBlocks.includes(block)) {
            if (isRemoved(block + 113) && !isRemoved(block + 213) && !isRemoved(block + 313)) {
                return styles.blockRemovedSpecial;
            } 
            else if (isRemoved(block + 113) && !isRemoved(block + 213) && isRemoved(block + 313)) {
                return styles.blockRemovedSpecial
            }
            else if (isRemoved(block + 113) && isRemoved(block + 213) && !isRemoved(block + 313)) {
                return styles.blockRemovedMoreSpecial;
            } 
            else if (isRemoved(block + 113) && isRemoved(block + 213) && isRemoved(block + 313)) {
                return styles.blockRemoved;
            }
        } else if (relatedBlocks2.includes(block)) {
            if (isRemoved(block + 287) && !isRemoved(block + 187) && !isRemoved(block + 87)) {
                return styles.blockRemovedSpecial;
            } 
            else if (isRemoved(block + 287) && !isRemoved(block + 187) && isRemoved(block + 87)) {
                return styles.blockRemovedSpecial
            }
            else if (isRemoved(block + 287) && isRemoved(block + 187) && !isRemoved(block + 87)) {
                return styles.blockRemovedMoreSpecial;
            } 
            else if (isRemoved(block + 287) && isRemoved(block + 187) && isRemoved(block + 87)) {
                return styles.blockRemoved;
            }
        } else if (blocks300.includes(block) || blocks200.includes(block) || blocks100.includes(block)) {
            return styles.blockRemoved;
        } else if (blocks200_2.includes(block)) {
            return styles.blockRemoved;
        } else if (blocks100_2.includes(block)) {
            return styles.blockRemoved;
        } else if (relatedBlocks.includes(block - 113)) {
            return styles.blockRemovedSpecial;
        } else if (blocks1000.includes(block)) {
            return styles.blockEven; // Styl dla block
        } else if (blocks1000_2.includes(block+199)) {
            if (isRemoved(block - 199)) {
                console.log("tak")
            }
        } else {
            return styles.blockRemovedSpecial;
        } 
    }
};