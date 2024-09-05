import axios from "axios"


const GetQuestions=()=>{

  async function fetchQuestions(params) {

    const {difficulty,category,limit} = params

    const key = process.env.REACT_APP_API_KEY
    
    try {
      // const { data } = await axios.get(`https://quizapi.io/api/v1/questions?apiKey=dwj3vQxkZcG27Y75qaPMxpV9zfANVqBRKXjorG7h&category=dddd&difficulty=easy&limit=20`)
      const { data } = await axios.get(`https://quizapi.io/api/v1/questions?apiKey=${key}&category=${category}&difficulty=${difficulty}&limit=${limit}`)
      return (data)
    } catch (error) {
      return []
      console.log(error.message)
    }
   
  
}
return {fetchQuestions}
}

export default GetQuestions