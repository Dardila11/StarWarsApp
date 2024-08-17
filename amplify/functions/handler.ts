exports.handler = async (
  event: { response: { autoConfirmUser: boolean } },
  _context: any,
  callback: (arg0: null, arg1: any) => void
) => {
  console.log(`EVENT: ${JSON.stringify(event)}`)
  event.response.autoConfirmUser = true
  callback(null, event)
}
