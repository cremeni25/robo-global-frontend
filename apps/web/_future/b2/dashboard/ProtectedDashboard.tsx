// apps/web/_future/b2/dashboard/ProtectedDashboard.tsx

import React from 'react';
import { canAccessB2, B2Session } from '../auth/guard';
import DashboardB2 from './Dashboard';
import { NotAuthorized } from './NotAuthorized';

// ⚠️ Mock temporário de sessão (até integrar backend)
const mockSession: B2Session | null = {
  userId: 'user_mock',
  email: 'partner@example.com',
  role: 'partner',
};

export default function ProtectedDashboard() {
  const allowed = canAccessB2(mockSession);

  if (!allowed) {
    return <NotAuthorized />;
  }

  return <DashboardB2 />;
}
