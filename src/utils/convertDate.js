export const formatToISODateTime = (data) => {
  var dia  = data.split("/")[0];
  var mes  = data.split("/")[1];
  var ano  = data.split("/")[2].substring(0,4);
  var horas = data.split("/")[2].substring(5).trim()

  var resultFormat = ''
  if(horas !== ''){
   resultFormat =  ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2) + " " + horas;
  }else{
    resultFormat =  ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
  }
  return resultFormat
}
