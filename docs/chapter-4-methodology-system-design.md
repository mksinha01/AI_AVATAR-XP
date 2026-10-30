# CHAPTER 4: METHODOLOGY / SYSTEM DESIGN

## 4.1 Research Methodology

**Development Approach**: Agile methodology with iterative sprints covering (1) Planning & requirements analysis, (2) Architecture & UI design, (3) Core feature development, (4) Testing & validation, (5) Deployment & refinement.

**Design Principles**: User-centered design, simplicity, privacy by design, accessibility, scalability.

## 4.2 System Architecture

**Three-Layer Architecture**:
1. **Client Layer**: React (TypeScript) SPA with React Router, shadcn/ui, Tailwind CSS
2. **Service Layer**: Firebase (Auth), LiveKit (WebRTC), Beyond Presence (avatars), n8n (automation)
3. **Data Layer**: JSON configuration files for agent personas, knowledge bases, conversation templates

**Component Structure**: Modular organization—components (auth/, layout/, counselors/, calls/, ui/), pages (Landing, Dashboard, VideoSession, Sessions), contexts (AuthContext), lib (firebase.ts, livekit-token.ts), data (agent JSON/knowledge files).

## 4.3 User Flow & Data Design

**User Flow**: Landing → Google Login → (First-time: Onboarding) → Dashboard (6 counselors) → Select → Video/Voice Session → Session History

**Database** (Firebase Firestore):
- **Users**: uid, email, displayName, photoURL, createdAt, lastLoginAt, onboardingComplete
- **Sessions**: sessionId, userId, counselorId, counselorName, category, startTime, endTime, duration, status, roomName

**Agent Configuration**: JSON files with agentId, name, specialty, languageCapabilities (English/Hindi/Hinglish), roleAndObjective, conversationalFlow (5 phases), responsePatterns, knowledge base.

## 4.4 AI Counselor Design

**Six Personas**: Dr. Priya Sharma (Health), Arjun Mehta (Career), Dr. Anjali Reddy (Academic), Rahul Kapoor (Financial), Neha Patel (Social), Rohan Gupta (Personal Development)—each with distinct background, personality, and approach.

**Conversational Framework** (5 phases):
1. Greeting & Rapport (1-2 min): Welcome, confidentiality
2. Understanding & Assessment (5-7 min): Open questions, active listening
3. Exploration & Analysis (5-8 min): Probing questions, patterns
4. Guidance & Strategy (5-7 min): Evidence-based advice, action plans
5. Closure & Follow-up (2-3 min): Summary, encouragement, resources

**Knowledge Base**: Domain expertise, common student issues, response templates, escalation criteria, cultural sensitivity guidelines, resource recommendations.

## 4.5 UI/UX & Security

**Design**: Calm colors (blues/teals), clean typography, generous whitespace, responsive (desktop/tablet/mobile). Key screens: Landing, Dashboard (6 counselor cards), Video Session (full-screen avatar), Session History.

**Security**: OAuth 2.0 (Google), HTTPS/TLS encryption, WebRTC end-to-end encryption, Firebase Security Rules, minimal data collection, user anonymity (UID-only), transparent privacy policy.
