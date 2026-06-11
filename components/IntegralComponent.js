// Agar topshiriq Composition API (Single File Component bo'lmasa), 
// pastdagi qatorni ochib qo'yish yoki Vue ob'ektidan foydalanish kerak:
// const { ref, computed, watch } = Vue;

const IntegralComponent = {
    props: {
        m1FinalScore: { type: Number, required: true },
        m2FinalScore: { type: Number, required: true },
        m3FinalScore: { type: Number, required: true }
    },
    emits: ['integral-score-change'],
    setup(props, { emit }) {
        // Vue reaktiv o'zgaruvchilari (Global Vue ishlatilganda Vue.ref ko'rinishida yozilishi mumkin)
        const delta1 = ref(0.60);
        const delta2 = ref(0.40);
        const selectedRole = ref('raisi');

        const integralScore = computed(() => (props.m1FinalScore * 1 / 3) + (props.m2FinalScore * 1 / 3) + (props.m3FinalScore * 1 / 3));

        const generatedRecommendation = computed(() => {
            const M1 = props.m1FinalScore / 100;
            const M2 = props.m2FinalScore / 100;
            const M3 = props.m3FinalScore / 100;

            if (selectedRole.value === 'raisi') {
                if (M1 <= 0.33 && M2 <= 0.33) {
                    if (M3 <= 0.40) return "Mahalla faoliyatini butunlay qayta tashkil etish, \"Yettilik\" tarkibini va ish uslubini tuman Kengashi darajasida ko'rib chiqish.";
                    if (M3 > 0.40 && M3 <= 0.80) return "Favqulodda vaziyatdan chiqish uchun hududiy sektor rahbarining bevosita aralashuvini va yordamini so'rash.";
                    return "Sog'liqni saqlash va demografik muammolarni hal etish uchun yuqori tashkilotlarga takliflar va talabnomalar kiritish.";
                }
                if (M1 <= 0.33 && M2 > 0.33 && M2 <= 0.66) {
                    if (M3 <= 0.40) return "Barcha yo'nalishlar bo'yicha tizimli inqirozga chek qo'yish uchun \"Mahalla yettiligi\" faoliyatini 24 soatlik ish rejimiga o'tkazish.";
                    if (M3 > 0.40 && M3 <= 0.80) return "Hududni sog'lomlashtirish va ijtimoiy muhitni yaxshilash bo'yicha kompleks chora-tadbirlar dasturini tasdiqlash.";
                    return "Kasallanish darajasi yuqori xonadonlar bilan manzilli ishlash va ularni ijtimoiy qo'llab-quvvatlash choralarini ko'rish.";
                }
                if (M1 > 0.67 && M2 > 0.33 && M2 <= 0.66) {
                    if (M3 <= 0.40) return "Ijtimoiy daftarlarga kiritish va KPI ijrosida sustkashlikka yo'l qo'ygan xodimlarni lavozimiga loyiqligini ko'rib chiqish.";
                    if (M3 > 0.40 && M3 <= 0.80) return "Ijtimoiy himoyaga muhtoj oilalar bilan ishlashda \"Mahalla yettiligi\"ning o'zaro hamkorlik algoritmini qayta ko'rib chiqish.";
                    return "Demografik va ijtimoiy reytingni yaxshilash uchun \"Xonadonbay\" xatlov natijalari asosida ijtimoiy himoya rejasini yangilash.";
                }
                if (M1 > 0.67 && M2 > 0.67) {
                    if (M3 <= 0.40) return "KPI bo'yicha kamchiliklarni bartaraf etish yuzasidan 1 oylik \"Yo'l xaritasi\"ni tasdiqlash va mas'ullarga intizomiy chora ko'rish.";
                    if (M3 > 0.40 && M3 <= 0.80) return "KPI ko'rsatkichlari past bo'lgan yo'nalish mas'uli (masalan, yoshlar yetakchisi yoki xotin-qizlar faoli) hisobotini kengashda eshitish.";
                    return "Mahalla tajribasini ommalashtirish va \"Namunali mahalla\" maqomini saqlash uchun profilaktik tadbirlarni davom ettirish.";
                }
                return "Mahalla raisi uchun joriy ko'rsatkichlar bo'yicha standart profilaktik kuzatuv rejimini davom ettirish (Maxsus inqirozli holat aniqlanmadi).";
            }

            if (M1 <= 0.33 && M2 <= 0.33) {
                if (M3 <= 0.40) return "Barcha mas'ullar (Rais, profilaktika inspektori, hokim yordamchisi, xotin-qizlar faoli) ishdan olinadi. Viloyat darajasida Favqulodda ishchi guruh tuzilib, hududni qutqarish komissiyasi ishlaydi. ";
                if (M3 > 0.40 && M3 <= 0.80) return "Sektor rahbari va MFY raisining ishda qolish-qolmasligi masalasi xalq deputatlari kengashida ko'rib chiqiladi.";
                return "Muammo mahalliy byudjetda bo'lishi mumkin. Viloyat yoki Respublika darajasida yondashish va yirik resurs ajratish talab etiladi.";
            }
            if (M1 <= 0.33 && M2 > 0.33 && M2 <= 0.66) {
                if (M3 <= 0.40) return "Raisni ishdan olinadi, hudud tuman miqyosidagi maxsus profilaktik dasturga kiritiladi.";
                if (M3 > 0.40 && M3 <= 0.80) return "Mahalla \"Qizil\" toifaga o'tkaziladi. Har kuni tuman darajasida intensiv monitoring o'tkaziladi.";
                return "Tuman darajasida aralashuv, poliklinikalar moddiy-texnik bazasini tezkorlik bilan yangilash choralari.";
            }
            if (M1 > 0.67 && M2 > 0.33 && M2 <= 0.66) {
                if (M3 <= 0.40) return "Xalq norozi va rais ishlamayapti. Raisni vazifasidan ozod qilish, yosh va faol kadrni tayinlash.";
                if (M3 > 0.40 && M3 <= 0.80) return "MFY faoliyatini jonlantirish, aholi murojaatlari bilan ishlash bo'yicha qat'iy reja-jadval tuzish.";
                return "Tuman hokimligi vakillari bilan xalq ochiq muloqotini tashkil etish, tushuntirish ishlarini kuchaytirish.";
            }
            if (M1 > 0.67 && M2 > 0.67) {
                if (M3 <= 0.40) return "Sharoit yaxshi bo'lsa-da, rais ishlamayapti. Raisni almashtirish masalasini tuman Kengashida ko'rib chiqish.";
                if (M3 > 0.40 && M3 <= 0.80) return "Raisga ogohlantirish berish, malaka oshirish va boshqaruv kursiga yuborish.";
                return "MFY raisi va faollarini moddiy rag'batlantirish. Erishilgan tajribani boshqa mahallalarga o'rnak qilib ko'rsatish.";
            }
            return "Hududiy boshqaruv organi uchun barqaror rivojlanish trayektoriyasi. Tashkiliy o'zgarishlar talab etilmaydi.";
        });

        watch(integralScore, score => emit('integral-score-change', score), { immediate: true });

        return { delta1, delta2, selectedRole, integralScore, generatedRecommendation };
    },
    template: `
        <div class="lg:col-span-2 space-y-6">

            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-3 mb-4 gap-2">
                    <div>
                        <h3 class="text-base font-bold text-gray-800 flex items-center gap-1.5">
                            <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                            Intellektual Algoritm va Manzilli Tavsiyalar Matritsasi
                        </h3>
                        <p class="text-[11px] text-gray-500">Funksional mantiqiy shaxobchalarning real-time hisoblagichi</p>
                    </div>
                    <div class="inline-flex rounded-md shadow-sm">
                        <button @click="selectedRole = 'raisi'"
                                :class="selectedRole === 'raisi' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
                                class="px-3 py-1.5 text-xs font-bold rounded-l-md transition cursor-pointer">
                            Mahalla Raisi
                        </button>
                        <button @click="selectedRole = 'hokimiyat'"
                                :class="selectedRole === 'hokimiyat' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
                                class="px-3 py-1.5 text-xs font-bold rounded-r-md transition cursor-pointer">
                            Hokimiyat / Sektor
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-2 text-center mb-4 text-xs font-mono">
                    <div class="p-2 bg-emerald-50 rounded border">
                        <span class="block text-gray-400 font-sans text-[10px]">M₁ (Sog'lom.)</span>
                        <span class="font-bold text-emerald-700">{{ (m1FinalScore/100).toFixed(3) }}</span>
                    </div>
                    <div class="p-2 bg-teal-50 rounded border">
                        <span class="block text-gray-400 font-sans text-[10px]">M₂ (Demogr.)</span>
                        <span class="font-bold text-teal-700">{{ (m2FinalScore/100).toFixed(3) }}</span>
                    </div>
                    <div class="p-2 bg-indigo-50 rounded border">
                        <span class="block text-gray-400 font-sans text-[10px]">M₃ (KPI)</span>
                        <span class="font-bold text-indigo-700">{{ (m3FinalScore/100).toFixed(3) }}</span>
                    </div>
                </div>

                <div class="bg-slate-900 text-slate-100 p-5 rounded-xl relative overflow-hidden border border-slate-700 shadow-inner">
                    <div class="absolute top-0 right-0 bg-indigo-500/20 text-indigo-300 text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-bl font-mono">
                        {{ selectedRole === 'raisi' ? 'Boshqaruv Ob\\'ekti: Rais' : 'Boshqaruv Ob\\'ekti: Vakil' }}
                    </div>
                    <h4 class="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">Generatsiya qilingan qaror loyihasi:</h4>
                    <p class="text-sm font-medium leading-relaxed font-sans text-slate-200">
                        {{ generatedRecommendation }}
                    </p>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 class="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Kompleks Integral Modellar Diagnostikasi</h2>
                <p class="text-sm text-gray-600 mb-4">Ushbu bo'lim M1, M2 va yangilangan ma'naviy-ma'rifiy M3 modellaridan olingan yakuniy reyting baholarini birlashtiradi.</p>

                <div class="space-y-4">
                    <div class="flex justify-between items-center p-4 bg-gray-50 rounded border border-emerald-200">
                        <div>
                            <span class="font-bold text-emerald-700 block">M₁ – Demografik holat (Stacking Ansambl)</span>
                            <span class="text-xs text-gray-500">6 ta bazaviy model va Meta-Model kombinatsiyasi</span>
                        </div>
                        <span class="font-mono text-2xl font-bold text-emerald-600">{{ m1FinalScore.toFixed(2) }}%</span>
                    </div>

                    <div class="flex justify-between items-center p-4 bg-gray-50 rounded border border-teal-200">
                        <div>
                            <span class="font-bold text-teal-700 block">M₂ – Sog'lomlashtirish holati (Parametrik Koridor)</span>
                            <span class="text-xs text-gray-500">Tuzatilgan Min-Max normallashuvi va ekspert og'irliklari</span>
                        </div>
                        <span class="font-mono text-2xl font-bold text-teal-600">{{ m2FinalScore.toFixed(2) }}%</span>
                    </div>

                    <div class="flex justify-between items-center p-4 bg-gray-50 rounded border border-indigo-200">
                        <div>
                            <span class="font-bold text-indigo-700 block">M₃ – Mahalla raisi faoliyatining KPI bahosi</span>
                            <span class="text-xs text-gray-500">Dinamik savollar va indikatorlar tizimi natijasi</span>
                        </div>
                        <span class="font-mono text-2xl font-bold text-indigo-600">{{ m3FinalScore.toFixed(2) }}%</span>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div class="border-b pb-2 mb-4">
                    <h3 class="text-lg font-bold text-gray-800 flex items-center gap-2">
                        Kompleks Baholash va Qaror Qabul Qilishni Qo'llab-Quvvatlash Sxemasi
                    </h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 bg-gray-50 p-4 rounded-lg border">
                    <div>
                        <label class="text-xs font-bold text-gray-600 block mb-1"><p>&delta;<sub>1</sub> - Integrallashgan baho I<sub>i</sub> uchun chegaraviy mezon:</p></label>
                        <input type="number" step="0.05" min="0" max="1" v-model.number="delta1" class="w-full bg-white border border-gray-300 rounded p-1.5 font-mono text-sm">
                        <span class="text-[11px] text-gray-400">Joriy I<sub>i</sub>: {{ (integralScore/100).toFixed(4) }}</span>
                    </div>
                    <div>
                        <label class="text-xs font-bold text-gray-600 block mb-1"><p>&delta;<sub>2</sub> - Minimal ko'rsatkich m<sub>i</sub> uchun chegaraviy mezon:</p></label>
                        <input type="number" step="0.05" min="0" max="1" v-model.number="delta2" class="w-full bg-white border border-gray-300 rounded p-1.5 font-mono text-sm">
                        <span class="text-[11px] text-gray-400">Joriy m<sub>i</sub>(min): {{ Math.min(m1FinalScore/100, m2FinalScore/100, m3FinalScore/100).toFixed(4) }}</span>
                    </div>
                </div>
            </div>
        </div>
    `
};