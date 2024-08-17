import type { Handler } from "aws-lambda"

export const handler: Handler = async (event, context, callback) => {
  // your function code goes here
  console.log(`EVENT: ${JSON.stringify(event)}`)
  event.response.autoConfirmUser = true
  callback(null, event)
}
