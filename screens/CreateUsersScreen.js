import React,{useState} from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import { Value } from 'react-native-reanimated';

const CreateUsersScreen = ()=>{

    const [state, setState] = useState({
            usertag: "",
            contra: "",
            email: "",
            nombre: "",
    });
    const cambiar = (name,value)=>{
        setState({...state, [name]: value});
    };

    const NuevoUsuario = ()=>{
        if(state.usertag === ''){
            alert('buenas vacio usertag');
        }else{
            console.log(state.usertag + "llego");
            console.log(database);
        }
    }
    return(
        <ScrollView>
            <View style = {styles.inputGroup}>
                <TextInput 
                    placeholder ="usertag"
                    onChangeText = {(value)=> cambiar("usertag",value)} 
                ></TextInput>
            </View>
            <View style = {styles.inputGroup}>
                <TextInput placeholder ="contraseña"
                onChangeText = {(value)=> cambiar("contra",value)}
                ></TextInput>
            </View>
            <View style = {styles.inputGroup}>
                <TextInput placeholder ="Email"
                onChangeText = {(value)=> cambiar("email",value)}
                ></TextInput>
            </View>
            <View style = {styles.inputGroup}>
                <TextInput placeholder ="nombre"
                onChangeText = {(value)=> cambiar("nombre",value)}
                ></TextInput>
            </View>
            <View>
                <Button title ="ejemplo guardar" onPress = {() => NuevoUsuario()} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    inputGroup:{
        flex: 1,
        padding : 0,
        marginBottom:15,
        borderBottomWidth : 1,
        borderBottomColor : '#cccccc'

    }
});

export default CreateUsersScreen