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
