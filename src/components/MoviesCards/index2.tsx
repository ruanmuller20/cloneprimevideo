import { StyleSheet,Image,TouchableOpacity } from "react-native";



export default function MoviesCard (props:any){
    return(
        <TouchableOpacity>
            <Image style={styles.img} source={props.movieURL}/>
        </TouchableOpacity>
    )

    
      

}

const styles = StyleSheet.create({
        img:{
            marginRight: 20,
            
        }
    
        
    })