import React, {useState} from 'react';
import {StyleSheet, Text, View, Switch, Picker} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const SettingScreen = () => {
  const [radio1, setRadio1] = useState(false);
  const [radio2, setRadio2] = useState(false);
  const [checkbox1, setCheckBox1] = useState(false);
  const [checkbox2, setCheckBox2] = useState(false);
  const [checkbox3, setCheckBox3] = useState(false);

  const [language, setLanguage] = useState('java');

  return (
    <View style={{padding: 8}}>
      <Text style={styles.header}>Radio</Text>
      <View style={{...styles.row, justifyContent: 'space-between'}}>
        <Text>Setting 1</Text>
        <Switch value={radio1} onValueChange={() => setRadio1(!radio1)} />
      </View>

      <View style={{...styles.row, justifyContent: 'space-between'}}>
        <Text>Setting 2</Text>
        <Switch value={radio2} onValueChange={() => setRadio2(!radio2)} />
      </View>

      <View style={styles.separator} />
      <Text style={styles.header}>Checkbox</Text>

      <View style={styles.row}>
        <CheckBox
          value={checkbox1}
          onValueChange={() => setCheckBox1(checkbox1)}></CheckBox>
        <Text>Option 1</Text>
      </View>

      <View style={styles.row}>
        <CheckBox
          value={checkbox2}
          onValueChange={() => setCheckBox2(checkbox2)}></CheckBox>
        <Text>Option 2</Text>
      </View>

      <View style={styles.row}>
        <CheckBox
          value={checkbox3}
          onValueChange={() => setCheckBox3(!checkbox3)}
        />
        <Text>Option 3</Text>
      </View>

      <View style={styles.separator} />
      <Text style={styles.header}>Select</Text>
      <View style={styles.row}>
        <Picker
          selectedValue={language}
          style={{height: 50, width: 150}}
          onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Python" value="python" />
          <Picker.Item label=".NET" value="net" />
        </Picker>
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    fontWeight: '700',
    paddingVertical: 8,
  },
  separator: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
