export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-slate-100 font-sans">
      <aside className="w-64 bg-slate-900 text-slate-300 p-6 flex flex-col justify-between hidden md:flex">
        <div>
          <h1 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="text-emerald-400">🍺</span> DépôtManager
          </h1>
          <nav className="space-y-2">
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-white bg-slate-800 rounded-lg font-medium">Tableau de bord</a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg">Ventes & Caisse</a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg">Produits & Stocks</a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg">Casiers & Consignes</a>
          </nav>
        </div>
        <div className="text-xs text-slate-500 text-center">DépôtManager v1.0 — Abidjan, CI</div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-bold text-slate-800">Tableau de Bord — Dépôt Principal</h2>
          <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center">EN</div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm font-medium text-slate-500">Chiffre d'Affaires du Jour</p>
            <p className="text-2xl font-bold text-slate-900 mt-2">345 500 FCFA</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm font-medium text-slate-500">Encaissements Réels</p>
            <p className="text-2xl font-bold text-emerald-600 mt-2">280 000 FCFA</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm font-medium text-slate-500">Crédits en Cours</p>
            <p className="text-2xl font-bold text-amber-600 mt-2">65 500 FCFA</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm font-medium text-slate-500">Casiers Dus</p>
            <p className="text-2xl font-bold text-rose-600 mt-2">18 Casiers</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Activité récente</h3>
          <p className="text-sm text-slate-500">Le système est opérationnel. Prêt pour les tests et la connexion avec Vercel.</p>
        </div>
      </main>
    </div>
  );
}
