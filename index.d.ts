declare module "vwo-amplitude-integration" {
  interface VWOAmplitudePluginOptions {
    useLegacyKeys?: boolean;
  }

  export default function VWOAmplitudePlugin(amplitude: {[k: string]: any}, options?: VWOAmplitudePluginOptions): void;
}