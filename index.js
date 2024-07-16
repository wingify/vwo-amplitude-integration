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
function VWOAmplitudePlugin(amplitude) {
  if (!amplitude) {
    console.warn("VWO Amplitude Plugin Log - amplitude is not defined");
    return;
  }

  window.VWO = window.VWO || [];
  window.VWO.push([
    "onVariationApplied",
    function (data) {
      if (!data) return;

      const expId = data[1];
      const variationId = data[2];

      if (!expId || !variationId) return;

      const expType = window._vwo_exp[expId]?.type;
      if (["VISUAL_AB", "VISUAL", "SPLIT_URL"].includes(expType)) {
        const key = "VWO-Test-ID-" + expId;
        const variationName = window._vwo_exp[expId]?.comb_n[variationId];

        if (variationName) {
          const visData = { [key]: variationName };
          const identify = new amplitude.Identify();
          identify.set(key, variationName);

          const instance = amplitude.getInstance
            ? amplitude.getInstance()
            : amplitude;
          instance.identify(identify);
          instance.logEvent("VWO", visData);
        }
      }
    },
  ]);
}

module.exports = VWOAmplitudePlugin