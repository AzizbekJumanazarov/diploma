const M3Component = {
        emits: ['score-change'],
        setup(_, { emit }) {
            const m3Raw = ref({
                x1: 0.72, x2: 0.45, x3: 0.80,
                x4: 0.15, x5: 0.30, x6: 0.22,
                x7: 0.68, x8: 0.55, x9: 0.60
            });
            const loadM3Sample = () => {
                m3Raw.value = {
                    x1: 0.72, x2: 0.45, x3: 0.80,
                    x4: 0.15, x5: 0.30, x6: 0.22,
                    x7: 0.68, x8: 0.55, x9: 0.60
                };
            };
            const validateM3Field = (key) => {
                if (m3Raw.value[key] < 0) m3Raw.value[key] = 0;
                if (m3Raw.value[key] > 1) m3Raw.value[key] = 1;
            };
            const getM3Weight = (index) => {
                if (index <= 3) return 11.6;
                if (index <= 6) return 11.6;
                return 10.0;
            };
            const m3SubScores = computed(() => {
                const r = m3Raw.value;
                return {
                    b1: ((r.x1 || 0) + (r.x2 || 0) + (r.x3 || 0)) / 3,
                    b2: ((r.x4 || 0) + (r.x5 || 0) + (r.x6 || 0)) / 3,
                    b3: ((r.x7 || 0) + (r.x8 || 0) + (r.x9 || 0)) / 3
                };
            });
            const m3FinalScore = computed(() => {
                const sub = m3SubScores.value;
                const globalScore = (sub.b1 * 0.35) + (sub.b2 * 0.35) + (sub.b3 * 0.30);
                return globalScore * 100;
            });

            watch(m3FinalScore, score => emit('score-change', score), { immediate: true });

            return { m3Raw, loadM3Sample, validateM3Field, getM3Weight, m3SubScores };
        },
        template: `
            <div class="lg:col-span-2 space-y-6">
                <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div class="flex justify-between items-center mb-4 border-b pb-2">
                        <h2 class="text-lg font-bold text-gray-700 flex items-center gap-2">
                            <span class="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">M3 Modeli</span>
                            Dinamik savollar va indikatorlar to'plami (Massiv $x_1 \\dots x_9$)
                        </h2>
                        <button @click="loadM3Sample" class="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded transition font-medium">
                            Standart qiymatlarni tiklash
                        </button>
                    </div>

                    <p class="text-xs text-gray-500 mb-4 bg-amber-50 p-2 rounded border border-amber-200">
                        <strong>Eslatma:</strong> Bu bo'limdagi barcha maydonlar istalgan ijtimoiy so'rovnoma savollarini qabul qilishi mumkinligi sababli, qiymatlar to'g'ridan-to'g'ri normallashgan holda <strong>0.00 va 1.00 orasida</strong> kiritiladi.
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div v-for="i in 9" :key="i" class="bg-gray-50 p-3 rounded-lg border border-gray-200 flex flex-col justify-between">
                            <div class="flex justify-between items-center mb-2">
                                <span class="text-sm font-bold text-indigo-700 font-mono">Input field x{{ i }}</span>
                                <span class="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-mono">
                                    Vazni: {{ getM3Weight(i) }}%
                                </span>
                            </div>
                            <div class="space-y-2">
                                <input type="number"
                                       v-model.number="m3Raw['x' + i]"
                                       min="0"
                                       max="1"
                                       step="0.01"
                                       @input="validateM3Field('x' + i)"
                                       class="w-full bg-white border border-gray-300 rounded-md p-2 text-center text-base font-mono font-bold focus:ring-2 focus:ring-indigo-500 outline-none">
                                <input type="range"
                                       v-model.number="m3Raw['x' + i]"
                                       min="0"
                                       max="1"
                                       step="0.01"
                                       class="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 space-y-4">
                    <h3 class="text-base font-bold text-gray-700 border-b pb-2 flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                        M3 Modeli Ichki Algoritmik Hisob-Kitobi ($B^1, B^2, B^3$ Komponentlari)
                    </h3>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div class="p-3 bg-indigo-50 rounded border border-indigo-200 text-center">
                            <span class="text-xs font-bold text-indigo-800 block">Komponent 1 (x1, x2, x3)</span>
                            <span class="text-xl font-mono font-bold text-indigo-700">{{ m3SubScores.b1.toFixed(3) }}</span>
                            <span class="text-[10px] text-indigo-600 block mt-0.5">Global vazni: 35%</span>
                        </div>
                        <div class="p-3 bg-orange-50 rounded border border-orange-200 text-center">
                            <span class="text-xs font-bold text-orange-800 block">Komponent 2 (x4, x5, x6)</span>
                            <span class="text-xl font-mono font-bold text-orange-700">{{ m3SubScores.b2.toFixed(3) }}</span>
                            <span class="text-[10px] text-orange-600 block mt-0.5">Global vazni: 35%</span>
                        </div>
                        <div class="p-3 bg-cyan-50 rounded border border-cyan-200 text-center">
                            <span class="text-xs font-bold text-cyan-800 block">Komponent 3 (x7, x8, x9)</span>
                            <span class="text-xl font-mono font-bold text-cyan-700">{{ m3SubScores.b3.toFixed(3) }}</span>
                            <span class="text-[10px] text-cyan-600 block mt-0.5">Global vazni: 30%</span>
                        </div>
                    </div>

                    <div class="mt-6 pt-4 border-t border-gray-200">
                        <h4 class="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide flex items-center gap-1.5">
                            <svg class="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                            Ma'naviy muhit parametrik koridori va uslublar tahlili (445 ta mahalla kesimida)
                        </h4>
                        <p class="text-xs text-gray-600 mb-4 leading-relaxed">
                            Slaydlar va ilmiy asoslarga ko'ra, ma'naviy muhitning parametrik bahosi vazn koeffitsiyentlarisiz <code class="bg-gray-100 px-1 py-0.5 rounded text-blue-600 font-mono font-bold">[0.15, 0.75]</code> (ko‘k rangli grafik) oraliqda o'zgaradi.
                            Og'irlik koeffitsiyentlari **Reytinglash usuli** bilan aniqlanganda grafik minimal <code class="bg-gray-100 px-1 py-0.5 rounded text-rose-600 font-mono font-bold">0.0011</code> va maksimal <code class="bg-gray-100 px-1 py-0.5 rounded text-rose-600 font-mono font-bold">0.0600</code> (qizil koordinata) tebranishini, **Ballar berish usulida** esa <code class="bg-gray-100 px-1 py-0.5 rounded text-emerald-600 font-mono font-bold">[0.0013, 0.0600]</code> (yashil chiziq) dinamikasini taqdim etadi.
                        </p>
                    </div>
                </div>
            </div>
        `
    };

