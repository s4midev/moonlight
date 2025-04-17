export async function getEmoji(json: any, endpoint: string) {
  // moonlight native DOES support direct communication, but it struggles to serialize a bigint for some fucking reason
  const channel = JSON.parse(json);

  if (!endpoint) return "⚠️";

  try {
    const response = await fetch(`${endpoint}?id=${channel.id}&generate=true`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        channel: channel
      })
    });

    return await response.text();
  } catch (e: any) {
    return e.message;
  }
}
