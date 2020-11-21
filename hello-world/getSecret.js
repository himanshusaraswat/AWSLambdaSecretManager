var AWS = require("aws-sdk"),
  _region = "us-east-2",
  secretName = "test-key";
// Create a Secrets Manager client
var client = new AWS.SecretsManager({
  region: _region,
});
const getSecret = async () => {
  try {
    let secret = null;
    const result = await client
      .getSecretValue({ SecretId: secretName })
      .promise();
    // Decrypts secret using the associated KMS CMK.
    if ("SecretString" in result) {
      secret = result.SecretString;
      console.log("INSIDE SECRET", result);
    } else {
      console.log("*****Wrong SECRET type****", result);
    }
    return secret;
  } catch (error) {
    console.error("***An error occurred***", err);
  }
};
module.exports = { getSecret };
