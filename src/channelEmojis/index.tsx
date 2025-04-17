import { ExtensionWebExports } from "@moonlight-mod/types";

export const patches: ExtensionWebExports["patches"] = [
  {
    find: /.iconContainerWithGuildIcon,/g,
    replace: {
      match: /(let .=(.)=>{)(let{className:.)/g,
      replacement: (orig: string, front: any, prop: any, back: any) =>
        `${front}return require("channelEmojis_components").EmojiCircle(${prop}.channel);${back}`
    }
  }
];

export const webpackModules: ExtensionWebExports["webpackModules"] = {
  components: {
    dependencies: [
      {
        id: "react"
      }
    ]
  }
};

export const styles: ExtensionWebExports["styles"] = [
  `
    @font-face {
      font-family: 'TwemojiMozilla';
      src: url('https://files.catbox.moe/sqwehz.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }

    .moon-channelemojis-emoji
    {
        background-color: var(--background-floating);
        border-radius: 50vh;
        height: 27px;
        width: 27px;
        min-width: 27px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1vh;
    }

    .moon-channelemojis-emoji h1
    {
        height: 9px;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "TwemojiMozilla";
    }
  `
];
