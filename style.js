import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerdark: {
      flex: 1,
      backgroundColor: "#210049",
      alignItems: "center",
      justifyContent: "center",
    },
    spaces: {
        margin:5
    },
    title1dark: {
        color: '#fff',
        fontSize: 60,
        marginBottom:-10,
    },
    title2dark: {
        color: '#fe2f73',
        fontSize: 14,
        marginBottom:40,
    },
    textdark: {
        color: 'white',
        fontSize: 18,
        paddingLeft:20,
        marginBottom: 10,
        textAlign:"left",
        width:300,
    },
    inputdark: {
        height: 40,
        color: 'white',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        width: 300,
        borderRadius:50
    },
    buttondark: {
        width: 300,
        marginTop:10,
        color: '#210049',
        borderRadius:50,
        backgroundColor: '#fe2f73',
        padding:10
    },
    buttontextdark: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },


    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        textAlign:"center",
    },
    container2: {
        flex: 1
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
    },
    thumbnail: {
      width: 200,
      height: 200,
      resizeMode: "contain",
    },
    title1: {
        color: '#210049',
        fontSize: 18,
    },
    title2: {
        color: '#fe2f73',
        fontSize: 30,
    },
    text: {
        color: 'gray',
        textAlign:"center",
        width:300,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width:200,
        borderRadius:20
    },
    item: {
        backgroundColor: '#ffffff',
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    button: {
        marginTop:10,
        color: '#210049',
        borderRadius:50,
        backgroundColor: '#fe2f73',
        padding:10,
        paddingLeft: 25,
        paddingRight:25,
    },
    buttontext: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    button2: {
        marginTop:10,
    },
    buttontext2: {
        color: '#210049',
        textDecorationLine:'underline',
        textDecorationColor:'#210049',
        fontSize: 16,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
      },
    image: {
        height: 100,
        width: 100,
        resizeMode: 'cover',
        borderRadius: 50,
    },
    buttonimage: {
        alignItems: "center",
        backgroundColor: "transparent",
        padding: 0
    },
    countContainer: {
        alignItems: "center",
        padding: 0
    },
    iconprofile:{
        height: 25,
        width: 25,
        marginTop:-20,
        left:30,
        marginBottom:30,
        opacity: 0.8
    },
    

    tabStyle: {
        borderColor:'#210049'
    },
    tabTextStyle: {
        color: '#210049'
    },
    activeTabStyle: {
        backgroundColor:'#210049'
    },

});


export default styles