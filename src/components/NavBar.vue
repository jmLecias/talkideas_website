<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Define props to allow customization
defineProps({
    navLinkItems: {
        type: Array,
        required: true,
    },
    logoLight: {
        type: String,
        default: 'https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg',
    },
    logoDark: {
        type: String,
        default: 'https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg',
    },
});

const open = ref(false);
const dropdownButtonRef = ref(null);

const toggleNavbar = () => {
    open.value = !open.value;
};

// Function to close navbar when clicking outside
const handleClickOutside = (event) => {
    if (dropdownButtonRef.value && !dropdownButtonRef.value.contains(event.target)) {
        open.value = false;
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
    <header class="flex w-full items-center bg-white dark:bg-dark">
        <div class="container">
            <div class="relative -mx-4 flex items-center justify-between">
                <!-- Logo Section -->
                <div class="w-60 max-w-full px-4">
                    <a href="/" class="block w-full py-5">
                        <img :src="logoLight" alt="logo" class="dark:hidden" />
                        <img :src="logoDark" alt="logo" class="hidden dark:block" />
                    </a>
                </div>

                <!-- Navbar Section -->
                <div class="flex w-full items-center justify-between px-4">
                    <div>
                        <!-- Mobile Menu Button -->
                        <button @click="toggleNavbar" ref="dropdownButtonRef"
                            class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden">
                            <span class="block h-[2px] w-[30px] bg-body-color dark:bg-white my-[6px]"></span>
                            <span class="block h-[2px] w-[30px] bg-body-color dark:bg-white my-[6px]"></span>
                            <span class="block h-[2px] w-[30px] bg-body-color dark:bg-white my-[6px]"></span>
                        </button>

                        <!-- Navigation Links -->
                        <nav :class="{ hidden: !open }"
                            class="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent">
                            <ul class="block lg:flex">
                                <li v-for="(item, index) in navLinkItems" :key="index">
                                    <a :href="item.href"
                                        class="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex">
                                        {{ item.text }}
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <!-- Sign-in/Sign-up Buttons -->
                    <div class="hidden justify-end pr-16 sm:flex lg:pr-0">
                        <a href="/#"
                            class="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white">Sign
                            in</a>
                        <a href="/#"
                            class="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90">Sign
                            Up</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
