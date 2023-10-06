export const Hypenize = (text, valueToBeHypenized) => {
  let newFormatedText = text
  if(String(text).length >= valueToBeHypenized){
    newFormatedText = `${String(text).substring(0,valueToBeHypenized)}...`
  }
  return(
    newFormatedText
  )
}
