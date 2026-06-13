const M2Component = {
        emits: ['score-change'],
        props: {
            selectedData: { type: Object, default: null }
        },
        setup(props, { emit }) {
            const { watch: vWatch } = Vue;
            const m2ConfigGroup1 = [
                { id: 'child_pop', label: '0–18 yoshdagi bolalar soni', min: 1000, max: 4000, w: 0.10, sign: 1 },
                { id: 'active_pop', label: 'Faol yoshdagilar (18–60) soni', min: 3000, max: 8000, w: 0.12, sign: 1 },
                { id: 'old_pop', label: 'Keksalar (60+) soni', min: 500, max: 3000, w: 0.08, sign: 1 },
                { id: 'chronic_sick', label: 'Surunkali kasallik bilan ro‘yxatda turganlar', min: 200, max: 1500, w: 0.18, sign: -1 },
                { id: 'prev_check', label: 'Profilaktik tibbiy ko‘rikdan o‘tgan aholi soni', min: 1000, max: 8000, w: 0.20, sign: 1 },
                { id: 'doc_ratio', label: 'Bir shifokorga to‘g‘ri keladigan aholi soni', min: 300, max: 1500, w: 0.12, sign: -1 },
                { id: 'med_stations', label: 'Tibbiyot punktlari / poliklinikalar soni', min: 0, max: 5, w: 0.08, sign: 1 },
                { id: 'med_satisfaction', label: 'Tibbiy xizmatdan qoniqish darajasi (%)', min: 20, max: 100, w: 0.12, sign: 1 }
            ];
            const m2ConfigGroup2 = [
                { id: 'sport_grounds', label: 'Sport maydonchalari soni', min: 0, max: 30, w: 0.15, sign: 1 },
                { id: 'sport_grounds_1000', label: 'Sport maydonchalari / 1000 aholi', min: 0.1, max: 3.0, w: 0.20, sign: 1 },
                { id: 'sport_clubs', label: 'Sport to‘garaklari soni', min: 0, max: 40, w: 0.15, sign: 1 },
                { id: 'kids_in_sport', label: 'Sport to‘garaklarida qatnashayotgan bolalar', min: 100, max: 2000, w: 0.30, sign: 1 },
                { id: 'healthy_events', label: 'Sog‘lom turmush tarzini targ‘ib qilish tadbirlari', min: 5, max: 100, w: 0.20, sign: 1 }
            ];
            const m2ConfigGroup3 = [
                { id: 'bad_habits', label: 'Nosog‘lom odatlar ulushi (%)', min: 5, max: 60, w: 0.40, sign: -1 },
                { id: 'healthy_diet', label: 'Sog‘lom ovqatlanish dasturlariga qamrov (%)', min: 10, max: 100, w: 0.30, sign: 1 },
                { id: 'eco_events', label: 'Ekologik tadbirlarda ishtirok (%)', min: 10, max: 100, w: 0.30, sign: 1 }
            ];
            const m2Raw = ref({
                total_pop: '', child_pop: '', active_pop: '', old_pop: '',
                chronic_sick: '', prev_check: '', sport_grounds: '', sport_grounds_1000: '',
                sport_clubs: '', kids_in_sport: '', doc_ratio: '', med_stations: '',
                med_satisfaction: '', healthy_events: '', bad_habits: '',
                healthy_diet: '', eco_events: ''
            });

            // Tashqaridan yuklangan ma'lumot o'zgarganda inputlarni to'ldirish
            vWatch(() => props.selectedData, (newData) => {
                if (newData && newData.m2) {
                    m2Raw.value = { ...newData.m2 };
                } else if (!newData) {
                    m2Raw.value = {
                        total_pop: '', child_pop: '', active_pop: '', old_pop: '',
                        chronic_sick: '', prev_check: '', sport_grounds: '', sport_grounds_1000: '',
                        sport_clubs: '', kids_in_sport: '', doc_ratio: '', med_stations: '',
                        med_satisfaction: '', healthy_events: '', bad_habits: '',
                        healthy_diet: '', eco_events: ''
                    };
                }
            }, { deep: true });

            const loadM2Sample = () => {
                m2Raw.value = {
                    total_pop: 12276, child_pop: 2428, active_pop: 5993, old_pop: 1797,
                    chronic_sick: 694, prev_check: 4513, sport_grounds: 13, sport_grounds_1000: 1.059,
                    sport_clubs: 17, kids_in_sport: 910, doc_ratio: 714, med_stations: 1,
                    med_satisfaction: 49.19, healthy_events: 62, bad_habits: 27.01,
                    healthy_diet: 70.86, eco_events: 71.72
                };
            };
            const parseComponent = (configGroup, dataSource) => {
                let score = 0;
                configGroup.forEach(item => {
                    const val = dataSource[item.id] || 0;
                    let normalized = (val - item.min) / (item.max - item.min);
                    normalized = Math.min(Math.max(normalized, 0), 1);
                    if (item.sign === -1) {
                        normalized = 1 - normalized;
                    }
                    score += normalized * item.w;
                });
                return score;
            };
            const m2SubScores = computed(() => ({
                a1: parseComponent(m2ConfigGroup1, m2Raw.value),
                a2: parseComponent(m2ConfigGroup2, m2Raw.value),
                a3: parseComponent(m2ConfigGroup3, m2Raw.value)
            }));
            const m2FinalScore = computed(() => {
                const sub = m2SubScores.value;
                const globalScore = (sub.a1 * 0.35) + (sub.a2 * 0.35) + (sub.a3 * 0.30);
                return globalScore * 100;
            });

            watch(m2FinalScore, score => emit('score-change', score), { immediate: true });

            return { m2ConfigGroup1, m2ConfigGroup2, m2ConfigGroup3, m2Raw, loadM2Sample, m2SubScores };
        },
        template: `
            <div class="lg:col-span-2 space-y-6">
                <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div class="flex justify-between items-center mb-4 border-b pb-2">
                        <h2 class="text-lg font-bold text-gray-700 flex items-center gap-2">
                            <span class="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">M2 Modeli</span>
                            Sog‘lomlashtiruvchi real ko‘rsatkichlar majmuasi (Parametrik Koridor)
                        </h2>
<!--                        <button @click="loadM2Sample" class="text-xs bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 rounded transition font-medium">-->
<!--                            1-ID mahalla real ma'lumotlarini yuklash-->
<!--                        </button>-->
                    </div>

                    <div class="space-y-6">
                        <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h3 class="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wider flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-gray-400"></span> Umumiy demografik baza
                            </h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex flex-col">
                                    <label class="text-xs font-medium text-gray-600 mb-1">Mahalladagi umumiy aholining soni (X1)</label>
                                    <input type="number" v-model.number="m2Raw.total_pop" class="w-full bg-white border border-gray-300 rounded-md p-2 text-sm font-bold focus:ring-2 focus:ring-teal-500 outline-none">
                                </div>
                            </div>
                        </div>

                        <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h3 class="text-sm font-bold text-emerald-800 mb-3 uppercase tracking-wider flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-emerald-500"></span> 1. Tibbiy-profilaktik faoliyat ko'rsatkichlari (A¹)
                            </h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div v-for="input in m2ConfigGroup1" :key="input.id" class="flex flex-col">
                                    <label class="text-xs font-medium text-gray-600 mb-1">
                                        {{ input.label }} <span class="text-slate-400 font-mono text-[10px]" v-if="input.sign === -1">(sign: -1)</span>
                                    </label>
                                    <input type="number" v-model.number="m2Raw[input.id]" class="w-full bg-white border border-gray-300 rounded-md p-2 text-sm font-mono focus:ring-2 focus:ring-teal-500 outline-none">
                                </div>
                            </div>
                        </div>

                        <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h3 class="text-sm font-bold text-blue-800 mb-3 uppercase tracking-wider flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-blue-500"></span> 2. Jismoniy-sog'lomlashtirish va Sport (A²)
                            </h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div v-for="input in m2ConfigGroup2" :key="input.id" class="flex flex-col">
                                    <label class="text-xs font-medium text-gray-600 mb-1">
                                        {{ input.label }}
                                    </label>
                                    <input type="number" v-model.number="m2Raw[input.id]" class="w-full bg-white border border-gray-300 rounded-md p-2 text-sm font-mono focus:ring-2 focus:ring-blue-500 outline-none">
                                </div>
                            </div>
                        </div>

                        <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h3 class="text-sm font-bold text-purple-800 mb-3 uppercase tracking-wider flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-purple-500"></span> 3. Ijtimoiy-ekologik va zararli odatlar (A³)
                            </h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div v-for="input in m2ConfigGroup3" :key="input.id" class="flex flex-col">
                                    <label class="text-xs font-medium text-gray-600 mb-1">
                                        {{ input.label }} <span class="text-slate-400 font-mono text-[10px]" v-if="input.sign === -1">(sign: -1)</span>
                                    </label>
                                    <input type="number" v-model.number="m2Raw[input.id]" class="w-full bg-white border border-gray-300 rounded-md p-2 text-sm font-mono focus:ring-2 focus:ring-purple-500 outline-none">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

<!--                <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 space-y-4">-->
<!--                    <h3 class="text-base font-bold text-gray-700 border-b pb-2 flex items-center gap-2">-->
<!--                        <span class="w-2 h-2 rounded-full bg-amber-500"></span>-->
<!--                        M2 Modeli Ichki Algoritmik Hisob-Kitobi <span class="font-mono font-bold text-teal-700">(A<sup>1</sup>, A<sup>2</sup>, A<sup>3</sup>)</span>-->
<!--                    </h3>-->

<!--                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">-->
<!--                        <div class="p-3 bg-emerald-50 rounded border border-emerald-200 text-center">-->
<!--                            <span class="text-xs font-bold text-emerald-800 block">Tibbiy-profilaktik (A¹)</span>-->
<!--                            <span class="text-xl font-mono font-bold text-emerald-700">{{ m2SubScores.a1.toFixed(3) }}</span>-->
<!--                            <span class="text-[10px] text-emerald-600 block mt-0.5">Global vazni: 35%</span>-->
<!--                        </div>-->
<!--                        <div class="p-3 bg-blue-50 rounded border border-blue-200 text-center">-->
<!--                            <span class="text-xs font-bold text-blue-800 block">Jismoniy-sport (A²)</span>-->
<!--                            <span class="text-xl font-mono font-bold text-blue-700">{{ m2SubScores.a2.toFixed(3) }}</span>-->
<!--                            <span class="text-[10px] text-blue-600 block mt-0.5">Global vazni: 35%</span>-->
<!--                        </div>-->
<!--                        <div class="p-3 bg-purple-50 rounded border border-purple-200 text-center">-->
<!--                            <span class="text-xs font-bold text-purple-800 block">Ijtimoiy-ekologik (A³)</span>-->
<!--                            <span class="text-xl font-mono font-bold text-purple-700">{{ m2SubScores.a3.toFixed(3) }}</span>-->
<!--                            <span class="text-[10px] text-purple-600 block mt-0.5">Global vazni: 30%</span>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <div class="mt-6 pt-4 border-t border-gray-200">-->
<!--                        <h4 class="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide flex items-center gap-1.5">-->
<!--                            <svg class="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>-->
<!--                            Parametrik koridor va og‘irlik koeffitsiyentlari usullari tahlili (Ekspert vs Reyting)-->
<!--                        </h4>-->
<!--                        <p class="text-xs text-gray-600 mb-4 leading-relaxed">-->
<!--                            Tizim integratsiyalashgan ilmiy algoritmlarga tayanadi. Vazn koeffitsiyentsiz o'zgarishlar <code class="bg-gray-100 px-1 py-0.5 rounded text-blue-600 font-mono font-bold">[-7.029, 0.42]</code> (ko‘k rangli grafik bazasi) koridorida tebranadi.-->
<!--                            Reytinglash usulida minimal <code class="bg-gray-100 px-1 py-0.5 rounded text-rose-600 font-mono font-bold">-0.4960</code> va maksimal <code class="bg-gray-100 px-1 py-0.5 rounded text-rose-600 font-mono font-bold">0.069</code> (qizil koordinata), ballar berish usulida esa <code class="bg-gray-100 px-1 py-0.5 rounded text-emerald-600 font-mono font-bold">[-0.415, 0.053]</code> (yashil grafik traektoriyasi) dinamikasini aks ettiradi.-->
<!--                        </p>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        `
    };

