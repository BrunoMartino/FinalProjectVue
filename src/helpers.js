export function serializeData(obj) {
  let queryString = ''
  for (let key in obj) {
    queryString += `&${key}=${obj[key]}`
  }
  return queryString
}

export function toCurrency(value) {
  value = Number(value)
  if (!isNaN(value)) {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  } else {
    return ''
  }
}
