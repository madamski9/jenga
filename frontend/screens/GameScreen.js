import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity} from "react-native";

const JengaBlock = ({ block, removedBlocks, onRemove }) => {
    const isEven = (num) => num % 2 === 0;
    const isRemoved = (block) => {
        return removedBlocks.some(elem => elem === block)
    }
    return (
        <View style={styles.row}>
            {isEven(block) ? (
                <>
                    <TouchableOpacity
                    style={[styles.blockEven, isRemoved(block) && styles.blockRemoved]}
                    onPress={() => onRemove(block)}
                    disabled={isRemoved(block)}
                    >
                        <Text style={styles.blockText}>{block}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={[styles.blockEven, isRemoved(block) && styles.blockRemoved]}
                    onPress={() => onRemove(block)}
                    disabled={isRemoved(block)}
                    >
                        <Text style={styles.blockText}>{block}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={[styles.blockEven, isRemoved(block) && styles.blockRemoved]}
                    onPress={() => onRemove(block)}
                    disabled={isRemoved(block)}
                    >
                        <Text style={styles.blockText}>{block}</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <TouchableOpacity
                style={[styles.block, isRemoved(block) && styles.blockRemoved]}
                onPress={() => onRemove(block)}
                disabled={isRemoved(block)}
                >
                    <Text style={styles.blockText}>{block}</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}

const Prawo = ({ onPress }) => <TouchableOpacity style={styles.prawo} onPress={onPress}><Text style={styles.nawigacja}>{'>'}</Text></TouchableOpacity>

const Lewo = ({ onPress }) => <TouchableOpacity style={styles.lewo} onPress={onPress}><Text style={styles.nawigacja}>{'<'}</Text></TouchableOpacity>

const Cyfra = ({ number }) => <Text style={styles.cyfra}>{number}</Text>

const GameScreen = ({ navigation }) => {
    const [currNumber, setCurrNumber] = useState(1)
    const [removedBlocks, setRemovedBlocks] = useState([]);

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
        for (let i = 0; i < 12; i++) {
            blocks.push(base + i + 1);
        }
        return blocks;
    };

    const handleRemoveBlock = (block) => {
        setRemovedBlocks(prev => [...prev, block]);
    };

    const blocks = generateBlocks(currNumber);
    
    return (
        <View style={styles.container}>
            <View style={styles.navigationRow}>
                <Lewo onPress={handleLewoPress}/>
                <Cyfra number={currNumber} />
                <Prawo onPress={handlePrawoPress}/>
            </View>
            {blocks.map((block, idx) => {
                return (
                    <JengaBlock
                        key={idx}
                        block={block}
                        removedBlocks={removedBlocks}
                        onRemove={handleRemoveBlock}
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
        borderColor: 'white',
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