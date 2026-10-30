# CHAPTER 5: IMPLEMENTATION

## 5.1 Development Environment

**Tools**: VS Code (TypeScript, ESLint, Prettier extensions), Git/GitHub (version control), npm (package manager), Vite (build tool with HMR), Chrome DevTools (debugging/profiling).

**Workflow**: `npm run dev` (local server) → Code changes → Auto-reload → Debug → Git commit → Pull request → Merge → `npm run build` → Deploy to hosting.

## 5.2 Technology Stack Implementation

### Frontend Framework
**React 18 + TypeScript**: Component-based architecture with type safety.

```typescript
interface CounselorCardProps {
  id: string;
  name: string;
  specialty: string;
}

export function CounselorCard({ id, name, specialty }: CounselorCardProps) {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/video-session/${id}`)}>
      <h3>{name}</h3>
      <p>{specialty}</p>
    </div>
  );
}
```

### UI & Styling
**shadcn/ui + Radix UI**: Pre-built accessible components (Button, Card, Dialog)  
**Tailwind CSS**: Utility-first styling for responsive design

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* 1 column mobile, 2 tablet, 3 desktop */}
</div>
```

### Routing
**React Router v6**: Client-side routing with protected routes using `ProtectedRoute` wrapper component for authentication guards.

## 5.3 Core Module Implementation

### Authentication Module
**Firebase Authentication**: Google OAuth with `signInWithPopup`, `AuthContext` for global state management, `onAuthStateChanged` for session persistence.

```typescript
// AuthContext.tsx
export function useAuth() {
  const context = useContext(AuthContext);
  return context; // { user, loading }
}
```

### Video Session Module
**LiveKit Integration**: `@livekit/components-react` for WebRTC connections, JWT token generation via backend endpoint, room creation/management, session duration tracking.

### Dashboard Module
**Counselor Selection**: Six persona cards (CounselorCard components), responsive grid layout, navigation to video/voice session options.

### Session Management
**Firebase Firestore**: Stores session history (userId, counselorId, startTime, endTime, duration, category), queries for user session list.

### Voice Call Automation
**n8n Workflows**: Webhook-triggered automation, form submission handling, callback scheduling, confirmation emails.

## 5.4 Implementation Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| LiveKit token generation | Created secure backend endpoint for JWT creation |
| Beyond Presence avatar sync | Configured audio streaming pipeline, lip-sync API |
| Authentication state persistence | Used AuthContext with Firebase `onAuthStateChanged` |
| Responsive layout | Tailwind breakpoints (sm/md/lg/xl), mobile-first |
| Error handling | Try-catch blocks, React Error Boundaries, user-friendly toast notifications |

## 5.5 Code Quality

**TypeScript**: Strict mode enabled, comprehensive interfaces for props/state  
**ESLint/Prettier**: Enforced code style consistency  
**Component Structure**: Modular organization (auth/, layout/, counselors/, calls/, ui/)  
**Testing**: Manual testing across devices/browsers (Chrome, Firefox, Safari, Edge)
