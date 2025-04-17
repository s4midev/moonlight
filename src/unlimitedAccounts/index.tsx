import { ExtensionWebExports } from "@moonlight-mod/types";

export const patches: ExtensionWebExports["patches"] = [
  {
    find: /multiaccount_cta_tooltip_seen/g,
    replace: {
      match: /(let .=)5(,.="switch-accounts-modal")/,
      replacement: (orig: string, front: string, back: string) =>
          `${front}Infinity${back}`,
    }
  }
];