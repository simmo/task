import task from './'

describe('task', () => {
  it('should provide data when resolved', async () => {
    expect.assertions(2)

    const resolveData = { hello: 'world' }
    const { error, data } = await task(Promise.resolve(resolveData))

    expect(error).toBeNull()
    expect(data).toBe(resolveData)
  })

  it('should provide error when rejected', async () => {
    expect.assertions(2)

    const rejectedError = { status: 'failed' }
    const { error, data } = await task(Promise.reject(rejectedError))

    expect(error).toBe(rejectedError)
    expect(data).toBeNull()
  })
})
