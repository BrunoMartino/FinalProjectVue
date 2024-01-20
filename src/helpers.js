import { useStore } from 'vuex'
const store = useStore()

export function serializeData(obj) {
  let queryString = ''
  for (let key in obj) {
    queryString += `&${key}=${obj[key]}`
  }
  return queryString
}

export function toCurrency(value) {
  if (typeof value === 'string' && value.trim()) {
    try {
      const floatValue = parseFloat(value.replace(',', '.'))
      return floatValue.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
    } catch (error) {
      return value
    }
  } else {
    return ''
  }
}

export function mapFields(options) {
  const object = {}
  for (let x = 0; x < options.fields.length; x++) {
    const field = [options.fields[x]]
    object[field] = {
      get() {
        return this.$store.state[options.base][field]
      },
      set(value) {
        this.$store.commit(options.mutation, { [field]: value })
      }
    }
  }
  return object
}
