const getErrorFromString = (error: string): [{ [key: string]: string }] => {
  const errors = error.split(' ')
  const result = {}

  for (const error of errors) {
    const [key, value] = error.split('.')
    result[key] = value
  }

  return [result]
}

export default getErrorFromString
