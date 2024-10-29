import React, { useState } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { generateBlocks, isEven, handleLewoPress, handlePrawoPress } from "./GameScreenFunctions";
import styles from "./GameScreenStyles";

const Prawo = ({ onPress }) => <TouchableOpacity style={styles.prawo} onPress={onPress}><Text style={styles.nawigacja}>{'>'}</Text></TouchableOpacity>

const Lewo = ({ onPress }) => <TouchableOpacity style={styles.lewo} onPress={onPress}><Text style={styles.nawigacja}>{'<'}</Text></TouchableOpacity>

const Cyfra = ({ number }) => <Text style={styles.cyfra}>{number}</Text>

const GameScreen = ({ navigation }) => {
    const [ currNumber, setCurrNumber ] = useState(1)
    const [ removedBlocks, setRemovedBlocks ] = useState([]);
    const [ newBlocks, setNewBlocks ] = useState([]);
    const [ clickableBlocks, setClickableBlocks ] = useState([]);
    const [ blockNum, setBlockNum ] = useState(1)

    const isRemoved = (block) => {
        return removedBlocks.some(elem => elem === block)
    }

    const getBlockStyle = (block) => {
        const relatedBlocks = [1, 3, 5, 7, 9, 11, 13];
        const relatedBlocks2 = [15, 17, 19, 21, 23, 25];
        const blocks300 = [302, 304, 306, 308, 310, 312, 314, 316, 318, 320, 322, 324, 326];
        const blocks200 = [202, 204, 206, 208, 210, 212];
        const blocks100 = [102, 104, 106, 108, 110, 112];
        const blocks200_2 = [214, 216, 218, 220, 222, 224, 226];
        const blocks100_2 = [114, 116, 118, 120, 122, 124, 126];

        if (isRemoved(block)) {
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
            } else {
                return styles.blockRemovedSpecial;
            }
        }
    };
    const JengaBlock = ({ block, onRemove, newBlocks, isNew, isClickable, onPlace }) => {
        const blockStyle = isNew
            ? (block % 2 !== 0 ? styles.placeBlock : styles.placeBlockEven)
            : (block % 2 !== 0 ? styles.block : styles.blockEven);
        return (
            <View style={styles.row}>
                {isEven(block) ? (
                    <>
                        <TouchableOpacity
                            style={[blockStyle, isRemoved(block+100) && getBlockStyle(block+100)]}
                            onPress={() => {
                                if (isClickable) {
                                    onPlace(block+100);
                                } else {
                                    onRemove(block+100);
                                    newBlocks(block+100);
                                }
                            }}
                            disabled={isRemoved(block)}
                        >
                            <Text>{block+100}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[blockStyle, isRemoved(block+200) && getBlockStyle(block+200)]}
                            onPress={() => {
                                if (isClickable) {
                                    onPlace(block+200);
                                } else {
                                    onRemove(block+200);
                                    newBlocks(block+200);
                                }
                            }}
                            disabled={isRemoved(block)}
                        >
                            <Text>{block+200}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[blockStyle, isRemoved(block+300) && getBlockStyle(block+300)]}
                            onPress={() => {
                                if (isClickable) {
                                    onPlace(block+300);
                                } else {
                                    onRemove(block+300);
                                    newBlocks(block+300);
                                }
                            }}
                            disabled={isRemoved(block)}
                        >
                            <Text>{block+300}</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <TouchableOpacity
                        style={[blockStyle, isRemoved(block) && getBlockStyle(block)]}
                        onPress={() => {
                                if (isClickable) {
                                    onPlace(block);
                                } else {
                                    onRemove(block);
                                    newBlocks(block);
                                }
                            }}
                        disabled={isRemoved(block)}
                    >
                        <Text>{block}</Text>
                    </TouchableOpacity>
                )}
            </View>
        )
    }

    const handleRemoveBlock = (block) => {
        const relatedBlocks = [1, 3, 5, 7, 9, 11, 13];
        const relatedBlocks2 = [15, 17, 19, 21, 23, 25];
        const blocks200_2 = [214, 216, 218, 220, 222, 224, 226];
        const blocks300 = [314, 316, 318, 320, 322, 324, 326];
        const block300_2 = [302, 304, 306, 308, 310, 312];
        const blocks100_2 = [114, 116, 118, 120, 122, 124, 126];

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
        } else {
            setRemovedBlocks(prev => [...prev, block]);
        }
    };

    const blocks = generateBlocks(currNumber);

    const handleNewBlocks = (block) => {
        console.log(block)
        setNewBlocks(prev => [blockNum+1001, ...prev])
        setClickableBlocks([block+1000])
        setBlockNum(prev => prev + 1)
    }
    const handlePlaceBlock = (block) => {
        setNewBlocks(prev => prev.filter(item => item !== block))
        setClickableBlocks([])
    }
    return (
        <View style={styles.container}>
            <View style={styles.navigationRow}>
                {currNumber === 1 ? (
                    <Prawo onPress={() => handlePrawoPress(setCurrNumber)} />
                ) : (
                    <Lewo onPress={() => handleLewoPress(setCurrNumber)} />
                )}
                <Cyfra number={currNumber} />
            </View>
            {newBlocks.map((block ,idx) => (
                <JengaBlock
                    key={`new-${idx}`}
                    block={block}
                    onRemove={handleRemoveBlock}
                    newBlocks={handleNewBlocks}
                    isNew={true}
                    isClickable={clickableBlocks.includes(block)}
                    onPlace={handlePlaceBlock}
                />
            ))}
            {blocks.map((block, idx) => (
                <JengaBlock
                    key={idx}
                    block={block}
                    onRemove={handleRemoveBlock}
                    newBlocks={handleNewBlocks}
                    isNew={false}
                    isClickable={false}
                />
            ))}
        </View>
    );
};

export default GameScreen;

