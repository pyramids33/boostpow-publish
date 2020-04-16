import ReactMarkdown from 'react-markdown';

const content = `
## Publish Widget

Boost POW Publish is a simple way to Boost content on your website. It is a reference publisher implementation to Boost content.

Currently supported wallets are Money Button and RelayX.

The simplest Boost POW Publish usage looks like this:
\`\`\`
// in HTML
<script src="https://publish.boostpow.com/publish.js"></script>

// in javascript
boostPublish.open({
  content: 'optional content to initialize',
  tag: 'optional tag to initialize',
  outputs: [], // Additional outputs can be added optionally
  onPayment: function(payment, boostJobStatus) {
	console.log(payment, boostJobStatus);
  }
});
\`\`\`

## The boostPublish object

Including the Boost POW Publisher embed on your makes \`boostPublish\` available on the browser's \`window\` object.
It has one asynchronous method, \`open\` that resolves with
a payment object upon a successful payment and throws if there was an error.
\`open\` returns \`undefined\` if the payment was canceled.

## Available options:

### content

Optional content to initialize with. Leave empty to allow user to set it.

### tag

Optional tag to initialize with. Leave empty to allow user to set it.

### outputs

An array containing a list of output ojects. Each output object may have the following properties:

- \`to\`: (string) - bitcoin address
- \`amount\`: (number) - amount of bitcoin (BSV)
- \`script\`: (string) - valid bitcoin script using ASM format

### onPayment

A function that is called after a successful payment

### onError

A function that is called when an error occurs during the payment

### moneybuttonProps

Additional properties passed into moneybutton.

### relayxProps

Additional propeties passed into relayx
`;

const Docs = () => {
	return (
		<div style={{ width: '100vw' }}>

			<div style={{ maxWidth: '100%', margin: '0 auto', width: '600px' }}>
				<a href="https://boostpow.com">
					<img src="/logo.svg" style={{ marginTop: '1em' }}/>
				</a>
				<ReactMarkdown source={content} />
			</div>

			<style jsx global>{`
				html,
				body {
					min-height: 100%;
					padding: 0;
					margin: 0;
					font-family: proxima-nova, Helvetica;
				}

				code {
					background: #dedede;
					line-height: 18px;
					padding: 0 4px;
					border-radius: 6px;
				}

				pre {
					border-radius: 6px;
					background: #dedede;
					padding: 12px;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	);
};

export default Docs;
