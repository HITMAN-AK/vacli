import {StyleSheet,Text,View,TextInput,Modal,TouchableOpacity,TouchableWithoutFeedback,Keyboard,} from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
const Att = () => {
    const [vis, setvis] = useState(false);
    const [nam,setnam] = useState("");
    const [rol,setrol] = useState("");
    const [sal,setsal] = useState("");
    const [phone,setphone] = useState("");
    const [mail,setmail] = useState("");
    const addTog = () => {
        setvis((p) => !p);
    };
    const onclick = () => {
        // on click for on Attendance action
    };
    return (
        <View>
            <Text style={styles.filTit}>Fillters</Text>
            <View style={styles.filter}>
                <View style={styles.filFel}>
                    <Text>project</Text>
                    <Dropdown
                        data={[
                            { label: "Item 1", value: "1" },
                            { label: "Item 2", value: "2" },
                            { label: "Item 3", value: "3" },
                            { label: "Item 4", value: "4" },
                        ]}
                        labelField="label"
                        valueField="value"
                        search
                        searchPlaceholder="Search..."
                        onChange={() => {}}
                        style={styles.drop}
                    />
                </View>
                <View style={styles.filFel}>
                    <Text>project</Text>
                    <Dropdown
                        data={[
                            { label: "Item 1", value: "1" },
                            { label: "Item 2", value: "2" },
                            { label: "Item 3", value: "3" },
                            { label: "Item 4", value: "4" },
                        ]}
                        labelField="label"
                        valueField="value"
                        search
                        searchPlaceholder="Search..."
                        onChange={() => {}}
                        style={styles.drop}
                    />
                </View>
                <View style={styles.filFel}>
                    <Text>project</Text>
                    <Dropdown
                        data={[
                            { label: "Item 1", value: "1" },
                            { label: "Item 2", value: "2" },
                            { label: "Item 3", value: "3" },
                            { label: "Item 4", value: "4" },
                        ]}
                        labelField="label"
                        valueField="value"
                        search
                        searchPlaceholder="Search..."
                        onChange={() => {}}
                        style={styles.drop}
                    />
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>download</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View >
                <TouchableOpacity style={styles.btn} onPress={addTog}>
                    <Text style={styles.btntxt}>+</Text>
                </TouchableOpacity>
            </View>
            <Modal visible={vis} onRequestClose={addTog} animationType="fade">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={[{ flex: 1 },styles.fildAdd]}>
                        <View>
                            <TouchableOpacity onPress={addTog} style={styles.btn}>
                                <Text style={styles.btntxt}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <Text>Name</Text>
                        <TextInput value={nam} onChangeText={setnam} style={styles.field} />
                        <Text>roll</Text>
                        <Dropdown
                            data={[{ cat: "labour" },{cat:"engineer"},{cat:"mason"},{cat:"electrican"},{cat:"plumber"}]}
                            labelField="cat"
                            valueField="cat"
                            onChange={(v) => {setrol(v.cat)}}
                            style={styles.field}
                        />
                        <Text>salary</Text>
                        <TextInput value={sal} onChangeText={setsal} style={styles.field}/>
                        <Text>phone</Text>
                        <TextInput value={phone} onChangeText={setphone} style={styles.field}/>
                        <Text>mail</Text>
                        <TextInput value={mail} onChangeText={setmail} style={styles.field}/>
                        <View>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btntxt}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
};

export default Att;

const styles = StyleSheet.create({
    filter: {
        borderWidth: 2,
        borderColor: "black",
        justifyContent: "space-around",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
    },
    filTit: {
        fontSize: 30,
    },
    drop: {
        borderWidth: 3,
        borderColor: "black",
        margin: 4,
    },
    filFel: {
        width: "30%",
        borderColor: "black",
        borderWidth: 2,
        margin: 4,
        padding: 2,
    },btntxt:{
        fontSize:20,
    },field:{
        borderWidth:2,
        borderColor:"black",
    },fildAdd:{
        padding:5,

    },btn:{
        borderWidth:1.5,
        borderColor:"black",
        borderRadius:50,
        width:30,
        justifyContent:"center",
        alignItems:"center"
    }
});
