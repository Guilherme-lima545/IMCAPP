import React, {useState} from "react";
import { 
    TextInput,
    View, 
    Text, 
    TouchableOpacity, 
    Vibration,
    Pressable,
    Keyboard,
} from "react-native"
import ResultImc  from "./resultIMC";
import styles from "./style";

export default function Form(){
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Cacular");
    const [errorMessage, setErrorMessage] = useState(null);

    function imcCalculator() {
        let heightFormat = height.replace(",",".")
        return setImc((weight/(heightFormat*heightFormat)).toFixed(2))
    }

    function verificationImc() {
        if(imc == null) {
            Vibration.vibrate();
            
            setErrorMessage("Campo Obrigatório*")
        }
    }

    function validationImc() {
        if(weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
            
            return
        }
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("preencha o peso e altura")
        
    }

    return (
        <Pressable onPress= {Keyboard.dismiss} style = {styles.formContext}>
        <View style = {styles.form}>
            <Text style = {styles.formLabel}> Altura </Text>
            <Text style ={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
            style = {styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex. 1.75"
            keyboardType="numeric"
            />
            <Text style = {styles.formLabel}> Peso </Text>
            <Text style ={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
            style = {styles.input} 
            value={weight}
            onChangeText={setWeight}
            placeholder="Ex. 75.365"
            keyboardType="numeric"/>
           
           <TouchableOpacity
           style = {styles.buttonCalculator}
           onPress={() => {
            validationImc()
           }}>
            
            <Text style={styles.textButtonCalculator}> Calcular </Text>
           </TouchableOpacity>
           

         </View>
         <ResultImc messageResultImc={messageImc} resultImc={imc}> </ResultImc>
        </Pressable>
    );
}