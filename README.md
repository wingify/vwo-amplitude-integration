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

- `useLegacyKeys` (boolean, default: true): When set to false, uses separates user properties for Test and Variant IDs into `VWO-Test-ID` and `VWO-Variant-ID` with the values being the test and variant IDs respectively.  If true, it will continue to use the legacy single key name as `VWO-Test-ID-{expId}` with value being the variant ID.

```js
VWOAmplitudePlugin(amplitude, { useLegacyKeys: false });
```

## Code of Conduct

[Code of Conduct](https://github.com/wingify/vwo-amplitude-integration/blob/master/CODE_OF_CONDUCT.md)

## License

[Apache License, Version 2.0](https://github.com/wingify/vwo-amplitude-integration/blob/master/LICENSE)

Copyright 2023 Wingify Software Pvt. Ltd.
