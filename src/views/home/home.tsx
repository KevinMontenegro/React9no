import React  from "react";
import { View, Image, Text, TextInput,ToastAndroid, StyleSheet, TouchableOpacityBase, TouchableOpacity } from "react-native";
import {BotonRedondeado} from '../../components/botonredondeado';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {ListaPaginas} from '../../../App';


export const HomeScreen =()=>{

const navegacion = useNavigation<NativeStackNavigationProp<ListaPaginas>>();

    return (
        <View style={styles.container}>
          <Image
            source={require('../../../assets/chef.jpg')}
            style={styles.imagen}
          />
   
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/logo.png')}
              style={styles.logo}
            />
            <Text style={styles.logoText}>Rapidito</Text>
          </View>
   
          <View style={styles.form}>
            <Text style={styles.formText}>Ingresar</Text>
            <View style={styles.FormInput}>
              <Image
                source={require('../../../assets/email.png')}
                style={styles.formIcono}
              />
              <TextInput
                placeholder='Ingrese su correo'
                style={styles.FormInputText}
                keyboardType='email-address'
              />
            </View>
            <View style={styles.FormInput}>
              <Image
                source={require('../../../assets/password.png')}
                style={styles.formIcono}
              />
              <TextInput
                placeholder='Ingrese su contraseña'
                style={styles.FormInputText}
                keyboardType='default'
                secureTextEntry={true}
              />
            </View>
           
            <View>
              <BotonRedondeado text='Ingresar'
              onPress={()=> ToastAndroid.show('Hola mundo', ToastAndroid.SHORT)} />
            </View>
           
            <View style={{ marginTop: 10 }}>
              <View style={styles.contenedorRegsitro}>
                <Text >No tienes cuenta</Text>

                <TouchableOpacity onPress = {()=>navegacion.navigate("Registro de usuario")}>
                    <Text style={{ color: 'orange', paddingLeft: 10 }}>Registrate</Text>
                </TouchableOpacity>
                
              </View>
            </View>
   
          </View>
        </View>
      );
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'black',
      }, contenedorRegsitro: {
        flexDirection: "row",
        padding: 10,
        alignSelf: "center"
      },
      imagen: {
        width: "100%",
        height: "100%",
        opacity: 0.7
      },
      form: {
        backgroundColor: "white",
        height: "40%",
        width: "100%",
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30, //redondear las esquinas
        padding: 30
      },
      formIcono: {
        width: 25,
        height: 25,
        marginRight: 10
      },
      FormInput: {
        flexDirection: "row",
        padding: 20,
   
      },
      FormInputText: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#FFC300"
      }, formText: {
        fontSize: 16,
        fontWeight: "bold"
      },
      logoContainer: {
        position: "absolute",
        alignSelf: "center",
        top: "10%"
      },
      logo: {
        width: 100,
        height: 100
      }, logoText: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        marginTop: 10,
        fontWeight: "bold"
      }
    });