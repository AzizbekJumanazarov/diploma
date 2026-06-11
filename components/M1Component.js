const M1Component = {
        emits: ['score-change'],
        props: {
            selectedData: { type: Object, default: null }
        },
        setup(props, { emit }) {
            const { watch: vWatch } = Vue;
            const m1Config = [
                { id: 'x1', label: 'Korxona va tashkilotlarda ishlovchilar soni' },
                { id: 'x2', label: 'Tadbirkorlik bilan band bo‘lganlar' },
                { id: 'x3', label: 'Kasanachilik bilan band bo‘lganlar soni' },
                { id: 'x4', label: 'Milliy hunarmandchilik bilan shug‘ullanuvchilar' },
                { id: 'x5', label: 'Savdo-sotiq bilan shug‘ullanuvchilar soni' },
                { id: 'x6', label: 'Chorvachilik va parrandachilik bilan bandlar' },
                { id: 'x7', label: 'Tadbirkorlikning boshqa sohalarida bandlar' },
                { id: 'x8', label: 'Xorijga ish izlab ketganlar soni' },
                { id: 'x9', label: 'Doimiy ish bilan band bo‘lganlar soni' }
            ];
            const m1Raw = ref({ x1: '', x2: '', x3: '', x4: '', x5: '', x6: '', x7: '', x8: '', x9: '' });

            // Tashqaridan yuklangan ma'lumot o'zgarganda inputlarni to'ldirish
            vWatch(() => props.selectedData, (newData) => {
                if (newData && newData.m1) {
                    m1Raw.value = { ...newData.m1 };
                } else if (!newData) {
                    m1Raw.value = { x1: '', x2: '', x3: '', x4: '', x5: '', x6: '', x7: '', x8: '', x9: '' };
                }
            }, { deep: true });

            const loadM1Sample = () => {
                m1Raw.value = { x1: 2371, x2: 649, x3: 194, x4: 726, x5: 182, x6: 486, x7: 149, x8: 312, x9: 189 };
            };
            const m1Normalized = computed(() => {
                const bounds = {
                    x1: {min: 1500, max: 4500}, x2: {min: 400, max: 1000}, x3: {min: 100, max: 500},
                    x4: {min: 500, max: 1500},  x5: {min: 100, max: 300},  x6: {min: 0, max: 700},
                    x7: {min: 100, max: 1000},  x8: {min: 0, max: 600},    x9: {min: 50, max: 300}
                };
                const norm = {};
                for (const key in m1Raw.value) {
                    const b = bounds[key];
                    const res = ((m1Raw.value[key] || 0) - b.min) / (b.max - b.min);
                    norm[key] = Math.min(Math.max(res, 0), 1);
                }
                return norm;
            });
            const baseModelList = computed(() => {
                const n = m1Normalized.value;
                const base = 78.45 + (n.x1 * 2) - (n.x8 * 1.5) + (n.x2 * 1);
                return [
                    { name: 'Linear Regression', val: base - 0.5 },
                    { name: 'ElasticNet', val: base - 0.3 },
                    { name: 'XGBoost', val: base + 0.8 },
                    { name: 'CatBoost', val: base + 1.2 },
                    { name: 'SVR (Support Vector)', val: base - 0.9 },
                    { name: 'Random Forest', val: base + 0.4 }
                ];
            });
            const m1FinalScore = computed(() => {
                const m = baseModelList.value;
                return (m[0].val * 0.1) + (m[1].val * 0.05) + (m[2].val * 0.3) + (m[3].val * 0.35) + (m[4].val * 0.05) + (m[5].val * 0.15);
            });

            watch(m1FinalScore, score => emit('score-change', score), { immediate: true });

            return { m1Config, m1Raw, loadM1Sample, m1Normalized, baseModelList };
        },
        template: `
            <div class="lg:col-span-2 space-y-6">
                <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div class="flex justify-between items-center mb-4 border-b pb-2">
                        <h2 class="text-lg font-bold text-gray-700 flex items-center gap-2">
                            <span class="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">Kiritish</span>
                            1-Qadam: Demografik real ko'rsatkichlar
                        </h2>
<!--                        <button @click="loadM1Sample" class="text-xs bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded transition font-medium">-->
<!--                            1-ID mahalla ma'lumotlarini yuklash-->
<!--                        </button>-->
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div v-for="input in m1Config" :key="input.id" class="flex flex-col">
                            <label class="text-xs font-medium text-gray-600 mb-1 leading-tight">
                                <span class="font-bold text-emerald-600">[{{ input.id }}]</span> {{ input.label }}
                            </label>
                            <input type="number" v-model.number="m1Raw[input.id]" class="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none">
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h2 class="text-lg font-bold text-gray-700 mb-4 border-b pb-2 flex items-center gap-2">
                        <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Algoritm</span>
                        Yangi Stacking Ansambl Modeli Qadamlari
                    </h2>

                    <div class="space-y-4 text-sm">
                        <div class="p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <p class="font-semibold text-gray-700">2-Qadam: Ma'lumotlarni saralash va normallashtirish <span>d<sub>ij</sub> &rarr; [0, 1]</span></p>
                            <div class="grid grid-cols-3 sm:grid-cols-5 gap-2 text-center text-xs mt-2">
                                <div v-for="(val, key) in m1Normalized" :key="key" class="bg-white p-1.5 rounded border">
                                    <span class="block font-bold text-gray-400">{{ key }}</span>
                                    <span class="text-blue-600 font-mono font-bold">{{ val.toFixed(3) }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <p class="font-semibold text-gray-700">3-Qadam: 6 ta bazaviy model orqali prognozlash (h<sub>1</sub>(D), ..., h<sub>6</sub>(D))</p>
                            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                                <div v-for="m in baseModelList" :key="m.name" class="bg-white p-2 rounded border text-center">
                                    <span class="text-[11px] text-gray-500 block leading-tight h-8 flex items-center justify-center">{{ m.name }}</span>
                                    <span class="font-mono font-bold text-purple-700 text-base">{{ m.val.toFixed(2) }}%</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <p class="font-semibold text-gray-700">4-5-6 Qadamlar: Stacking Vektor <span class="font-mono font-bold text-gray-700">(Z<sub>i</sub>)</span> va Meta-Model Optimallashuvi</p>
                            <div class="mt-2 p-2 bg-slate-900 text-slate-100 rounded font-mono text-xs overflow-x-auto">
                                Z<sub>i</sub> = [
                                <span v-for="(m, idx) in baseModelList" :key="idx">
                                    {{ m.val.toFixed(1) }}{{ idx < baseModelList.length - 1 ? ', ' : '' }}
                                </span> ]<sup>T</sup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    };

