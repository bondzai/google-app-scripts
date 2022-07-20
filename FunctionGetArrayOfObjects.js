function getSigleObject(key, value) {
  const result = {}
  for (let i in key) {
    result[key[i]] = value[i]
  }
  return result
}

function getArrayOfObjects(keys, values) {
  const result = []
  var singleObject
  for (let i in values) {
    for (let j in keys) {
      singleObject = getSigleObject(keys[j], values[i])
    }
    result.push(singleObject)
  }
  return result
}

  /* This is the result	
  { Name: 'BUSD',
    Network: 'BEP20',
    Address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    Decimal: 18 }
  */
