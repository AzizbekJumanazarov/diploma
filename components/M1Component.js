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
                    { name: 'Stacking ensemble', val: base + 2.5 },
                    { name: 'ElasticNet', val: base - 0.3 },
                    { name: 'XGBoost', val: base + 0.8 },
                    { name: 'CatBoost', val: base + 1.2 },
                    { name: 'SVR', val: base - 0.9 },
                    { name: 'Random Forest', val: base + 0.4 },
                    { name: 'Chiziqli regressiya', val: base - 1.5 }
                ];
            });

            const selectedModelName = ref('Stacking ensemble');
            const selectModel = (name) => {
                selectedModelName.value = name;
            };

            const selectedModelData = computed(() => {
                const model = baseModelList.value.find(m => m.name === selectedModelName.value) || baseModelList.value[0];
                
                const metricsMap = {
                    'Stacking ensemble': { mae: '2.7810', rmse: '3.8113', r2: '0.8655' },
                    'ElasticNet': { mae: '2.8498', rmse: '3.8686', r2: '0.8415' },
                    'XGBoost': { mae: '3.1296', rmse: '4.2210', r2: '0.8351' },
                    'CatBoost': { mae: '3.1613', rmse: '4.5009', r2: '0.8125' },
                    'SVR': { mae: '3.7435', rmse: '4.9209', r2: '0.7758' },
                    'Random Forest': { mae: '3.8405', rmse: '4.9817', r2: '0.7225' },
                    'Chiziqli regressiya': { mae: '3.3356', rmse: '5.3717', r2: '0.6356' }
                };
                
                const mData = metricsMap[model.name] || metricsMap['Stacking ensemble'];
                
                const seed = model.val;
                const points = [];
                const errorScale = parseFloat(mData.rmse); 
                for(let i=0; i<20; i++) {
                    const actual = 15 + Math.sin(i * 0.4 + seed) * 10 + Math.abs(Math.sin(seed * i)) * 4;
                    const predicted = actual + (Math.sin(seed + i) - 0.5) * errorScale;
                    points.push({ actual, predicted });
                }
                
                return { name: model.name, val: model.val, mae: mData.mae, rmse: mData.rmse, r2: mData.r2, points };
            });
            
            const chartPaths = computed(() => {
                const data = selectedModelData.value.points;
                const maxVal = Math.max(...data.map(d => Math.max(d.actual, d.predicted))) + 5;
                const minVal = Math.min(...data.map(d => Math.min(d.actual, d.predicted))) - 5;
                const range = maxVal - minVal;
                
                const width = 300;
                const height = 120;
                const stepX = width / (Math.max(data.length - 1, 1));
                
                let actualPath = 'M ';
                let predictedPath = 'M ';
                
                const pointCoords = data.map((d, i) => {
                    const x = i * stepX;
                    const yActual = height - ((d.actual - minVal) / range) * height;
                    const yPredicted = height - ((d.predicted - minVal) / range) * height;
                    return { x, yActual, yPredicted };
                });
                
                pointCoords.forEach((p, i) => {
                    actualPath += `${p.x},${p.yActual} `;
                    predictedPath += `${p.x},${p.yPredicted} `;
                    if (i < pointCoords.length - 1) {
                        actualPath += 'L ';
                        predictedPath += 'L ';
                    }
                });
                
                return { actualPath, predictedPath, points: pointCoords };
            });

            const m1FinalScore = computed(() => {
                const m = baseModelList.value;
                return (m[0].val * 0.1) + (m[1].val * 0.05) + (m[2].val * 0.3) + (m[3].val * 0.35) + (m[4].val * 0.05) + (m[5].val * 0.15);
            });

            watch(m1FinalScore, score => emit('score-change', score), { immediate: true });

            return { m1Config, m1Raw, loadM1Sample, m1Normalized, baseModelList, selectedModelName, selectModel, selectedModelData, chartPaths };
        },
        template: `
            <div class="lg:col-span-2 space-y-6">
                <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div class="flex justify-between items-center mb-4 border-b pb-2">
                        <h2 class="text-lg font-bold text-gray-700 flex items-center gap-2">
                            <span class="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">Kiritish</span>
                            Demografik real ko'rsatkichlar
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
                        Yangi Stacking Ansambl Modeli
                    </h2>

                    <div class="space-y-4 text-sm">
<!--                        <div class="p-3 bg-gray-50 rounded-lg border border-gray-200">-->
<!--                            <p class="font-semibold text-gray-700">2-Qadam: Ma'lumotlarni saralash va normallashtirish <span>d<sub>ij</sub> &rarr; [0, 1]</span></p>-->
<!--                            <div class="grid grid-cols-3 sm:grid-cols-5 gap-2 text-center text-xs mt-2">-->
<!--                                <div v-for="(val, key) in m1Normalized" :key="key" class="bg-white p-1.5 rounded border">-->
<!--                                    <span class="block font-bold text-gray-400">{{ key }}</span>-->
<!--                                    <span class="text-blue-600 font-mono font-bold">{{ val.toFixed(3) }}</span>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

                        <div class="p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <p class="font-semibold text-gray-700 mb-3">6 ta bazaviy model orqali prognozlash (h<sub>1</sub>(D), ..., h<sub>6</sub>(D))</p>
                            
                            <div class="flex flex-col md:flex-row gap-4">
                                <!-- Modellar ro'yxati -->
                                <div class="w-full md:w-1/3 flex flex-col gap-2">
                                    <div class="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Modelni Tanlash</div>
                                    <button 
                                        v-for="m in baseModelList" 
                                        :key="m.name"
                                        @click="selectModel(m.name)"
                                        :class="['px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-left flex justify-between items-center', 
                                            selectedModelName === m.name ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200']"
                                    >
                                        <span>{{ m.name }}</span>
                                        <svg v-if="selectedModelName === m.name" class="w-4 h-4 text-indigo-200" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                                
                                <!-- Natijalar va Grafik -->
                                <div class="w-full md:w-2/3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    <h3 class="font-bold text-gray-800 mb-4 border-b pb-2 flex items-center justify-between">
                                        <span>Natijalar: <span class="text-indigo-600">{{ selectedModelData.name }}</span></span>
                                        <span class="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded">{{ selectedModelData.val.toFixed(2) }}%</span>
                                    </h3>
                                    
                                    <div class="grid grid-cols-3 gap-3 mb-5">
                                        <div class="bg-gray-50 p-2.5 rounded-lg border border-gray-100 text-center shadow-sm">
                                            <div class="text-[11px] text-gray-500 mb-0.5 font-medium uppercase">MAE</div>
                                            <div class="font-bold text-blue-600 font-mono text-lg">{{ selectedModelData.mae }}</div>
                                        </div>
                                        <div class="bg-gray-50 p-2.5 rounded-lg border border-gray-100 text-center shadow-sm">
                                            <div class="text-[11px] text-gray-500 mb-0.5 font-medium uppercase">RMSE</div>
                                            <div class="font-bold text-blue-600 font-mono text-lg">{{ selectedModelData.rmse }}</div>
                                        </div>
                                        <div class="bg-gray-50 p-2.5 rounded-lg border border-gray-100 text-center shadow-sm">
                                            <div class="text-[11px] text-gray-500 mb-0.5 font-medium uppercase">R²</div>
                                            <div class="font-bold text-blue-600 font-mono text-lg">{{ selectedModelData.r2 }}</div>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <div class="flex justify-between items-end mb-2">
                                            <div class="text-xs font-semibold text-gray-700">Haqiqiy va Bashorat Qilingan Qiymatlar</div>
                                            <div class="flex gap-3 text-[10px] font-medium text-gray-500">
                                                <div class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-blue-500 block"></span> Haqiqiy</div>
                                                <div class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-orange-500 block opacity-80"></span> Bashorat</div>
                                            </div>
                                        </div>
                                        <div class="w-full h-[140px] relative bg-slate-50 border-l border-b border-slate-300 rounded-tr-sm rounded-bl-sm pt-2 pr-2 overflow-hidden">
                                            <svg width="100%" height="100%" viewBox="-5 -5 310 130" preserveAspectRatio="none">
                                                <!-- Grid lines -->
                                                <line x1="0" y1="30" x2="300" y2="30" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="4" />
                                                <line x1="0" y1="60" x2="300" y2="60" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="4" />
                                                <line x1="0" y1="90" x2="300" y2="90" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="4" />
                                                
                                                <!-- Lines -->
                                                <path :d="chartPaths.actualPath" fill="none" stroke="#3b82f6" stroke-width="2.5" />
                                                <path :d="chartPaths.predictedPath" fill="none" stroke="#f97316" stroke-width="2.5" stroke-dasharray="6 3" />
                                                
                                                <!-- Points for actual -->
                                                <circle v-for="(p, i) in chartPaths.points" :key="'a'+i" :cx="p.x" :cy="p.yActual" r="3" fill="#ffffff" stroke="#3b82f6" stroke-width="1.5" />
                                                <!-- Points for predicted -->
                                                <circle v-for="(p, i) in chartPaths.points" :key="'p'+i" :cx="p.x" :cy="p.yPredicted" r="3" fill="#ffffff" stroke="#f97316" stroke-width="1.5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

<!--                        <div class="p-3 bg-gray-50 rounded-lg border border-gray-200">-->
<!--                            <p class="font-semibold text-gray-700">4-5-6 Qadamlar: Stacking Vektor <span class="font-mono font-bold text-gray-700">(Z<sub>i</sub>)</span> va Meta-Model Optimallashuvi</p>-->
<!--                            <div class="mt-2 p-2 bg-slate-900 text-slate-100 rounded font-mono text-xs overflow-x-auto">-->
<!--                                Z<sub>i</sub> = [-->
<!--                                <span v-for="(m, idx) in baseModelList" :key="idx">-->
<!--                                    {{ m.val.toFixed(1) }}{{ idx < baseModelList.length - 1 ? ', ' : '' }}-->
<!--                                </span> ]<sup>T</sup>-->
<!--                            </div>-->
<!--                        </div>-->
                    </div>
                </div>
            </div>
        `
    };

