export const formatters = {
  formatMoney(val) {
    return (val || 0).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
  },
}

export function formatDate(date, format) {
  const map = {
      mm: date.getMonth() + 1,
      dd: date.getDate(),
      aa: date.getFullYear().toString().slice(-2),
      aaaa: date.getFullYear()
  }

  return format.replace(/mm|dd|aa|aaaa/gi, matched => map[matched])
}

export const removeCharacter = (str) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/\-\-+/g, '-') // Substitui multiplos hífens por um único hífen
    .replace(/(^-+|-+$)/, '') // Remove hífens extras do final ou do inicio da string
}

export const round = (num, places) => {
  if (!('' + num).includes('e')) {
    return +(Math.round(num + 'e+' + places) + 'e-' + places)
  } else {
    let arr = ('' + num).split('e')
    let sig = ''
    if (+arr[1] + places > 0) {
      sig = '+'
    }

    return +(Math.round(+arr[0] + 'e' + sig + (+arr[1] + places)) + 'e-' + places)
  }
}

export const UrlAPI = 'http://localhost:3333/'

export const hexaColorRoxo = '#6022a9';
export const hexaColorLaranja = '#6022a9';
export const hexaColorBlack = '#000';
export const hexaColorWhite = '#FFF';
