import React, { useState } from "react"
import { View, Text, TouchableOpacity} from "react-native"
import { generateBlocks, isEven, handleLewoPress, handlePrawoPress, handleRemoveBlock } from "./GameScreenFunctions"
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
    const [ newBlocks, setNewBlocks ] = useState([])
    const [ blockNum, setBlockNum ] = useState(1)
    const [ clickableBlocks, setClickableBlocks ] = useState([])
    const [ onlyNewBlocksClickable, setOnlyNewBlocksClickable ] = useState(false)
    const [ clickedBlocks, setClickedBlocks ] = useState([])

    const isRemoved = (block) => {
        return removedBlocks.some(elem => elem === block)
    }

    const JengaBlock = ({ block, isNew, isClickable, onBlockClick }) => {
        const blockStyle = isNew
            ? (block % 2 !== 0 ? styles.placeBlock : styles.placeBlockEven)
            : (block % 2 !== 0 ? styles.block : styles.blockEven)
        return (
            <View style={styles.row}>
                {isEven(block) ? (
                    <>
                        <TouchableOpacity
                            style={[blockStyle, isRemoved(block+100) && getBlockStyle(block+100, isRemoved)]}
                            onPress={() => {
                                if (isClickable) {
                                    onBlockClick(block+100)
                                }
                            }}
                            disabled={isRemoved(block+100)}
                        >
                            <Text>{block+100}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[blockStyle, isRemoved(block+200) && getBlockStyle(block+200, isRemoved)]}
                            onPress={() => {
                                if (isClickable) {
                                    onBlockClick(block+200)
                                }
                            }}
                            disabled={isRemoved(block+200)}
                        >
                            <Text>{block+200}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[blockStyle, isRemoved(block+300) && getBlockStyle(block+300, isRemoved)]}
                            onPress={() => {
                                if (isClickable) {
                                    onBlockClick(block+300)
                                }
                            }}
                            disabled={isRemoved(block+300)}
                        >
                            <Text>{block+300}</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <TouchableOpacity
                        style={[blockStyle, isRemoved(block) && getBlockStyle(block, isRemoved)]}
                        onPress={() => {
                            if (isClickable) {
                                onBlockClick(block)
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

    const handleNewBlocks = (block) => {
        console.log(block)
        setNewBlocks(prev => [blockNum + 1001, ...prev])
        setClickableBlocks([blockNum + 1001])
        setBlockNum(prev => prev + 1)
        setOnlyNewBlocksClickable(true) // mozna kliknac tylko w nowe bloki
    }

    const handlePlaceBlock = (block) => {
        console.log(block)
        setNewBlocks(prev => prev.filter(item => item !== block))
        setClickableBlocks([])
        setOnlyNewBlocksClickable(false) // resetowanie
    }

    const handleBlockClick = (block) => {
        console.log(block)
        if (onlyNewBlocksClickable && block < 1000) {
            return
        }
        if (block >= 1000) {
            handlePlaceBlock(block)
        } else {
            handleRemoveBlock(block, setRemovedBlocks)
            handleNewBlocks(block)
        }
        setClickedBlocks(prev => [...prev, block])
    }

    const blocks = generateBlocks(currNumber)
    console.log(newBlocks)
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
            {currNumber === 1 ? (newBlocks.map((block, idx) => (
                <JengaBlock
                    key={`new-${idx}`}
                    block={block}
                    isNew={true}
                    isClickable={true}
                    onBlockClick={handleBlockClick}
                />
            ))) : (newBlocks.map((block, idx) => (
                <JengaBlock
                    key={`new-${idx}`}
                    block={block + 101}
                    isNew={true}
                    isClickable={true}
                    onBlockClick={handleBlockClick}
                />)))}
            {blocks.map((block, idx) => (
                <JengaBlock
                    key={idx}
                    block={block}
                    isNew={false}
                    isClickable={!onlyNewBlocksClickable}
                    onBlockClick={handleBlockClick}
                />
            ))}
        </View>
    )
}

export default GameScreen

