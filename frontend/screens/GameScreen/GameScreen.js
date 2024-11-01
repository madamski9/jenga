import React, { useState } from "react"
import { View, Text, TouchableOpacity} from "react-native"
import { generateBlocks, isEven, handleRemoveBlock } from "./GameScreenFunctions"
import styles from "./GameScreenStyles"
import { getBlockStyle } from "./getBlockStyle"

const Prawo = ({ onPress }) => 
    <TouchableOpacity style={styles.prawo} onPress={onPress}>
        <Text style={styles.nawigacja}>{'>'}</Text>
    </TouchableOpacity>


const Lewo = ({ onPress }) => 
    <TouchableOpacity style={styles.lewo} onPress={onPress}>
        <Text style={styles.nawigacja}>{'<'}</Text>
    </TouchableOpacity>


const Cyfra = ({ number }) => <Text style={styles.cyfra}>{number}</Text>

const GameScreen = () => {
    const [ currNumber, setCurrNumber ] = useState(1)
    const [ removedBlocks, setRemovedBlocks ] = useState([])

    const isRemoved = (block) => {
        return removedBlocks.some(elem => elem === block)
    }

    const JengaBlock = ({ block, onBlockClick }) => {
        const blockStyle = (block % 2 !== 0 ? styles.block : styles.blockEven)
        return (
            <View style={styles.row}>
                {isEven(block) ? (
                    <>
                        <TouchableOpacity
                            style={[blockStyle, isRemoved(block+100) && getBlockStyle(block+100, isRemoved)]}
                            onPress={() => {
                                onBlockClick(block+100)
                            }}
                            disabled={isRemoved(block+100)}
                        >
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[blockStyle, isRemoved(block+200) && getBlockStyle(block+200, isRemoved)]}
                            onPress={() => {
                                onBlockClick(block+200)
                            }}
                            disabled={isRemoved(block+200)}
                        >
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[blockStyle, isRemoved(block+300) && getBlockStyle(block+300, isRemoved)]}
                            onPress={() => {
                                onBlockClick(block+300)
                            }}
                            disabled={isRemoved(block+300)}
                        >
                        </TouchableOpacity>
                    </>
                ) : (
                    <TouchableOpacity
                        style={[blockStyle, isRemoved(block) && getBlockStyle(block, isRemoved)]}
                        onPress={() => {
                                onBlockClick(block)
                            }}
                        disabled={isRemoved(block)}
                    >
                    </TouchableOpacity>
                )}
            </View>
        )
    }

    const handleBlockClick = (block) => {
        console.log(block)
        handleRemoveBlock(block, setRemovedBlocks)
    }

    const blocks = generateBlocks(currNumber)

    return (
        <View style={styles.container}>
            <View style={styles.navigationRow}>
                {currNumber === 1 ? (
                    <Prawo onPress={() => setCurrNumber(currNumber + 1)} />
                ) : (
                    <Lewo onPress={() => setCurrNumber(currNumber - 1)} />
                )}
                <Cyfra number={currNumber} />
            </View>
            {blocks.map((block, idx) => (
                <JengaBlock
                    key={idx}
                    block={block}
                    onBlockClick={handleBlockClick}
                />
            ))}
        </View>
    )
}

export default GameScreen

