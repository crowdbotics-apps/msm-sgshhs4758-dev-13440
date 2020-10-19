import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    CheckBox_3: true,
    CheckBox_5: true,
    Switch_7: true,
    TextInput_8: ""
  }

  render = () => (
    <View>
      <CheckBox
        title="Radio button"
        checked={this.state.CheckBox_3}
        onPress={nextChecked => this.setState({ CheckBox_3: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_5}
        onPress={nextChecked => this.setState({ CheckBox_5: nextChecked })}
      />
      <Switch
        value={this.state.Switch_7}
        onValueChange={nextChecked => this.setState({ Switch_7: nextChecked })}
      />
      <TextInput
        placeholder="Sample text input placeholder tests tsets text inout inpuyjkjkjdddd dr "
        value={this.state.TextInput_8}
        onChangeText={nextValue => this.setState({ TextInput_8: nextValue })}
      />
      <Text>
        Sample text content ssgsgjgteststest tsets tsets testtstsetsetstsets
        sddtsrtsrs snbjshjhsjhjsm
        smnjsnmsnmhksnmsnksnnsnsnsnkshskhkshkshkshkshkshkshskhshskskhskshksks
        ssbjsjshjhjshjshjgjsy
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  CheckBox_3: {},
  CheckBox_5: {},
  Switch_7: {},
  View_1: {},
  CheckBox_3: {},
  CheckBox_5: {},
  Switch_7: {},
  TextInput_8: {},
  Text_10: {}
})
