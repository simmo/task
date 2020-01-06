import task from '.'

describe('task', () => {
  test('provides data when resolved', async () => {
    const resolveData = { hello: 'world' }
    const { error, data } = await task(Promise.resolve(resolveData))

    expect(error).toBeNull()
    expect(data).toBe(resolveData)
  })

  test('provides error when rejected', async () => {
    const rejectedError = { status: 'failed' }
    const { error, data } = await task(Promise.reject(rejectedError))

    expect(error).toBe(rejectedError)
    expect(data).toBeNull()
  })
})
