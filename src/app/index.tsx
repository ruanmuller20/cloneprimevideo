import { Image,View, Text, StyleSheet, TouchableOpacity } from "react-native"


export default function Home() {     
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor:"#232F3E",
            alignItems: "flex-start",
          
          
        },
    
        header:{
          width: "100%",
          paddingTop: 80,
          alignItems: "center",
          justifyContent: "center",
        },

        primeLogoImg:{

        },

        amazonLogoImg:{
          marginTop: -32,
          marginLeft: 30,


        },

        category:{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 30,
          marginBottom: 15,

        },

        categoryText:{
          fontSize: 18,
          fontWeight: "700",
          color: "#FFf"


        }

        
    });
    const AmazonLogo = require('@/src/assets/amazon_logo.png');
    const PrimeVideoLogo = require('@/src/assets/prime_video.png');
    return (
       <View style= {styles.container}>
         <View style = {styles.header}>
            <Image style={styles.primeLogoImg} source={PrimeVideoLogo}/>
            <Image style={styles.amazonLogoImg} source={AmazonLogo}/>
         </View>
         <View style={styles.category}>
            <TouchableOpacity>
              <Text style={styles.categoryText}>Home</Text>  
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.categoryText}>TV Shows</Text>  
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.categoryText}>Movies</Text>  
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.categoryText}>Kids</Text>  
            </TouchableOpacity>


         </View>

       </View>

    )
}



