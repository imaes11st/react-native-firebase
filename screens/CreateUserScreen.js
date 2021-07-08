import React, {useState} from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native';

const CreateUserScreen = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChangeText = (name, value) =>{
        setState({ ...state, [name]: value})
    };
    
    return(
        <ScrollView style={StyleSheet.container}>
            <view style={StyleSheet.inputGroup}>
                <TextInput placeholder="Nombre usuario"
                onChangeText={(value) => handleChangeText('name', value)}
                />
            </view>
            <view style={StyleSheet.inputGroup}>
                <TextInput placeholder="Email"
                 onChangeText={(value) => handleChangeText('email', value)}
                 />
            </view>
            <view style={StyleSheet.inputGroup}>
                <TextInput placeholder="Numero"
                onChangeText={(value) => handleChangeText('phone', value)}
                />
            </view>
            <view>
                <Button tittle="Guardar Usuario" onPress={() => console.log(state)}/>
            </view>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35,
    },
    inputGroup:{
        flex:1,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
    },
});

export default CreateUserScreen