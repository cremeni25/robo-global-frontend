import React from 'react';

type Props = {
  children: React.ReactNode;
};

export function B2Layout({ children }: Props) {
  return (
    <div style={{ padding: '24px' }}>
      <h1>B2 — Camada de Parceiros</h1>
      {children}
    </div>
  );
}
