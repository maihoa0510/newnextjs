import axios from "axios";

export const getUser = async() =>{
    try{
        const response = await axios.get('http://localhost:5000/getuser')
        return response.data
    }catch(error){
        console.log(error);
    }
}