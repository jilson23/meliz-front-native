import {useState} from 'react'
import {Picker} from '@react-native-picker/picker';

function SelectTask(){
    const [selectedLanguage, setSelectedLanguage] = useState();

    return(
        <Picker
        style={{height: 100, width: 300, marginBottom:50}}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Bailar" value="Bailar" />
        <Picker.Item label="Diseñar" value="disenar" />
        <Picker.Item label="cocinar" value="cocinar" />
        <Picker.Item label="programar" value="programar" />
      </Picker>
    )

}

export default SelectTask