    const { createApp, ref, computed, watch } = Vue;

createApp({
        components: {
            M1Component,
            M2Component,
            M3Component,
            IntegralComponent
        },
        setup() {
            const activeTab = ref('M1');
            const m1FinalScore = ref(0);
            const m2FinalScore = ref(0);
            const m3FinalScore = ref(0);
            const integralScore = ref(0);

            const currentDisplayScore = computed(() => {
                if (activeTab.value === 'M1') return m1FinalScore.value;
                if (activeTab.value === 'M2') return m2FinalScore.value;
                if (activeTab.value === 'M3') return m3FinalScore.value;
                return integralScore.value;
            });

            const softmaxProb = computed(() => {
                const score = currentDisplayScore.value;
                const z_high = (score - 72) / 5;
                const z_medium = (score - 60) / 6;
                const z_low = (52 - score) / 5;

                const e_high = Math.exp(z_high);
                const e_medium = Math.exp(z_medium);
                const e_low = Math.exp(z_low);
                const sum = e_high + e_medium + e_low;

                return { high: e_high / sum, medium: e_medium / sum, low: e_low / sum };
            });

            return {
                activeTab,
                m1FinalScore,
                m2FinalScore,
                m3FinalScore,
                integralScore,
                currentDisplayScore,
                softmaxProb
            };
        }
    }).mount('#app');
