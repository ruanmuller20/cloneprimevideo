import { ScrollView,Image,View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native"
import{MOVIESWATCHING} from "@/src/utils/moviesWatching"
import{MOVIESCRIME} from "@/src/utils/moviesCrimes"
import{MOVIESWATCH} from "@/src/utils/moviesWatch"
import MoviesCard from "@/src/components/MoviesCards/index2";

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

        movieImageThumbnail:{
          width: "60%",
          alignItems: "center",
          marginLeft: 140,
      
        },

        movieImage:{
          
          

                    

        },

        category:{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 30,
          marginBottom: 15,

        }, 

        movieText:{
          color: "#ffff",
          fontSize: 25,
          fontWeight:"700",
          padding: 15,
          
        },


        categoryText:{
          fontSize: 18,
          fontWeight: "700",
          color: "#FFf"


        },

        contentList:{
          paddingLeft: 18,
          paddingRight: 30

        },

        contentMovies:{

        }
       
        
    });
    
    const AmazonLogo = require('@/src/assets/amazon_logo.png');
    const PrimeVideoLogo = require('@/src/assets/prime_video.png');
    const MovieTheWhell = require('@/src/assets/movies/the_wheel_of_time.png')
    
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

        <ScrollView showsHorizontalScrollIndicator={false} style={styles.contentMovies}>
            <TouchableOpacity style ={styles.movieImageThumbnail}>
                <Image source={MovieTheWhell} style={styles.movieImage} />
            </TouchableOpacity>

            <Text style={styles.movieText}>Continue Watching</Text>
            <FlatList data={MOVIESWATCHING} keyExtractor={(item: any) => item.id.toString()}
            renderItem={({ item }:any) => <MoviesCard movieURL={item.moviesURL}/>}
            horizontal
            contentContainerStyle = {styles.contentList}
            showsHorizontalScrollIndicator={false}
            />

            <Text style={styles.movieText}>Crime Movies</Text>
            <FlatList data={MOVIESCRIME} keyExtractor={(item: any) => item.id.toString()}
            renderItem={({ item }:any) => <MoviesCard movieURL={item.moviesURL}/>}
            horizontal
            contentContainerStyle = {styles.contentList}
            showsHorizontalScrollIndicator={false}
            />

            <Text style={styles.movieText}>Watch in your language</Text>
            <FlatList data={MOVIESWATCH} keyExtractor={(item: any) => item.id.toString()}
            renderItem={({ item }:any) => <MoviesCard movieURL={item.moviesURL}/>}
            horizontal
            contentContainerStyle = {styles.contentList}
            showsHorizontalScrollIndicator={false}
            />

            
        </ScrollView>      
       </View>

    )
}



