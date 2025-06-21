// api/chat.js
import fetch from 'node-fetch'
export default async (req, res) => {
  const prompt = req.body.prompt
  const resp = await fetch('https://api.openai.com/v1/...', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt, ... })
  })
  const data = await resp.json()
  res.status(200).json(data)
}
