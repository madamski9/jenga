import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity} from "react-native";

const JengaBlock = ({ block, removedBlocks, onRemove, removedRelatedBlocks, setRemovedBlocks, eliminationBlocks, setEliminationBlocks}) => {
    const isEven = (num) => num % 2 === 0;
    const isRemoved = (block) => {
        return removedBlocks.some(elem => elem === block)
    }
    const getBlockStyle = (block) => {
        const relatedBlocks = [1, 3, 5, 7, 9, 11, 13];
        const relatedBlocks2 = [15, 17, 19, 21, 23, 25];
        const blocks300 = [302, 304, 306, 308, 310, 312, 314, 316, 318, 320, 322, 324, 326];
        const blocks200 = [202, 204, 206, 208, 210, 212];
        const blocks200_2 = [214, 216, 218, 220, 222, 224, 226];
        const blocks100 = [102, 104, 106, 108, 110, 112];
        const blocks100_2 = [114, 116, 118, 120, 122, 124, 126];

        if (isRemoved(block)) {
            if (relatedBlocks.includes(block)) {
                console.log(block, "usuniete");
                if (isRemoved(block + 113) && !isRemoved(block + 213) && !isRemoved(block + 313)) {
                    return styles.blockRemovedSpecial;
                } 
                else if (isRemoved(block + 113) && !isRemoved(block + 213) && isRemoved(block + 313)) {
                    eliminationBlocks.push(block + 213)
                    console.log(eliminationBlocks, "eliminacja");
                    return styles.blockRemovedSpecial
                }
                else if (isRemoved(block + 113) && isRemoved(block + 213) && !isRemoved(block + 313)) {
                    return styles.blockRemovedMoreSpecial;
                } 
                else if (isRemoved(block + 113) && isRemoved(block + 213) && isRemoved(block + 313)) {
                    return styles.blockRemoved;
                }
            } else if (relatedBlocks2.includes(block)) {
                console.log(block, "usuniete2");
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
                console.log(block, "usuniete");
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
        return isEven(block) ? styles.blockEven : styles.block;
    };
    return (
        <View style={styles.row}>
            {isEven(block) ? (
                <>
                    <TouchableOpacity
                    style={[styles.blockEven, isRemoved(block+100) && getBlockStyle(block+100)]}
                    onPress={() => onRemove(block+100)}
                    disabled={isRemoved(block)}
                    >
                    <Text>{block+100}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={[styles.blockEven, isRemoved(block+200) && getBlockStyle(block+200)]}
                    onPress={() => onRemove(block+200)}
                    disabled={isRemoved(block)}
                    >
                    <Text>{block+200}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={[styles.blockEven, isRemoved(block+300) && getBlockStyle(block+300)]}
                    onPress={() => onRemove(block+300)}
                    disabled={isRemoved(block)}
                    >
                    <Text>{block+300}</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <TouchableOpacity
                style={[styles.block, isRemoved(block) && getBlockStyle(block)]}
                onPress={() => onRemove(block)}
                disabled={isRemoved(block)}
                >
                <Text>{block}</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}

const Prawo = ({ onPress }) => <TouchableOpacity style={styles.prawo} onPress={onPress}><Text style={styles.nawigacja}>{'>'}</Text></TouchableOpacity>

const Lewo = ({ onPress }) => <TouchableOpacity style={styles.lewo} onPress={onPress}><Text style={styles.nawigacja}>{'<'}</Text></TouchableOpacity>

const Cyfra = ({ number }) => <Text style={styles.cyfra}>{number}</Text>

const GameScreen = ({ navigation }) => {
    const [ currNumber, setCurrNumber ] = useState(1)
    const [ removedBlocks, setRemovedBlocks ] = useState([]);
    const [ removedRelatedBlocks, setRemovedRelatedBlocks ] = useState([]);
    const [ eliminationBlocks, setEliminationBlocks ] = useState([]);

    const handleLewoPress = () => {
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

    const handlePrawoPress = () => {
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
    const generateBlocks = (currNumber) => {
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

    const handleRemoveBlock = (block) => {
        const relatedBlocks = [1, 3, 5, 7, 9, 11, 13];
        const relatedBlocks2 = [15, 17, 19, 21, 23, 25];
        const blocks200_2 = [214, 216, 218, 220, 222, 224, 226];
        const blocks300 = [314, 316, 318, 320, 322, 324, 326];
        const block300_2 = [302, 304, 306, 308, 310, 312];
        const blocks100_2 = [114, 116, 118, 120, 122, 124, 126];

        if (relatedBlocks.includes(block)) {
            setRemovedRelatedBlocks(prev => [...prev, block]);
            setRemovedBlocks(prev => [...prev, block, block + 113]);
        } else if (relatedBlocks2.includes(block)) {
            setRemovedRelatedBlocks(prev => [...prev, block]);
            setRemovedBlocks(prev => [...prev, block, block + 287]);
        } else if (blocks200_2.includes(block)) {
            setRemovedBlocks(prev => [...prev, block]);
            setRemovedRelatedBlocks(prev => prev.map(elem => elem));
        } else if (blocks300.includes(block)) {
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
    
    return (
        <View style={styles.container}>
            <View style={styles.navigationRow}>
            {currNumber === 1 ? ( <Prawo onPress={handlePrawoPress}/> ) : ( <Lewo onPress={handleLewoPress}/> )}
                <Cyfra number={currNumber} />
            </View>
            {blocks.map((block, idx) => {
                return (
                    <JengaBlock
                        key={idx}
                        block={block}
                        removedBlocks={removedBlocks}
                        onRemove={handleRemoveBlock}
                        removedRelatedBlocks={removedRelatedBlocks}
                        setRemovedBlocks={setRemovedBlocks}
                        eliminationBlocks={eliminationBlocks}
                        setEliminationBlocks={setEliminationBlocks}
                    />
                );
            })}
        </View>
    );
}

export default GameScreen;

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    blockRemoved: {
        backgroundColor: 'white',
        borderColor: "white"
    },
    blockRemovedSpecial: {
        width: 187,
        height: 35,
        backgroundColor: 'rgb(199,160,101)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 4,
    },
    blockRemovedMoreSpecial: {
        width: 183,
        height: 35,
        backgroundColor: 'rgb(148,119,75)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 4,
    },
    blockEven: {
        width: 65,
        height: 35,
        backgroundColor: 'rgb(255,205,129)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 4,
    },
    block: {
        width: 195,
        height: 35,
        backgroundColor: 'rgb(255,205,129)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 4,
    },
    nawigacja: {
        position: 'absolute',
        fontWeight: 'bold',
        fontSize: 50,
    },
    prawo: {
        position: 'absolute',
        top: 150,
        right: -130,
        fontWeight: 'bold',
    },
    lewo: {
        position: 'absolute',
        top: 150,
        left: -160,
        fontWeight: 'bold',
    },
    cyfra: {
        position: 'absolute',
        top: -95,
        left: -6,
        fontWeight: 'bold',
        fontSize: 30,
    }
}