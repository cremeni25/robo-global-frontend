// apps/web/_future/b2/panels/PanelsContainer.tsx

import React from 'react';
import { PerformancePanel } from './PerformancePanel';
import { NichosAltaProcuraPanel } from './NichosAltaProcuraPanel';
import { NichosAltaAssertividadePanel } from './NichosAltaAssertividadePanel';
import { OportunidadesPanel } from './OportunidadesPanel';

export function PanelsContainer() {
  return (
    <section className="space-y-10 pt-10 border-t">
      <PerformancePanel />
      <NichosAltaProcuraPanel />
      <NichosAltaAssertividadePanel />
      <OportunidadesPanel />
    </section>
  );
}
