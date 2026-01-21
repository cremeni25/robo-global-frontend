// apps/web/_future/b2/auth/guard.ts

export type B2Session = {
  userId: string;
  email: string;
  role: 'partner';
};

/**
 * Regra soberana de acesso à B2
 * - sessão deve existir
 * - role deve ser partner
 */
export function canAccessB2(session: B2Session | null): boolean {
  if (!session) return false;
  if (!session.userId) return false;
  if (session.role !== 'partner') return false;
  return true;
}
