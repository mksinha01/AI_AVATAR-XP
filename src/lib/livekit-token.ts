/**
 * LiveKit Token Generation Helper
 * 
 * IMPORTANT: This token generation should be done on your BACKEND server, not in the frontend!
 * The API key and secret should NEVER be exposed in client-side code.
 * 
 * This file shows you how to implement token generation on your backend.
 * Install the LiveKit server SDK: npm install livekit-server-sdk
 */

// Example backend implementation (Node.js/Express):
/*
import { AccessToken } from 'livekit-server-sdk';

export async function generateLiveKitToken(roomName: string, participantName: string) {
  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;

  if (!apiKey || !apiSecret) {
    throw new Error('LiveKit API credentials not configured');
  }

  const at = new AccessToken(apiKey, apiSecret, {
    identity: participantName,
    // Token expires in 24 hours
    ttl: '24h',
  });

  at.addGrant({
    roomJoin: true,
    room: roomName,
    canPublish: true,
    canSubscribe: true,
    canPublishData: true,
  });

  return at.toJwt();
}

// Express route example:
app.post('/api/livekit/token', async (req, res) => {
  try {
    const { roomName, participantName } = req.body;
    
    if (!roomName || !participantName) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    const token = await generateLiveKitToken(roomName, participantName);
    res.json({ token });
  } catch (error) {
    console.error('Token generation error:', error);
    res.status(500).json({ error: 'Failed to generate token' });
  }
});
*/

// Frontend implementation to call your backend:
export async function getLiveKitToken(
  roomName: string,
  participantName: string
): Promise<string> {
  try {
    const response = await fetch('/api/livekit/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        roomName,
        participantName,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get LiveKit token');
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error('Error fetching LiveKit token:', error);
    throw error;
  }
}

// Alternative: If you have a Python backend (FastAPI example):
/*
from livekit import api

async def generate_livekit_token(room_name: str, participant_name: str) -> str:
    token = api.AccessToken(
        api_key=os.getenv("LIVEKIT_API_KEY"),
        api_secret=os.getenv("LIVEKIT_API_SECRET")
    )
    
    token.with_identity(participant_name)
    token.with_grants(api.VideoGrants(
        room_join=True,
        room=room_name,
        can_publish=True,
        can_subscribe=True,
    ))
    
    return token.to_jwt()

@app.post("/api/livekit/token")
async def get_token(room_name: str, participant_name: str):
    try:
        token = await generate_livekit_token(room_name, participant_name)
        return {"token": token}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
*/
