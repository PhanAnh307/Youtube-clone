export const API_KEY = 'AIzaSyCHujufpJOIfgcK92fHxBVtiaT4OuhJRFs'

export const value_converter = (value) => {
    if(value > 1000000) {
        return Math.floor(value/ 1000000) + 'Tr';
    }else if (value >= 1000){
        return Math.floor(value/1000) + 'N';
    }else if (value < 1000){
        return value;
    }
} 