import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    Toggle_25: true,
    Datepicker_28: new Date("07/15/2020"),
    Datepicker_11: new Date("07/15/2020")
  }

  render = () => (
    <View
      style={{
        width: "100%",
        height: "100%",
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: "visible",
        textAlign: "left",
        verticalAlign: "baseline",
        fontSize: 20,
        color: "#000000",
        backgroundColor: "#ffffff",
        fontStyle: "normal",
        fontWeight: "normal",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 0,
        backgroundSize: "auto"
      }}
    >
      <View
        style={{
          width: "100%",
          height: "50%",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: 20,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontStyle: "normal",
          fontWeight: "normal",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "stretch",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          backgroundSize: "auto"
        }}
      >
        <View
          style={{
            width: "50%",
            height: "100%",
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            fontSize: 20,
            color: "#000000",
            backgroundColor: "#ffffff",
            fontStyle: "normal",
            fontWeight: "normal",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0,
            backgroundSize: "auto"
          }}
        >
          <Button
            style={{
              width: "100%",
              marginLeft: 0,
              marginRight: 0,
              marginTop: 5,
              marginBottom: 5,
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 5,
              paddingBottom: 5,
              overflow: "visible",
              textAlign: "center",
              verticalAlign: "baseline",
              fontSize: 20,
              color: "#000000",
              backgroundColor: "#3366FF",
              fontStyle: "normal",
              fontWeight: "normal",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0
            }}
            onPress={() => alert("Pressed!")}
          >
            Press me!
          </Button>
          <Text
            style={{
              marginLeft: 0,
              marginRight: 0,
              marginTop: 5,
              marginBottom: 5,
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 5,
              paddingBottom: 5,
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              fontSize: 20,
              color: "#000000",
              backgroundColor: "#ffffff",
              fontStyle: "normal",
              fontWeight: "normal",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0
            }}
          >
            Sample text content
          </Text>
          <View
            style={{
              width: "100%",
              height: "25%",
              marginLeft: 0,
              marginRight: 0,
              marginTop: 0,
              marginBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              fontSize: 20,
              color: "#000000",
              backgroundColor: "#ffffff",
              fontStyle: "normal",
              fontWeight: "normal",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "stretch",
              alignContent: "stretch",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0,
              backgroundSize: "auto"
            }}
          >
            <View
              style={{
                width: "100%",
                height: "50%",
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                fontSize: 20,
                color: "#000000",
                backgroundColor: "#ffffff",
                fontStyle: "normal",
                fontWeight: "normal",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "stretch",
                alignContent: "stretch",
                borderColor: "#000000",
                borderStyle: "solid",
                borderWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                borderRadius: 0,
                backgroundSize: "auto"
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: "50%",
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 0,
                  marginBottom: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  fontSize: 20,
                  color: "#000000",
                  backgroundColor: "#ffffff",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  alignItems: "stretch",
                  alignContent: "stretch",
                  borderColor: "#000000",
                  borderStyle: "solid",
                  borderWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  borderRadius: 0,
                  backgroundSize: "auto"
                }}
              >
                <View
                  style={{
                    width: "50%",
                    height: "100%",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    overflow: "visible",
                    textAlign: "left",
                    verticalAlign: "baseline",
                    fontSize: 20,
                    color: "#000000",
                    backgroundColor: "#ffffff",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                    alignContent: "stretch",
                    borderColor: "#000000",
                    borderStyle: "solid",
                    borderWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    borderRadius: 0,
                    backgroundSize: "auto"
                  }}
                >
                  <Button
                    style={{
                      width: 100,
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: 5,
                      marginBottom: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                      paddingTop: 5,
                      paddingBottom: 5,
                      overflow: "visible",
                      textAlign: "center",
                      verticalAlign: "baseline",
                      fontSize: 20,
                      color: "#000000",
                      backgroundColor: "#3366FF",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0
                    }}
                    onPress={() => alert("Pressed!")}
                  >
                    Press me!
                  </Button>
                  <Slider
                    value={50}
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                    disabled={false}
                    style={{
                      width: 100,
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: 5,
                      marginBottom: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                      paddingTop: 5,
                      paddingBottom: 5,
                      overflow: "visible",
                      textAlign: "left",
                      verticalAlign: "baseline",
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0
                    }}
                  />
                  <Toggle
                    text="switch ON/OFF"
                    activeColor="#409EFF"
                    inactiveColor="#C0CCDA"
                    disabled={false}
                    style={{
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: 5,
                      marginBottom: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                      paddingTop: 5,
                      paddingBottom: 5,
                      overflow: "visible",
                      textAlign: "left",
                      verticalAlign: "baseline",
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0
                    }}
                    checked={this.state.Toggle_25}
                    onChange={nextChecked =>
                      this.setState({ Toggle_25: nextChecked })
                    }
                  />
                  <Datepicker
                    style={{
                      width: 100,
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: 5,
                      marginBottom: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                      paddingTop: 5,
                      paddingBottom: 5,
                      overflow: "visible",
                      textAlign: "left",
                      verticalAlign: "baseline",
                      fontSize: 20,
                      color: "#000000",
                      backgroundColor: "#ffffff",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0
                    }}
                    date={this.state.Datepicker_28}
                    onSelect={nextValue =>
                      this.setState({ Datepicker_28: nextValue })
                    }
                  />
                </View>
                <View
                  style={{
                    width: "50%",
                    height: "100%",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    overflow: "visible",
                    textAlign: "left",
                    verticalAlign: "baseline",
                    fontSize: 20,
                    color: "#000000",
                    backgroundColor: "#ffffff",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                    alignContent: "stretch",
                    borderColor: "#000000",
                    borderStyle: "solid",
                    borderWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    borderRadius: 0,
                    backgroundSize: "auto"
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: 5,
                      marginBottom: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                      paddingTop: 5,
                      paddingBottom: 5,
                      overflow: "visible",
                      textAlign: "left",
                      verticalAlign: "baseline",
                      fontSize: 20,
                      color: "#000000",
                      backgroundColor: "#ffffff",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0
                    }}
                  >
                    Sample text content
                  </Text>
                  <Datepicker
                    style={{
                      width: "100%",
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: 5,
                      marginBottom: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                      paddingTop: 5,
                      paddingBottom: 5,
                      overflow: "visible",
                      textAlign: "left",
                      verticalAlign: "baseline",
                      fontSize: 20,
                      color: "#000000",
                      backgroundColor: "#ffffff",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0
                    }}
                    date={this.state.Datepicker_11}
                    onSelect={nextValue =>
                      this.setState({ Datepicker_11: nextValue })
                    }
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: "50%",
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                fontSize: 20,
                color: "#000000",
                backgroundColor: "#ffffff",
                fontStyle: "normal",
                fontWeight: "normal",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "stretch",
                alignContent: "stretch",
                borderColor: "#000000",
                borderStyle: "solid",
                borderWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                borderRadius: 0,
                backgroundSize: "auto"
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: "50%",
            height: "100%",
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            fontSize: 20,
            color: "#000000",
            backgroundColor: "#ffffff",
            fontStyle: "normal",
            fontWeight: "normal",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0,
            backgroundSize: "auto"
          }}
        >
          <Button
            style={{
              width: "100%",
              marginLeft: 0,
              marginRight: 0,
              marginTop: 5,
              marginBottom: 5,
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 5,
              paddingBottom: 5,
              overflow: "visible",
              textAlign: "center",
              verticalAlign: "baseline",
              fontSize: 20,
              color: "#000000",
              backgroundColor: "#3366FF",
              fontStyle: "normal",
              fontWeight: "normal",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0
            }}
            onPress={() => alert("Pressed!")}
          >
            Press me!
          </Button>
          <Text
            style={{
              marginLeft: 0,
              marginRight: 0,
              marginTop: 5,
              marginBottom: 5,
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 5,
              paddingBottom: 5,
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              fontSize: 20,
              color: "#000000",
              backgroundColor: "#ffffff",
              fontStyle: "normal",
              fontWeight: "normal",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0
            }}
          >
            Sample text content
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
