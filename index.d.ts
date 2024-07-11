declare module "vwo-amplitude-integration" {
  interface VWOAmplitudePluginOptions {
    useSimpleKey?: boolean;
  }

  export default function VWOAmplitudePlugin(amplitude: {[k: string]: any}, options?: VWOAmplitudePluginOptions): void;
}