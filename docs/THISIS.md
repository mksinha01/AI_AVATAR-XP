# TECHNICAL FOUNDATIONS

## 1.1 AI-Powered Counseling Systems

**Definition**: Software applications leveraging AI (NLP, conversational models) to provide psychological support through dialogue-based interfaces simulating human counselor interactions.

**Core Components**:
- **Conversational AI**: NLU engines that analyze user input, determine responses based on counseling frameworks/knowledge bases, and generate empathetic, contextually relevant replies.
- **Avatar Technology**: Real-time rendered digital counselors with facial expressions, lip synchronization, and body language (Beyond Presence uses real-time rendering algorithms).
- **Real-Time Communication**: WebRTC-powered instantaneous audio/video exchange with <200ms latency for natural conversation flow.

## 1.2 LiveKit Platform

**Purpose**: Open-source WebRTC infrastructure for real-time video/audio/data applications.

**Architecture**: Client-server model with Selective Forwarding Unit (SFU) that routes media streams without decoding/re-encoding, maintaining quality while optimizing performance.

**Key Features**:
- **Room Management**: Virtual spaces for isolated sessions with access controls; each counseling session = unique room.
- **Token-Based Authentication**: JWT-signed credentials authorizing specific actions (publish/subscribe media, room access, expiration times).
- **Adaptive Streaming**: Automatically adjusts video quality based on network conditions; audio prioritized over video.

## 1.3 Firebase Platform

**Purpose**: Google's backend-as-a-service for authentication and data storage.

**Core Services**:
- **Firebase Authentication**: OAuth 2.0 with Google Sign-In; generates secure user tokens, supports session persistence, handles 2FA.
- **Cloud Firestore**: NoSQL document database organizing data in collections/documents; real-time sync, offline support, server-side security rules.
- **Security Rules**: Declarative authorization (e.g., "users can only access their own session documents") enforcing least-privilege access.

## 1.4 WebRTC Technology

**Purpose**: Browser-based real-time peer-to-peer audio/video/data communication without plugins.

**Core Concepts**:
- **Peer-to-Peer Architecture**: Direct media streaming between clients; uses STUN/TURN for NAT traversal; LiveKit's SFU handles multi-party routing efficiently.
- **Media Capture**: `getUserMedia` API accesses camera/microphone after user permission; returns MediaStream with audio/video tracks encoded via VP8/VP9 (video) and Opus (audio).
- **Signaling**: External mechanism (WebSocket/HTTP) exchanges session setup info (codecs, IP addresses); LiveKit abstracts this complexity.

## 1.5 React & Modern Web Development

**React**: JavaScript library for building component-based UIs with virtual DOM for efficient rendering.

**Key Patterns**:
- **Component Architecture**: Self-contained units (e.g., CounselorCard, VideoSession) with props (parent-to-child data) and state (internal data).
- **Virtual DOM**: In-memory representation enabling efficient diff-based updates to actual DOM.
- **TypeScript**: Static type checking catches errors at compile-time (e.g., function expecting string receives number → TypeScript error).

```typescript
interface Counselor {
  agentId: string;
  name: string;
  specialty: string;
}

function CounselorCard({ counselor }: { counselor: Counselor }) {
  return <div>{counselor.name} - {counselor.specialty}</div>;
}
```

## 1.6 AI Counselor Design Methodology

**Persona Development**: Each counselor has distinct personality, background, communication style (e.g., Dr. Priya Sharma: warm, holistic, MBBS + MBSR certified).

**Conversational Framework** (5 phases):
1. **Greeting & Rapport** (1-2 min): Welcome, confidentiality, "How can I support you?"
2. **Understanding & Assessment** (5-7 min): Open questions, active listening, "Tell me more..."
3. **Exploration & Analysis** (5-8 min): Probing questions, pattern identification
4. **Guidance & Strategy** (5-7 min): Evidence-based advice, action plans
5. **Closure** (2-3 min): Summary, encouragement, resources

**Knowledge Base**: Domain expertise (e.g., stress physiology, career planning), common student issues, response templates, crisis escalation criteria, cultural sensitivity guidelines.

## 1.7 Security Architecture

**Authentication**: OAuth 2.0 (Google Sign-In) → Firebase JWT tokens → Session persistence  
**Data Protection**: HTTPS/TLS encryption (transport), WebRTC end-to-end encryption (media), Firebase Security Rules (access control)  
**Privacy**: User identification by UID only (not PII), no conversation storage, minimal data collection (email, name, session metadata), GDPR compliance  
**Access Control**: Protected routes verify auth before rendering, token-based LiveKit room access

---

**Summary**: MindfulU's technical stack combines React (UI), TypeScript (type safety), LiveKit (WebRTC video), Firebase (auth/data), and Beyond Presence (avatars) to deliver secure, scalable, real-time AI counseling with <200ms latency, OAuth 2.0 authentication, and privacy-by-design architecture.
