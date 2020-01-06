import invariant from 'tiny-invariant'

export default function createTask<T, E>(
  promise: Promise<T>
): Promise<{ error: E; data: T | null }> {
  invariant(
    promise && typeof promise.then === 'function',
    'Task expected a promise to be provided'
  )

  return promise
    .then(data => ({ error: null, data }))
    .catch(error => ({ error, data: null }))
}
