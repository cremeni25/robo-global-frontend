// apps/web/_future/b2/dashboard/NotAuthorized.tsx

import React from 'react';

export function NotAuthorized() {
  return (
    <div className="p-6 text-sm">
      <h2 className="text-base font-semibold">Acesso não autorizado</h2>
      <p className="mt-2 text-neutral-text-secondary">
        Esta área é restrita a parceiros autorizados.
      </p>
    </div>
  );
}
