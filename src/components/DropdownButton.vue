<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';


defineProps<{
    buttonText: string;
    dropdownItems: { text: string; href?: string }[];
}>();

const dropdownOpen = ref(false);
const dropdownButtonRef = ref<HTMLButtonElement | null>(null);

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
};

const handleClickOutside = (event: MouseEvent) => {
    if (
        dropdownButtonRef.value &&
        !dropdownButtonRef.value.contains(event.target as Node)
    ) {
        dropdownOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
    <div class="relative inline-block text-left">
        <button @click="toggleDropdown" ref="dropdownButtonRef"
            class="bg-primary flex items-center rounded-[5px] px-5 py-[13px] text-base font-medium text-white">
            {{ buttonText }}
            <span class="pl-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="fill-current">
                    <path
                        d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z" />
                </svg>
            </span>
        </button>
        <div v-show="dropdownOpen"
            class="shadow-1 dark:shadow-box-dark absolute left-0 z-40 mt-2 w-full rounded-md bg-white dark:bg-dark-2 py-[10px] transition-all"
            :class="{
                'top-full opacity-100 visible': dropdownOpen,
                'top-[110%] invisible opacity-0': !dropdownOpen,
            }">
            <template v-for="(item, index) in dropdownItems" :key="index">
                <a v-if="item.href" :href="item.href"
                    class="text-body-color dark:text-dark-6 hover:bg-[#F5F7FD] dark:hover:bg-primary/5 hover:text-primary block px-5 py-2 text-base">
                    {{ item.text }}
                </a>
            </template>
        </div>
    </div>
</template>
