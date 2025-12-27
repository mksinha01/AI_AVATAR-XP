/**
 * Agent Status API Integration
 * 
 * This file provides examples of how to check if your LiveKit avatar agent
 * is ready before starting a video call.
 */

// Example 1: Simple health check endpoint
export async function checkAgentHealth(): Promise<boolean> {
  try {
    const response = await fetch('/api/agent/health', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data.ready === true;
  } catch (error) {
    console.error('Agent health check failed:', error);
    return false;
  }
}

// Example 2: Check if agent is in a specific room
export async function checkAgentInRoom(roomName: string): Promise<boolean> {
  try {
    const response = await fetch(`/api/agent/status?room=${roomName}`, {
      method: 'GET',
    });

    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data.agentPresent === true;
  } catch (error) {
    console.error('Agent room check failed:', error);
    return false;
  }
}

// Example 3: Advanced status check with detailed info
export interface AgentStatus {
  ready: boolean;
  currentLoad: number;
  maxCapacity: number;
  version: string;
  uptime: number;
}

export async function getDetailedAgentStatus(): Promise<AgentStatus | null> {
  try {
    const response = await fetch('/api/agent/detailed-status', {
      method: 'GET',
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to get agent status:', error);
    return null;
  }
}

// Backend Implementation Examples:

/**
 * Node.js/Express Backend Example:
 * 
 * app.get('/api/agent/health', async (req, res) => {
 *   try {
 *     // Check if your agent process is running
 *     const isAgentRunning = await checkAgentProcess();
 *     
 *     res.json({
 *       ready: isAgentRunning,
 *       timestamp: Date.now()
 *     });
 *   } catch (error) {
 *     res.status(500).json({ ready: false, error: error.message });
 *   }
 * });
 * 
 * app.get('/api/agent/status', async (req, res) => {
 *   const { room } = req.query;
 *   
 *   try {
 *     // Use LiveKit API to check if agent is in the room
 *     const roomService = new RoomServiceClient(
 *       process.env.LIVEKIT_URL,
 *       process.env.LIVEKIT_API_KEY,
 *       process.env.LIVEKIT_API_SECRET
 *     );
 *     
 *     const participants = await roomService.listParticipants(room);
 *     const agentPresent = participants.some(p => p.identity.startsWith('agent-'));
 *     
 *     res.json({ agentPresent });
 *   } catch (error) {
 *     res.status(500).json({ agentPresent: false });
 *   }
 * });
 */

/**
 * Python/FastAPI Backend Example:
 * 
 * @app.get("/api/agent/health")
 * async def agent_health():
 *     try:
 *         # Check if agent is running
 *         is_running = await check_agent_process()
 *         return {
 *             "ready": is_running,
 *             "timestamp": time.time()
 *         }
 *     except Exception as e:
 *         return {"ready": False, "error": str(e)}
 * 
 * @app.get("/api/agent/status")
 * async def agent_status(room: str):
 *     try:
 *         # Use LiveKit API to check room participants
 *         room_service = RoomService()
 *         participants = await room_service.list_participants(room)
 *         agent_present = any(p.identity.startswith("agent-") for p in participants)
 *         
 *         return {"agentPresent": agent_present}
 *     except Exception as e:
 *         return {"agentPresent": False, "error": str(e)}
 */

/**
 * Usage in VideoCallDialog.tsx:
 * 
 * Replace the handleCheckAgent function with:
 * 
 * const handleCheckAgent = async () => {
 *   setIsCheckingAgent(true);
 *   setAgentStatus('checking');
 * 
 *   try {
 *     const isReady = await checkAgentHealth();
 *     setAgentStatus(isReady ? 'ready' : 'not-ready');
 *   } catch (error) {
 *     console.error('Agent check failed:', error);
 *     setAgentStatus('not-ready');
 *   }
 * 
 *   setIsCheckingAgent(false);
 * };
 * 
 * // Or for room-specific check:
 * const handleCheckAgent = async () => {
 *   setIsCheckingAgent(true);
 *   setAgentStatus('checking');
 * 
 *   const roomName = `counseling-${counselorCategory}`;
 *   
 *   try {
 *     const isInRoom = await checkAgentInRoom(roomName);
 *     setAgentStatus(isInRoom ? 'ready' : 'not-ready');
 *   } catch (error) {
 *     setAgentStatus('not-ready');
 *   }
 * 
 *   setIsCheckingAgent(false);
 * };
 */
