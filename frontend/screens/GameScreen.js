import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, PanResponder, Animated } from "react-native";

const JengaBlock = ({ block }) => {
    const isEven = block % 2 === 0;
    return (
        <View style={styles.row}>
            <TouchableOpacity style={isEven ? styles.blockEven : styles.blockOdd}>
            </TouchableOpacity>
            {isEven && (
                <>
                    <TouchableOpacity style={styles.blockEven}>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.blockEven}>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
}

const Prawo = ({ onPress }) => <TouchableOpacity style={styles.prawo} onPress={onPress}><Text style={styles.nawigacja}>{'>'}</Text></TouchableOpacity>

const Lewo = ({ onPress }) => <TouchableOpacity style={styles.lewo} onPress={onPress}><Text style={styles.nawigacja}>{'<'}</Text></TouchableOpacity>

const Cyfra = ({ number }) => <Text style={styles.cyfra}>{number}</Text>

const GameScreen = ({ navigation }) => {
    const [currNumber, setCurrNumber] = useState(1)
    const handleLewoPress = () => {
        setCurrNumber(prev => {
            if (prev > 1 && prev <= 4) {
                return prev - 1
            } else {
                return 4
            }
        })
    };

    const handlePrawoPress = () => {
        setCurrNumber(prev => {
            if (prev >= 1 && prev < 4) {
                return prev + 1
            } else {
                return 1;
            }
        });
    };
    return (
        <View style={styles.container}>
            <View style={styles.navigationRow}>
                <Lewo onPress={handleLewoPress}/>
                <Cyfra number={currNumber} />
                <Prawo onPress={handlePrawoPress}/>
            </View>
            <JengaBlock block={1} />
            <JengaBlock block={2} />
            <JengaBlock block={3} />
            <JengaBlock block={4} />
            <JengaBlock block={5} />
            <JengaBlock block={6} />
            <JengaBlock block={7} />
            <JengaBlock block={8} />
            <JengaBlock block={9} />
            <JengaBlock block={10} />
            <JengaBlock block={11} />
            <JengaBlock block={12} />
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
    blockOdd: {
        width: 195, 
        height: 35,
        backgroundColor: 'rgb(255,205,129)',
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