//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
//set SENDGRID_TOKEN=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

const { SuperfaceClient } = require('@superfaceai/one-sdk');

const sdk = new SuperfaceClient();

async function run() {
  // Load the installed profile
  const profile = await sdk.getProfile('communication/send-email');

  // Use the profile
  const result = await profile
    .getUseCase('SendEmail')
    .perform({
      from: 'nissmos13@teslax.me',
      to: 'nissmos13@debb.me',
      subject: 'Your order has been shipped!',
      text: 'Hello Debb, your recent order on Our Shop has been shipped.',
    });

  return result.unwrap();
}

run();