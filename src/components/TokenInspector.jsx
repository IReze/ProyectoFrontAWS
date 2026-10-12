import React from 'react';
import { KeyRound } from 'lucide-react';

export default function TokenInspector({ token }) {
  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
      <div>
        <h3 className="font-semibold text-white flex items-center gap-2 text-sm mb-3">
          <KeyRound className="w-4 h-4 text-amber-400" />
          Token de Sesión JWT
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          Firma criptográfica HMAC-SHA256 almacenada en cliente e inyectada en cada encabezado.
        </p>
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 font-mono text-[10px] text-slate-400 break-all max-h-36 overflow-y-auto">
          {token}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 space-y-1">
        <div>Vigencia: 2 horas</div>
        <div>Cifrado en Tránsito: HTTPS (Let's Encrypt)</div>
      </div>
    </div>
  );
}