import React from "react";
import { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView } from "react-native";
import List from "./src/components/List";
import LinearGradient from "react-native-linear-gradient";
import TaskIcon from 'react-native-vector-icons/FontAwesome5'
function App(){
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);
  const [flag, setFlag] = useState(-1);
 function handleInput(){
  if(flag===-1){
    if(text===""){
      Alert.alert("","Enter Your Task")
    }
    else{
      setTask([...task, text])
    }
    setText("")
   }
   else{
    if(text===""){
      Alert.alert("","Enter Your Task")
    }
    else{
    setText("")
    task[flag]=text
    setTask([...task])
    setFlag(-1)
    }
   }
  }
  
 function handleDelete(index){
  task.splice(index,1)
 }
 function handleEdit(index){
  setText(task[index])
  setFlag(index)
 }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Task Manager</Text>
          <TaskIcon name="tasks" size={45} color="#FAF7F0" />
        </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Enter Task" value={text} onChangeText={(value) => setText(value)} />
            <TouchableOpacity style={{ backgroundColor: "rgba(0, 0, 0, 0)" }} onPress={handleInput}>
              <View style={styles.button}>
                <Text style={styles.text}>ADD</Text>
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView >
            <View style={styles.listContainer}>
              <List task={task} deleteItem={handleDelete} editItem={handleEdit} />
            </View>
          </ScrollView>
      </View>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  container:{
    flexDirection:"column",
    height:"100%",
    backgroundColor:"#295F98",
  },
  headerContainer:{
    paddingVertical:25,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"flex-end",
    gap:10
  },
  headerText:{
    fontSize:30,
    fontWeight:"700",
    textAlign:"center"
  },
  inputContainer:{
    flexDirection:"row",
    paddingTop:15,
    paddingHorizontal:15,
    justifyContent:"center",
    alignItems:"flex-end",
  },
  input:{
    width:250,
    fontSize:20,
    padding:5,
    paddingStart:10,
    paddingVertical:8.5,
    borderBottomWidth:0.5,
    borderColor:"rgba(0,0,0,0.6)",
    backgroundColor:"rgba(225, 215, 198,0.7)",
  },
  button:{
    paddingVertical:10,
    paddingHorizontal:15,
    borderTopEndRadius:7,
    borderBottomEndRadius:7,
    shadowColor: "#000",
    shadowOffset: {width: 0,height: 1,},
shadowOpacity: 0.18,
shadowRadius: 1.00,

elevation: 1,
  },
  text:{
    fontSize:20,
    fontWeight:"600"
  },
  listContainer:{
    paddingHorizontal:20,
    paddingVertical:25,
    alignItems:"center"
  }
})
export default App;