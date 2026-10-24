'use client';
import { useState } from 'react';
import { LayoutDashboard, Package, ShoppingCart, Users, Layers, DollarSign, AlertTriangle, Bell } from 'lucide-react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-slate-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 p-6 flex flex-col justify-between hidden md:flex shadow-lg">
        <div>
          <div className="text-xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="text-emerald-400 text-2xl">🍺</span> DépôtManager
          </div>
          <nav className="space-y-2">
            <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition ${activeTab === 'dashboard' ? 'bg-slate-800 text-white' : 'hover:bg-slate-800'}`}>
              <LayoutDashboard className="w-5 h-5 text-emerald-400" /> Tableau de bord
            </button>
            <button onClick={() => setActiveTab('sales')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition ${activeTab === 'sales' ? 'bg-slate-800 text-white' : 'hover:bg-slate-800'}`}>
              <ShoppingCart className="w-5 h-5 text-sky-400" /> Ventes & Caisse
            </button>
            <button onClick={() => setActiveTab('stock')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition ${activeTab === 'stock' ? 'bg-slate-800 text-white' : 'hover:bg-slate-800'}`}>
              <Package className="w-5 h-5 text-amber-400" /> Produits & Stocks
            </button>
            <button onClick={() => setActiveTab('crates')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition ${activeTab === 'crates' ? 'bg-slate-800 text-white' : 'hover:bg-slate-800'}`}>
              <Layers className="w-5 h-5 text-purple-400" /> Casiers & Consignes
            </button>
            <button onClick={() => setActiveTab('customers')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition ${activeTab === 'customers' ? 'bg-slate-800 text-white' : 'hover:bg-slate-800'}`}>
              <Users className="w-5 h-5 text-rose-400" /> Clients & Crédits
            </button>
          </nav>
        </div>
        <div className="p-4 bg-slate-800/50 rounded-xl text-xs text-slate-400 text-center">
          DépôtManager v1.0<br />Abidjan, Côte d'Ivoire 🇨🇮
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm">
          <h1 className="text-xl font-bold text-slate-800">Dépôt Principal — Cocody (Abidjan)</h1>
          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 text-slate-500 cursor-pointer hover:text-slate-800" />
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shadow-md">
              EN
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 space-y-8">
          {/* KPI Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <p className="text-sm font-medium text-slate-500">Chiffre d'Affaires du Jour</p>
              <p className="text-3xl font-extrabold text-slate-900 mt-2">345 500 <span className="text-lg font-normal text-slate-500">FCFA</span></p>
              <span className="text-xs text-emerald-600 font-semibold mt-2 inline-block">📈 +12% vs hier</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <p className="text-sm font-medium text-slate-500">Encaissements Réels</p>
              <p className="text-3xl font-extrabold text-emerald-600 mt-2">280 000 <span className="text-lg font-normal text-slate-500">FCFA</span></p>
              <span className="text-xs text-slate-500 mt-2 inline-block">Espèces & Mobile Money</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <p className="text-sm font-medium text-slate-500">Crédits Clients en Cours</p>
              <p className="text-3xl font-extrabold text-amber-600 mt-2">65 500 <span className="text-lg font-normal text-slate-500">FCFA</span></p>
              <span className="text-xs text-amber-600 font-semibold mt-2 inline-block">⚠️ 3 clients à relancer</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <p className="text-sm font-medium text-slate-500">Casiers Dus par Clients</p>
              <p className="text-3xl font-extrabold text-rose-600 mt-2">18 <span className="text-lg font-normal text-slate-500">Casiers</span></p>
              <span className="text-xs text-rose-600 font-semibold mt-2 inline-block">📦 Solde emballages</span>
            </div>
          </div>

          {/* Recent Sales Table & Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-6">Dernières Ventes Enregistrées</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      <th className="pb-3">Heure</th>
                      <th className="pb-3">Client</th>
                      <th className="pb-3">Montant</th>
                      <th className="pb-3">Paiement</th>
                      <th className="pb-3">Statut</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-slate-100">
                    <tr>
                      <td className="py-4 text-slate-600">14:32</td>
                      <td className="py-4 font-semibold text-slate-900">Bar Le Palmier</td>
                      <td className="py-4 font-bold">45 000 FCFA</td>
                      <td className="py-4"><span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">Orange Money</span></td>
                      <td className="py-4"><span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">Payé</span></td>
                    </tr>
                    <tr>
                      <td className="py-4 text-slate-600">13:15</td>
                      <td className="py-4 font-semibold text-slate-900">Maquis La Joie</td>
                      <td className="py-4 font-bold">120 000 FCFA</td>
                      <td className="py-4"><span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-semibold">Wave</span></td>
                      <td className="py-4"><span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">Payé</span></td>
                    </tr>
                    <tr>
                      <td className="py-4 text-slate-600">11:40</td>
                      <td className="py-4 font-semibold text-slate-900">Kouassi Jean</td>
                      <td className="py-4 font-bold">22 500 FCFA</td>
                      <td className="py-4"><span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">Espèces</span></td>
                      <td className="py-4"><span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">Crédit</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Alerts Widget */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" /> Alertes Stocks
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl">
                    <p className="text-sm font-bold text-rose-800">Coca-Cola 65cl (Casier)</p>
                    <p className="text-xs text-rose-600 mt-1">Stock critique : 3 casiers restants</p>
                  </div>
                  <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl">
                    <p className="text-sm font-bold text-amber-800">Fanta Orange 30cl</p>
                    <p className="text-xs text-amber-600 mt-1">Stock faible : 6 packs restants</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition shadow-md">
                Gérer les stocks
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
