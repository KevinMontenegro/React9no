import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MisColores } from '../theme/AppTheme';


interface Propiedades{        //funcion para controlar y validar los datos dentro de las listas
    text: string,
    onPress :() => void //genera una funcion de flecha               
}

export const BotonRedondeado = ({text, onPress}:Propiedades) => {
    return(
        <TouchableOpacity
        style={styles.redondear} //llamar funcion
            onPress={() => onPress()}
        >
            <Text style={styles.textoBoton}>{text}</Text> 
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    redondear:{ //diseño boton
        width:'100%', 
        height:50, //alto 
        backgroundColor: MisColores.secondary, //color definido de AppTheme
        alignItems:"center", //items alineados al centro
        justifyContent:"center", //justificar el texto
        borderRadius:15 //bordes 
    },
    textoBoton:{ //texto del boton
        color:'white', //color texto
        fontWeight:'bold' //negrita
    }
})