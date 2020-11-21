let response;
const GET_SECRET = require('./getSecret.js');
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
exports.lambdaHandler = async (event, context) => {
  try {
    const secret = await GET_SECRET.getSecret();
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "hello world yo",
        data: secret
      })
    };
  } catch (err) {
    console.error('***An error occurred***',err);
    return err;
  }
  return response;
};
