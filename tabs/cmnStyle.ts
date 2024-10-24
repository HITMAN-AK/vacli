import {StyleSheet} from "react-native"
export const staik = StyleSheet.create({
    root:{
        flex:1,
        position:"relative",
        paddingHorizontal:5,
    },
  btntxt: {
    fontSize: 20,
  },
  btn: {
    borderWidth: 1.5,
    borderColor: "black",
    borderRadius: 50,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
    card:{
    backgroundColor: '#ffffff',
        margin:5,
        padding:5,
    borderRadius: 22.5,
    shadowColor: 'rgba(0, 0, 0, 0.55)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 31,     elevation: 5,
    }

})
export const addS = StyleSheet.create({
  field: {
    borderWidth: 2,
    borderColor: "black",
  },
  fiiMis: {
    borderWidth: 2,
    borderColor: "red",
  },
})
