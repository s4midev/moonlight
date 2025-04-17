import { useEffect, useState } from "@moonlight-mod/wp/react";

import React from "@moonlight-mod/wp/react";

const natives = moonlight.getNatives("channelEmojis");

export function EmojiCircle(channel: any) {
  const [emoji, setEmoji] = useState("");

  useEffect(() => {
    (async () => {
      const request = await natives.getEmoji(
        JSON.stringify(channel),
        moonlight.getConfigOption("channelEmojis", "apiUri")
      );

      setEmoji(request);
    })();
  }, []);

  return (
    <div className={"moon-channelemojis-emoji"}>
      <h1>{emoji}</h1>
    </div>
  );
}
