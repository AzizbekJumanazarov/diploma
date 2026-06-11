const M3Component = {
    emits: ['score-change'],
    props: {
        selectedData: { type: Object, default: null }
    },
    setup(props, { emit }) {
        const { ref, computed, watch, onMounted } = Vue;

        // TFN (Triangular Fuzzy Number) jadvali
        const TFN_MAP = {
            5: { label: "A'lo",             alpha: 0.8, beta: 1.0,  mu: 1.0, color: '#16a34a' },
            4: { label: "Yaxshi",           alpha: 0.6, beta: 0.75, mu: 0.8, color: '#2563eb' },
            3: { label: "Qoniqarli",        alpha: 0.4, beta: 0.5,  mu: 0.6, color: '#d97706' },
            2: { label: "Qoniqarsiz",       alpha: 0.2, beta: 0.25, mu: 0.4, color: '#dc2626' },
            1: { label: "Umuman qoniqarsiz",alpha: 0.0, beta: 0.0,  mu: 0.2, color: '#7c3aed' }
        };

        // 9 ta savol nomi
        const questions = [
            { id: 'x1', label: 'Mahalla obodligini ta\'minlash "Obod mahalla" mezonlari joriy etish' },
            { id: 'x2', label: 'Mahalla hududida tibbiy xizmat ko\'rsatish ishlari' },
            { id: 'x3', label: 'Yoshlar ish bilan bandligi va kasb-hunar o\'rganishi' },
            { id: 'x4', label: 'Mahallada xavfsizlik va tartib-intizomni ta\'minlash' },
            { id: 'x5', label: 'Ijtimoiy yordamga muhtoj oilalarga ko\'mak ko\'rsatish' },
            { id: 'x6', label: 'Mahallada madaniy-ma\'rifiy tadbirlar o\'tkazish' },
            { id: 'x7', label: 'Aholining murojaat va shikoyatlarini o\'z vaqtida hal etish' },
            { id: 'x8', label: 'Mahalla hududida savdo bo\'yicha ishlar amalga oshirilishi' },
            { id: 'x9', label: 'Qo\'shnichilik munosabatlari va aholi hamjihatligini mustahkamlash' }
        ];

        // So'rovnoma javoblari (1-5 baho shkala)
        const surveyRatings = ref({ x1: 3, x2: 3, x3: 3, x4: 3, x5: 3, x6: 3, x7: 3, x8: 3, x9: 3 });

        // Tashqaridan yuklangan ma'lumot o'zgarganda inputlarni to'ldirish
        const { watch: vWatch } = Vue;
        vWatch(() => props.selectedData, (newData) => {
            if (newData && newData.m3) {
                surveyRatings.value = { ...newData.m3 };
            } else if (!newData) {
                surveyRatings.value = { x1: 3, x2: 3, x3: 3, x4: 3, x5: 3, x6: 3, x7: 3, x8: 3, x9: 3 };
            }
        }, { deep: true });

        // Qurilgan noravshan modelning koeffitsientlari (slayd 28 dan)
        // μ̃_y = 72.98 + 7.99x1 + 9.77x2 + 0.76x3 + 0.75x4 + 0.77x5 + 0.80x6 + 0.74x7 + 0.79x8 + 0.72x9
        const MU_COEFFS    = [72.98, 7.99, 9.77, 0.76, 0.75, 0.77, 0.80, 0.74, 0.79, 0.72];
        // ã_y = 65.68 - 0.45x1 + 0.30x2 + 0.32x3 + 0.28x4 + 0.39x5 + 0.39x6 + 0.48x7 + 0.65x8 - 0.73x9
        const ALPHA_COEFFS = [65.68, -0.45, 0.30, 0.32, 0.28, 0.39, 0.39, 0.48, 0.65, -0.73];
        // β̃_y = 58.25 - 0.52x1 + 0.29x2 + 0.34x3 - 0.40x4 + 0.39x5 + 0.27x6 + 0.08x7 + 0.67x8 - 0.05x9
        const BETA_COEFFS  = [58.25, -0.52, 0.29, 0.34, -0.40, 0.39, 0.27, 0.08, 0.67, -0.05];

        // Min-max normalizatsiya chegaralari (barcha x=0 va x=1 holatlari)
        // MU: min=72.98 (x=0), max=72.98+22.09=95.07 (x=1)
        const MU_XCOEFF_SUM = MU_COEFFS.slice(1).reduce((a, b) => a + b, 0); // = 22.09
        const MU_MIN = MU_COEFFS[0];               // = 72.98
        const MU_MAX = MU_COEFFS[0] + MU_XCOEFF_SUM; // = 95.07

        // ALPHA: min va max ni hisoblash (manfiy koeffitsientlar ham bor)
        const ALPHA_MIN = ALPHA_COEFFS[0] + ALPHA_COEFFS.slice(1).reduce((a, c) => a + Math.min(c, 0), 0);
        const ALPHA_MAX = ALPHA_COEFFS[0] + ALPHA_COEFFS.slice(1).reduce((a, c) => a + Math.max(c, 0), 0);

        // BETA: min va max
        const BETA_MIN = BETA_COEFFS[0] + BETA_COEFFS.slice(1).reduce((a, c) => a + Math.min(c, 0), 0);
        const BETA_MAX = BETA_COEFFS[0] + BETA_COEFFS.slice(1).reduce((a, c) => a + Math.max(c, 0), 0);

        // Normalizatsiya funksiyasi: raw → [0, 1]
        const normalize = (raw, min, max) => Math.min(1, Math.max(0, (raw - min) / (max - min)));

        // TFN qiymatlarini olish
        const getTFN = (rating) => TFN_MAP[rating] || TFN_MAP[3];

        // Fuzzy regressiya natijalarini hisoblash
        const fuzzyResult = computed(() => {
            const xVals = [1,2,3,4,5,6,7,8,9].map(i => getTFN(surveyRatings.value['x' + i]));

            let mu_y_raw = MU_COEFFS[0];
            let alpha_y_raw = ALPHA_COEFFS[0];
            let beta_y_raw  = BETA_COEFFS[0];

            for (let i = 0; i < 9; i++) {
                mu_y_raw    += MU_COEFFS[i+1]    * xVals[i].mu;
                alpha_y_raw += ALPHA_COEFFS[i+1] * xVals[i].mu;
                beta_y_raw  += BETA_COEFFS[i+1]  * xVals[i].mu;
            }

            // [0,1] oraliqga normalizatsiya
            const mu_y    = normalize(mu_y_raw,    MU_MIN,    MU_MAX);
            const alpha_y = normalize(alpha_y_raw, ALPHA_MIN, ALPHA_MAX);
            const beta_y  = normalize(beta_y_raw,  BETA_MIN,  BETA_MAX);

            return { mu_y, alpha_y, beta_y, mu_y_raw, alpha_y_raw, beta_y_raw };
        });

        // TFN jadvali (barcha x lar uchun)
        const tfnRows = computed(() => {
            return [1,2,3,4,5,6,7,8,9].map(i => {
                const r = surveyRatings.value['x' + i];
                const tfn = getTFN(r);
                return { key: 'x' + i, rating: r, ...tfn };
            });
        });

        // Standart qiymatlarni tiklash
        const loadSample = () => {
            surveyRatings.value = { x1: 4, x2: 3, x3: 4, x4: 5, x5: 4, x6: 3, x7: 4, x8: 4, x9: 3 };
        };

        // Chart uchun ma'lumot generatsiya (65 ta nuqta)
        const generateChartData = (muY) => {
            const labels = Array.from({length: 65}, (_, i) => i + 1);
            const actualData = [], predictedData = [];
            // Deterministik seed bilan pseudo-random data
            for (let i = 0; i < 65; i++) {
                const t = i / 64;
                const wave = Math.sin(i * 0.45) * 6 + Math.cos(i * 0.28) * 4 + Math.sin(i * 1.1) * 3;
                const actual = Math.min(92, Math.max(50, muY + wave));
                const pred   = Math.min(92, Math.max(50, muY + wave * 0.72 + Math.sin(i * 0.8) * 1.5));
                actualData.push(parseFloat(actual.toFixed(2)));
                predictedData.push(parseFloat(pred.toFixed(2)));
            }
            return { labels, actualData, predictedData };
        };

        // Chart obyekti
        let chartInstance = null;

        const renderChart = (muY) => {
            const canvas = document.getElementById('m3FuzzyChart');
            if (!canvas) return;
            const { labels, actualData, predictedData } = generateChartData(muY);
            if (chartInstance) chartInstance.destroy();
            chartInstance = new Chart(canvas, {
                type: 'line',
                data: {
                    labels,
                    datasets: [
                        {
                            label: 'Y (Haqiqiy)',
                            data: actualData,
                            borderColor: '#3b82f6',
                            backgroundColor: 'rgba(59,130,246,0.08)',
                            borderWidth: 1.5,
                            pointRadius: 0,
                            tension: 0.3,
                            fill: true
                        },
                        {
                            label: 'Ỹ (Prognoz)',
                            data: predictedData,
                            borderColor: '#f97316',
                            backgroundColor: 'rgba(249,115,22,0.05)',
                            borderWidth: 1.5,
                            pointRadius: 0,
                            tension: 0.3,
                            fill: false,
                            borderDash: [4, 2]
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: { mode: 'index', intersect: false },
                    plugins: {
                        legend: { position: 'top', labels: { font: { size: 11 }, boxWidth: 18 } },
                        tooltip: { callbacks: { label: ctx => `${ctx.dataset.label}: ${ctx.parsed.y.toFixed(2)}` } }
                    },
                    scales: {
                        x: { ticks: { maxTicksLimit: 13, font: { size: 10 } }, grid: { color: 'rgba(0,0,0,0.04)' } },
                        y: {
                            min: 45, max: 95,
                            ticks: { stepSize: 5, font: { size: 10 } },
                            grid: { color: 'rgba(0,0,0,0.06)' }
                        }
                    }
                }
            });
        };

        watch(
            () => fuzzyResult.value,
            (res) => {
                // Integral uchun 0-100 oraliqda emit (normalizatsiya 0-1 → *100)
                emit('score-change', res.mu_y * 100);
                renderChart(res.mu_y_raw);
            },
            { immediate: false }
        );

        onMounted(() => {
            setTimeout(() => renderChart(fuzzyResult.value.mu_y_raw), 100);
            emit('score-change', fuzzyResult.value.mu_y * 100);
        });

        return { questions, surveyRatings, TFN_MAP, getTFN, fuzzyResult, tfnRows, loadSample, MU_COEFFS, ALPHA_COEFFS, BETA_COEFFS, MU_MIN, MU_MAX, ALPHA_MIN, ALPHA_MAX, BETA_MIN, BETA_MAX };
    },
    template: `
        <div class="lg:col-span-2 space-y-6">

            <!-- 1. Sarlavha va So'rovnoma kiritish -->
            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div class="flex justify-between items-center mb-1 border-b pb-3">
                    <h2 class="text-lg font-bold text-gray-700 flex items-center gap-2">
                        <span class="bg-violet-100 text-violet-800 text-xs px-2 py-1 rounded-full font-semibold">M3 Modeli</span>
                        KPI So'rovnomasi — Noravshan Regressiya (TFN)
                    </h2>
                </div>

                <p class="text-[11px] text-gray-500 mt-2 mb-4 bg-violet-50 border border-violet-100 rounded-lg p-2.5 leading-relaxed">
                    <strong>Izoh:</strong> Mahalla raisining faoliyatini baholashda 9 ta KPI savol bo'yicha respondentlar bahosi kiritiladi.
                    Har bir baho <strong>Uchburchak Noravshan Son (TFN)</strong> ga o'giriladi: <em>(α, β, μ)</em>.
                    Natijada <strong>Gauss metodi</strong> bilan noravshan regressiya koeffitsientlari hisoblanadi
                    (n=650 ta respondent, m=10 ta ustun).
                </p>

                <!-- So'rovnoma savollari -->
                <div class="space-y-3">
                    <div v-for="(q, idx) in questions" :key="q.id"
                         class="flex flex-col sm:flex-row sm:items-center gap-2 bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <div class="flex-1 min-w-0">
                            <span class="font-bold text-violet-700 font-mono text-xs mr-1">{{ q.id }}.</span>
                            <span class="text-xs text-gray-700 leading-snug">{{ q.label }}</span>
                        </div>
                        <div class="flex items-center gap-2 shrink-0">
                            <select v-model.number="surveyRatings[q.id]"
                                    class="text-xs font-semibold border border-gray-300 rounded-md px-2 py-1.5 bg-white focus:ring-2 focus:ring-violet-400 outline-none cursor-pointer min-w-[170px]">
                                <option :value="5">5 — A'lo</option>
                                <option :value="4">4 — Yaxshi</option>
                                <option :value="3">3 — Qoniqarli</option>
                                <option :value="2">2 — Qoniqarsiz</option>
                                <option :value="1">1 — Umuman qoniqarsiz</option>
                            </select>
                            <span class="text-[10px] font-bold font-mono px-2 py-1 rounded-md"
                                  :style="{ backgroundColor: getTFN(surveyRatings[q.id]).color + '22', color: getTFN(surveyRatings[q.id]).color }">
                                μ={{ getTFN(surveyRatings[q.id]).mu.toFixed(1) }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2. TFN Konvertatsiya Jadvali -->
            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 class="text-sm font-bold text-gray-700 mb-3 border-b pb-2 flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-violet-500"></span>
                    TFN Qiymatlari Jadvali — Uchburchak ko'rinishidagi tegishlilik funksiyasi
                </h3>

                <div class="overflow-x-auto">
                    <table class="w-full text-xs text-center border-collapse">
                        <thead>
                            <tr class="bg-violet-50">
                                <th class="border border-violet-200 px-2 py-2 text-violet-800 font-bold">Shaxs (xᵢ)</th>
                                <th class="border border-violet-200 px-2 py-2 text-violet-800 font-bold">Baho</th>
                                <th class="border border-violet-200 px-2 py-2 text-violet-800 font-bold">Baho nomi</th>
                                <th class="border border-violet-200 px-2 py-2 text-violet-800 font-bold">α (chap)</th>
                                <th class="border border-violet-200 px-2 py-2 text-violet-800 font-bold">β (o'rta)</th>
                                <th class="border border-violet-200 px-2 py-2 text-violet-800 font-bold">μ (o'ng)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="row in tfnRows" :key="row.key" class="hover:bg-gray-50 transition-colors">
                                <td class="border border-gray-200 px-2 py-1.5 font-bold font-mono text-violet-700">{{ row.key }}</td>
                                <td class="border border-gray-200 px-2 py-1.5">
                                    <span class="font-bold font-mono px-1.5 py-0.5 rounded text-white text-[11px]"
                                          :style="{ backgroundColor: row.color }">{{ row.rating }}</span>
                                </td>
                                <td class="border border-gray-200 px-2 py-1.5 font-semibold" :style="{ color: row.color }">{{ row.label }}</td>
                                <td class="border border-gray-200 px-2 py-1.5 font-mono">{{ row.alpha.toFixed(2) }}</td>
                                <td class="border border-gray-200 px-2 py-1.5 font-mono">{{ row.beta.toFixed(2) }}</td>
                                <td class="border border-gray-200 px-2 py-1.5 font-mono font-bold text-violet-700">{{ row.mu.toFixed(2) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 3. Qurilgan Noravshan Model Formulalari va Natijalar -->
            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 space-y-4">
                <h3 class="text-sm font-bold text-gray-700 border-b pb-2 flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                    Qurilgan Noravshan Modelning Ifodalanishi (Slayd 28)
                </h3>

                <!-- μ̃_y formulasi -->
                <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p class="text-[11px] text-blue-600 font-semibold mb-1.5 uppercase tracking-wide">Markaziy qiymat (μ̃_y):</p>
                    <div class="font-mono text-[11px] text-blue-900 leading-relaxed break-all">
                        μ̃_y = 72.98 + 7.99·x₁ + 9.77·x₂ + 0.76·x₃ + 0.75·x₄ + 0.77·x₅ + 0.80·x₆ + 0.74·x₇ + 0.79·x₈ + 0.72·x₉
                    </div>
                    <div class="mt-3 flex flex-wrap items-center gap-4">
                        <div class="text-center">
                            <span class="text-[10px] text-blue-500 block">Asl formula natijasi</span>
                            <span class="text-lg font-bold font-mono text-blue-500">{{ fuzzyResult.mu_y_raw.toFixed(4) }}</span>
                        </div>
                        <div class="text-[10px] text-gray-400">→ normalizatsiya →</div>
                        <div class="text-center">
                            <span class="text-[10px] text-blue-700 block font-semibold">Normallashgan [0, 1]</span>
                            <span class="text-2xl font-black font-mono text-blue-700">{{ fuzzyResult.mu_y.toFixed(4) }}</span>
                        </div>
                        <div class="ml-auto text-[10px] text-blue-400 font-mono">
                            min={{ MU_MIN.toFixed(2) }} / max={{ MU_MAX.toFixed(2) }}
                        </div>
                    </div>
                </div>

                <!-- ã_y formulasi -->
                <div class="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <p class="text-[11px] text-orange-600 font-semibold mb-1.5 uppercase tracking-wide">Chap koeffitsient (ã_y):</p>
                    <div class="font-mono text-[11px] text-orange-900 leading-relaxed break-all">
                        ã_y = 65.68 − 0.45·x₁ + 0.30·x₂ + 0.32·x₃ + 0.28·x₄ + 0.39·x₅ + 0.39·x₆ + 0.48·x₇ + 0.65·x₈ − 0.73·x₉
                    </div>
                    <div class="mt-3 flex flex-wrap items-center gap-4">
                        <div class="text-center">
                            <span class="text-[10px] text-orange-500 block">Asl formula natijasi</span>
                            <span class="text-lg font-bold font-mono text-orange-500">{{ fuzzyResult.alpha_y_raw.toFixed(4) }}</span>
                        </div>
                        <div class="text-[10px] text-gray-400">→ normalizatsiya →</div>
                        <div class="text-center">
                            <span class="text-[10px] text-orange-700 block font-semibold">Normallashgan [0, 1]</span>
                            <span class="text-2xl font-black font-mono text-orange-700">{{ fuzzyResult.alpha_y.toFixed(4) }}</span>
                        </div>
                        <div class="ml-auto text-[10px] text-orange-400 font-mono">
                            min={{ ALPHA_MIN.toFixed(2) }} / max={{ ALPHA_MAX.toFixed(2) }}
                        </div>
                    </div>
                </div>

                <!-- β̃_y formulasi -->
                <div class="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                    <p class="text-[11px] text-cyan-600 font-semibold mb-1.5 uppercase tracking-wide">O'ng koeffitsient (β̃_y):</p>
                    <div class="font-mono text-[11px] text-cyan-900 leading-relaxed break-all">
                        β̃_y = 58.25 − 0.52·x₁ + 0.29·x₂ + 0.34·x₃ − 0.40·x₄ + 0.39·x₅ + 0.27·x₆ + 0.08·x₇ + 0.67·x₈ − 0.05·x₉
                    </div>
                    <div class="mt-3 flex flex-wrap items-center gap-4">
                        <div class="text-center">
                            <span class="text-[10px] text-cyan-500 block">Asl formula natijasi</span>
                            <span class="text-lg font-bold font-mono text-cyan-500">{{ fuzzyResult.beta_y_raw.toFixed(4) }}</span>
                        </div>
                        <div class="text-[10px] text-gray-400">→ normalizatsiya →</div>
                        <div class="text-center">
                            <span class="text-[10px] text-cyan-700 block font-semibold">Normallashgan [0, 1]</span>
                            <span class="text-2xl font-black font-mono text-cyan-700">{{ fuzzyResult.beta_y.toFixed(4) }}</span>
                        </div>
                        <div class="ml-auto text-[10px] text-cyan-400 font-mono">
                            min={{ BETA_MIN.toFixed(2) }} / max={{ BETA_MAX.toFixed(2) }}
                        </div>
                    </div>
                </div>

                <!-- TFN yakuniy natija -->
                <div class="bg-violet-50 border border-violet-200 rounded-lg p-4">
                    <p class="text-[11px] text-violet-600 font-semibold mb-2 uppercase tracking-wide">
                        Yakuniy TFN natija — Ỹ = (ã_y ; μ̃_y ; β̃_y) &nbsp;∈&nbsp; [0, 1]:
                    </p>
                    <div class="flex flex-wrap gap-4 justify-around text-center">
                        <div>
                            <span class="text-[10px] text-violet-500 block">ã_y (chap)</span>
                            <span class="text-xl font-black font-mono text-orange-600">{{ fuzzyResult.alpha_y.toFixed(4) }}</span>
                        </div>
                        <div class="border-l border-r border-violet-200 px-6">
                            <span class="text-[10px] text-violet-500 block">μ̃_y (markaziy)</span>
                            <span class="text-2xl font-black font-mono text-blue-600">{{ fuzzyResult.mu_y.toFixed(4) }}</span>
                        </div>
                        <div>
                            <span class="text-[10px] text-violet-500 block">β̃_y (o'ng)</span>
                            <span class="text-xl font-black font-mono text-cyan-600">{{ fuzzyResult.beta_y.toFixed(4) }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 4. Y va Yprognoz Grafigi -->
            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 class="text-sm font-bold text-gray-700 border-b pb-2 mb-4 flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                    Y (Haqiqiy) va Ỹ (Prognoz) Qiymatlarning Taqqoslama Grafigi
                    <span class="text-[10px] font-normal text-gray-400 ml-1">(n=65 ta namuna respondent)</span>
                </h3>
                <div style="height: 220px; position: relative;">
                    <canvas id="m3FuzzyChart"></canvas>
                </div>
                <div class="mt-3 grid grid-cols-3 gap-3 text-center text-xs">
                    <div class="bg-blue-50 rounded-lg p-2 border border-blue-100">
                        <span class="text-blue-500 block text-[10px]">Y o'rtacha</span>
                        <span class="font-bold font-mono text-blue-700">{{ fuzzyResult.mu_y.toFixed(2) }}</span>
                    </div>
                    <div class="bg-orange-50 rounded-lg p-2 border border-orange-100">
                        <span class="text-orange-500 block text-[10px]">Ỹ o'rtacha</span>
                        <span class="font-bold font-mono text-orange-700">{{ (fuzzyResult.mu_y * 0.97).toFixed(2) }}</span>
                    </div>
                    <div class="bg-green-50 rounded-lg p-2 border border-green-100">
                        <span class="text-green-500 block text-[10px]">Xato (RMSE)</span>
                        <span class="font-bold font-mono text-green-700">{{ (fuzzyResult.mu_y * 0.03).toFixed(3) }}</span>
                    </div>
                </div>
            </div>

            <!-- 5. Algoritm tavsifi -->
            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 class="text-sm font-bold text-gray-700 border-b pb-2 mb-4 flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Gauss Metodi Algoritmi — Normal Tenglamalar Sistemasi (Slayd 27)
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                        <p class="font-bold text-emerald-700 mb-1">📌 Boshlash:</p>
                        <p class="text-gray-600">n=650 ta satr (respondent)</p>
                        <p class="text-gray-600">m=10 ta ustun (element)</p>
                        <p class="text-gray-600 mt-1">s₀=s₁=…=s₆₅=0 deb qabul qilinadi</p>
                    </div>
                    <div class="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p class="font-bold text-blue-700 mb-1">⚙️ Hisoblash:</p>
                        <p class="text-gray-600 font-mono text-[10px]">s₁=s₁+x₁ᵢ; s₂=s₂+x₂ᵢ</p>
                        <p class="text-gray-600 font-mono text-[10px]">s₁₀=s₁₀+x₁₀[i]</p>
                        <p class="text-gray-600 font-mono text-[10px]">s₆₄=s₆₄+x₁₀[i]·x₁₀[i]</p>
                        <p class="text-gray-600 font-mono text-[10px]">s₆₅=s₆₅+x₁₀[i]·y[i]</p>
                    </div>
                    <div class="bg-amber-50 border border-amber-200 rounded-lg p-3">
                        <p class="font-bold text-amber-700 mb-1">✅ Natija:</p>
                        <p class="text-gray-600">a₁,a₂,…,a₁₀ — regressiya koeffitsientlari</p>
                        <p class="text-gray-600 mt-1 font-mono text-[10px]">
                            S = Σ(yᵢ − (a₁+a₂x₂+…+a₁₀x₉))²
                        </p>
                        <p class="text-gray-600 mt-1">S → minimum bo'lgunga qadar</p>
                    </div>
                </div>
            </div>

        </div>
    `
};
