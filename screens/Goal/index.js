import { Text, View, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import SegmentedControlTab from "react-native-segmented-control-tab";

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
  })

function Goal() {
  const [ selectedIndex, setSelectedIndex] = useState(0)



    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Aumenta tu meta si es muy fácil de lograr</Text>
        <Text>disminuye tu meta si es muy dificil de lograr lograr {'\n'} {'\n'}</Text>
        
        <Text>Me voy a ganar:</Text>
        
        <TextInput
          style={styles.input}
          placeholder="1,000,000"
          keyboardType="numeric"
        />

        <SegmentedControlTab
          values={["Diarios", "Semanales", "Mensuales"]}
          selectedIndex={selectedIndex}
          onTabPress={(index) => {setSelectedIndex(index)}}
        />

      <Text>
        {selectedIndex}
      </Text>
        
      </View>
    );
  }

  export default Goal