const DataSelectorComponent = {
    emits: ['id-selected'],
    setup(_, { emit }) {
        const { ref, computed } = Vue;

        const selectedId = ref(null);
        const isOpen = ref(false);

        const mahallalar = computed(() => MAHALLALAR_DATA);

        const selectedMahalla = computed(() => {
            if (selectedId.value === null) return null;
            return MAHALLALAR_DATA.find(m => m.id === selectedId.value) || null;
        });

        const selectId = (id) => {
            selectedId.value = id;
            isOpen.value = false;
            emit('id-selected', id);
        };

        const clearSelection = () => {
            selectedId.value = null;
            isOpen.value = false;
            emit('id-selected', null);
        };

        const toggleOpen = () => {
            isOpen.value = !isOpen.value;
        };

        return { mahallalar, selectedId, selectedMahalla, selectId, clearSelection, isOpen, toggleOpen };
    },
    template: `
        <div class="data-selector-wrapper">
            <div class="data-selector-inner">
                <!-- Label -->
                <span class="ds-label">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="3"/>
                        <line x1="8" y1="12" x2="16" y2="12"/>
                        <line x1="8" y1="8" x2="16" y2="8"/>
                        <line x1="8" y1="16" x2="12" y2="16"/>
                    </svg>
                    Mahalla tanlang:
                </span>

                <!-- Dropdown trigger -->
                <div class="ds-dropdown-wrap" style="position:relative;">
                    <button class="ds-trigger" :class="{ 'ds-trigger--active': isOpen, 'ds-trigger--selected': selectedId !== null }" @click="toggleOpen" type="button">
                        <span v-if="selectedMahalla">
                            <span class="ds-id-badge">ID {{ selectedMahalla.id }}</span>
                            {{ selectedMahalla.name }}
                        </span>
                        <span v-else class="ds-placeholder">— ID tanlang —</span>
                        <svg class="ds-chevron" :class="{ 'ds-chevron--up': isOpen }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"/>
                        </svg>
                    </button>

                    <!-- Dropdown menu -->
                    <div v-if="isOpen" class="ds-menu">
                        <div class="ds-menu-header">Mavjud ma'lumotlar ({{ mahallalar.length }} ta)</div>
                        <div class="ds-menu-scrollable">
                            <button
                                v-for="m in mahallalar"
                                :key="m.id"
                                class="ds-menu-item"
                                :class="{ 'ds-menu-item--active': selectedId === m.id }"
                                @click="selectId(m.id)"
                                type="button"
                            >
                                <span class="ds-id-badge ds-id-badge--sm">{{ m.id }}</span>
                                <span>{{ m.name }}</span>
                                <svg v-if="selectedId === m.id" class="ds-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"/>
                                </svg>
                            </button>
                            <div v-if="mahallalar.length === 0" class="ds-empty">Ma'lumot topilmadi</div>
                        </div>
                        <div class="ds-menu-divider"></div>
                        <button class="ds-clear-btn" @click="clearSelection" type="button">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                            Tozalash (barcha fieldlar bo'sh)
                        </button>
                    </div>
                </div>

                <!-- Info badge -->
                <span v-if="selectedId !== null" class="ds-loaded-badge">
                    ✓ Ma'lumotlar yuklandi
                </span>
                <span v-else class="ds-hint">
                    ID tanlanmagan — fieldlar bo'sh
                </span>
            </div>
        </div>
    `
};

