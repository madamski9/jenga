import React, { useState } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { generateBlocks, isEven, handleLewoPress, handlePrawoPress, handleRemoveBlock } from "./GameScreenFunctions";
import styles from "./GameScreenStyles";
import { getBlockStyle } from "./getBlockStyle";

const Prawo = ({ onPress }) => 
    <TouchableOpacity style={styles.prawo} onPress={onPress}>
        <Text style={styles.nawigacja}>{'>'}</Text>
    </TouchableOpacity>


const Lewo = ({ onPress }) => 
    <TouchableOpacity style={styles.lewo} onPress={onPress}>
        <Text style={styles.nawigacja}>{'<'}</Text>
    </TouchableOpacity>


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

    const JengaBlock = ({ block, onRemove, newBlocks, isNew, isClickable, onPlaceBlock }) => {
        const blockStyle = isNew
            ? (block % 2 !== 0 ? styles.placeBlock : styles.placeBlockEven)
            : (block % 2 !== 0 ? styles.block : styles.blockEven);
        return (
            <View style={styles.row}>
                {isEven(block) ? (
                    <>
                        <TouchableOpacity
                            style={[blockStyle, isRemoved(block+100) && getBlockStyle(block+100, isRemoved)]}
                            onPress={() => {
                                if (isClickable) {
                                    onPlaceBlock(block+100);
                                } else {
                                    onRemove(block+100, setRemovedBlocks);
                                    newBlocks(block+100);
                                }
                            }}
                            disabled={isRemoved(block)}
                        >
                            <Text>{block+100}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[blockStyle, isRemoved(block+200) && getBlockStyle(block+200, isRemoved)]}
                            onPress={() => {
                                if (isClickable) {
                                    onPlaceBlock(block+200);
                                } else {
                                    onRemove(block+200, setRemovedBlocks);
                                    newBlocks(block+200);
                                }
                            }}
                            disabled={isRemoved(block)}
                        >
                            <Text>{block+200}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[blockStyle, isRemoved(block+300) && getBlockStyle(block+300, isRemoved)]}
                            onPress={() => {
                                if (isClickable) {
                                    onPlaceBlock(block+300);
                                } else {
                                    onRemove(block+300, setRemovedBlocks);
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
                        style={[blockStyle, isRemoved(block) && getBlockStyle(block, isRemoved)]}
                        onPress={() => {
                                if (isClickable) {
                                    onPlaceBlock(block);
                                } else {
                                    onRemove(block, setRemovedBlocks);
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
                    onPlaceBlock={handlePlaceBlock}
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

