import { Image,View, Text, StyleSheet, TouchableOpacity } from "react-native"


export default function Home() {     
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor:"#232F3E",
            alignItems: "flex-start",
        },
    
        header:{
    
        },

        primeLogoImg:{

        },

        amazonLogoImg:{

        },

        category:{

        },

        
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
              <Text>Home</Text>  
            </TouchableOpacity>

            <TouchableOpacity>
              <Text>TV Shows</Text>  
            </TouchableOpacity>

            <TouchableOpacity>
              <Text>Movies</Text>  
            </TouchableOpacity>

            <TouchableOpacity>
              <Text>Kids</Text>  
            </TouchableOpacity>


         </View>

       </View>

    )
}



