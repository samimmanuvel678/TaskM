import React from 'react'
import {View,Text, StyleSheet, TouchableWithoutFeedback, Modal} from 'react-native'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';
function List({task, deleteItem, editItem}) {
  const [openModal, setModal]=useState(false)
  const [selectedTask, setSelectedTask]=useState(0)
  const [selectedRadioButton, setSelectedRadioButton]= useState("")
  const [itemsModal,setItemsModal]=useState(false)
  function handleModal(index){
    setModal(true)
    setSelectedTask(index)
  }
const handleRemove = (index)=>{
    deleteItem(index)
    setModal(false)
  }
const handleEdit = (index)=>{
  editItem(index)
  setModal(false)
}

const handleSelectRadio=(data)=>{

  setSelectedRadioButton(
    (prevSeletedItem)=>{
      if(prevSeletedItem.includes(data)){
        return prevSeletedItem.filter((i) => i !== data);
      }
      else{
        return [...prevSeletedItem, data]
        }
    }
  )
  setItemsModal(true)
}
const handleItemsModal=()=>{
  setItemsModal(false)
}
  return (
    <View>
      {task.map((data, index) => (
        <View key={index}>
          <TouchableWithoutFeedback onPress={() => handleModal(index)}>
            <View style={styles.container}>
              <Text style={styles.text}>{data}
              </Text>
              <TouchableWithoutFeedback onPress={()=>handleSelectRadio(data, index)}>
              <View style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
                <View style={styles.outer}>
                {selectedRadioButton.includes(data) ? <View style={styles.innerActive} />:null }
                </View> 
              </View>             
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </View>
      ))}

        {/* EditModal */}

        <LinearGradient colors={['#2b5876', '#4e4376']} style={openModal === false ? styles.modalClose : [styles.modal, styles.modalOpen]}>
            <View>
              <Text style={styles.modalText}>{task[selectedTask]}</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 20, justifyContent: "center", alignItems: "center" }}>
              <TouchableWithoutFeedback onPress={() => handleEdit(selectedTask)}  ><Text style={styles.modalButton}><Icon name="edit" size={40} color="#87A2FF" /></Text></TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => handleRemove(selectedTask)} ><Text style={styles.modalButton}><Icon name="trash" size={40} color="#C7253E" /></Text></TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => setModal(false)} ><Text style={styles.modalButton}><Icons name="cancel" size={40} color="#FFEB55" /></Text></TouchableWithoutFeedback>
            </View>
          </LinearGradient>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        width:330,
        backgroundColor:"#E1D7C6",
        borderRadius:7,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:15,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
    },
    text:{
        fontSize:20,
        fontWeight:"600",
        fontStyle:"italic",
        color:"black",
        paddingVertical:11,
        paddingHorizontal:20,
    },
    innerActive:{
        width:12,
        height:12,
        borderRadius:10,
        backgroundColor:"#170580",

    },
    innerInActive:{
        width:12,
        height:12,
        borderRadius:10,
        backgroundColor:"none",
    },
    outer:{
      width:25,
      height:25,
      borderRadius:50,
      borderWidth:3,
      borderColor:"black",
      padding:3,
      justifyContent:"center",
      alignItems:"center"
    },
    click:{
        backgroundColor:"#170580"
    },
    modal:{
      width:300,
      height:200,
      position:"absolute",
      top:50,
      left:10,
      zIndex:5,
      padding:10,
      justifyContent:"center",
      alignItems:"center",
      gap:30,
      borderRadius:7
    },
    modalOpen:{
      display:"flex",
    },
    modalClose:{
      display:"none"
    },
    modalButton:{
      padding:10,
      borderRadius:3,
      color:"white",
      fontSize:15
    },
    modalText:{
      fontSize:30,
      fontWeight:"700",
      color:"white",
      fontStyle:"italic"
    },
    itemsModal:{
      width:330,
      padding:15,
      backgroundColor:"red",
      position:"relative",
    },
    itemsModalClose:{
      display:"none"
    }
})

export default List