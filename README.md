# VWO Amplitude integration plugin

This plugin allows to send VWO data to Amplitude using `amplitude-js` or `@amplitude/analytics-browser`.

## Package Installation

For NodeJs/JavasScript SDK

```bash
# via npm
npm install vwo-amplitude-integration

# via yarn
yarn add vwo-amplitude-integration
```

## Usage

This plugin works with Amplitude's `amplitude-js` and `@amplitude/analytics-browser` libraries.

Initialize VWOAmplitudePlugin with your amplitude Instance:

**In your App.js file**
```js
import amplitude from "amplitude-js";
import VWOAmplitudePlugin from 'vwo-amplitude-integration';
amplitude.getInstance().init(API_KEY, null, {
    // optional configuration options
});

VWOAmplitudePlugin(amplitude); 
```
For more details around `amplitude-js` plugin, refer to this [document](https://www.npmjs.com/package/amplitude-js)

```js
import amplitude from "@amplitude/analytics-browser";
import VWOAmplitudePlugin from 'vwo-amplitude-integration';
amplitude.init(API_KEY, null, {
    // optional configuration options
});

VWOAmplitudePlugin(amplitude); 
```
For more details around `@amplitude/analytics-browser` plugin, refer to this [document](https://www.npmjs.com/package/@amplitude/analytics-browser)

Ensure that the code is rendered and executed exclusively on the client side, as this plugin is designed for client-side functionality only.

**Options**

The VWOAmplitudePlugin function accepts an optional second parameter with the following options:

- `useSimpleKey` (boolean, default: false): When set to true, uses a simplified key name of "VWO-Test-ID" instead of "VWO-Test-ID-{expId}".

```js
VWOAmplitudePlugin(amplitude, { useSimpleKey: true });
```

## Code of Conduct

[Code of Conduct](https://github.com/wingify/vwo-amplitude-integration/blob/master/CODE_OF_CONDUCT.md)

## License

[Apache License, Version 2.0](https://github.com/wingify/vwo-amplitude-integration/blob/master/LICENSE)

Copyright 2023 Wingify Software Pvt. Ltd.
