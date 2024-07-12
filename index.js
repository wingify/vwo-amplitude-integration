/**
 * Copyright 2023 Wingify Software Pvt. Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function VWOAmplitudePlugin(amplitude, options = {}) {
  const { useLegacyKeys = true } = options;

  window.VWO = window.VWO || [];
  window.VWO.push([
    "onVariationApplied",
    function (data) {
      if (!data || !amplitude) {
        if (!amplitude) {
          console.warn("VWO Amplitude Plugin Log - amplitude is not defined");
        }
        return;
      }

      const expId = data[1];
      const variationId = data[2];
      const _vis_data = {};
      if (
        expId &&
        variationId &&
        window._vwo_exp &&
        window._vwo_exp[expId] &&
        ["VISUAL_AB", "VISUAL", "SPLIT_URL"].indexOf(
          window._vwo_exp[expId].type
        ) > -1
      ) {
        let key = "VWO-Test-ID-";
        const testKeyId = "VWO-Test-ID";
        const variationKeyId = "VWO-Variation-ID";
        if (useLegacyKeys) {
          key += expId;
          _vis_data[key] = window._vwo_exp[expId].comb_n[variationId];
        } else {
          _vis_data[testKeyId] = expId;
          _vis_data[variationKeyId] =
            window._vwo_exp[expId].comb_n[variationId];
        }

        const identify = new amplitude.Identify();
        if (useLegacyKeys) {
          identify.set(key, _vis_data[key]);
        } else {
          identify.set(testKeyId, _vis_data[testKeyId]);
          identify.set(variationKeyId, _vis_data[variationKeyId]);
        }
        const amplitudeInstance = amplitude.getInstance?.() || amplitude;
        amplitudeInstance.identify(identify);
        amplitudeInstance.logEvent("VWO", _vis_data);
      }
    },
  ]);
}

module.exports = VWOAmplitudePlugin