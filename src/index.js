import invariant from 'invariant'

export default promise => {
  invariant(
    promise &&
      typeof promise.then === 'function' &&
      typeof promise.catch === 'function',
    'Task expected a promise to be provided '
  )

  return promise
    .then(data => ({ error: null, data }))
    .catch(error => ({ error, data: null }))
}
