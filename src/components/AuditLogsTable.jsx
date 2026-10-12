import React from 'react';
import { Activity } from 'lucide-react';

export default function AuditLogsTable({ logs }) {
  return (
    <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold text-white flex items-center gap-2 text-sm">
          <Activity className="w-4 h-4 text-indigo-400" />
          Registros de Verificación en Backend
        </h3>
        <span className="text-xs text-slate-500 font-mono">Live Sync</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400">
              <th className="pb-3 font-semibold">Evento</th>
              <th className="pb-3 font-semibold">Resultado</th>
              <th className="pb-3 font-semibold">Detalle</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {logs?.map((log) => (
              <tr key={log.id} className="text-slate-300">
                <td className="py-3 font-medium text-white">{log.event}</td>
                <td className="py-3">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[11px] font-semibold border border-emerald-500/20">
                    {log.status}
                  </span>
                </td>
                <td className="py-3 font-mono text-slate-400 text-[11px]">
                  {log.source ? `Src: ${log.source}` : log.user ? `User: ${log.user}` : 'OK'}
                </td>
              </tr>
            )) || (
              <tr>
                <td colSpan="3" className="py-4 text-center text-slate-500">Cargando telemetría...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}