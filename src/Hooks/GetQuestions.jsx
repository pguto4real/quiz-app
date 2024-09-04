import axios from "axios"
import { useContext } from "react"
import { QuizContext } from "../Helpers/Context"

const GetQuestions=()=>{
  const { category, difficulty,setQuestions} = useContext(QuizContext)
  // console.log(category)
  // console.log(difficulty)
  
  async function fetchQuestions(params) {
// console.log(first)

    const {difficulty,category,limit} = params
    // console.log(difficulty)
    // console.log(category)
    const key = process.env.REACT_APP_API_KEY
    // setIsLoading(true)
    
    // const { data } = await axios.get(`https://quizapi.io/api/v1/questions?apiKey=dwj3vQxkZcG27Y75qaPMxpV9zfANVqBRKXjorG7h&difficulty=easy&limit=20`)
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