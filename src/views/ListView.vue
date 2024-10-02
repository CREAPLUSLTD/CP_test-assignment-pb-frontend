<template>
    <div class="mx-auto">
        <h1 class="text-center text-5xl my-3">Contacts</h1>
        <div v-if="persons" class="flex flex-col items-center w-4/5 sm:w-2/5 sm:max-w-sm mx-auto">
            <input v-model="searchQuery" @input="debounceSearch" type="text" placeholder="Search" name="search" class="border-slate-100 border-4 rounded-lg w-full text-2xl">

            <div v-for="(person, index) in filteredPersons" :key="index" class="bg-slate-50 w-full rounded-lg mt-3 px-3 py-2">
                <div class="flex flex-row items-center gap-3 w-full">
                    <div class="rounded-full bg-sky-300 w-1/4 aspect-square flex justify-center items-center">
                        <span class="text-3xl">
                            {{ person.first_name.charAt(0) }}{{ person.last_name.charAt(0) }}
                        </span>
                    </div>
                    <div class="text-xl">
                        <h2>{{ person.first_name }} {{ person.last_name }}</h2>
                        <h2>{{ person.phone_number }}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

type Person = {
    id: number
    first_name: string
    last_name: string
    phone_number: string
    favorite: boolean
}

import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ListView',
    data() {
        return {
            persons: null as Person[] | null,
            filteredPersons: null as Person[] | null,
            searchQuery: "" as string,
            debounceTimeout: undefined as NodeJS.Timeout | undefined
        }
    },
    methods: {
        debounceSearch() {
            clearTimeout(this.debounceTimeout)

            this.debounceTimeout = setTimeout(() => {
                this.updateFilteredPersons();
            }, 300)
        },
        updateFilteredPersons() {
            if (!this.persons) {
                return;
            }

            const query = this.searchQuery.toLowerCase();
            this.filteredPersons = this.persons.filter(person => {
                return person.first_name.toLowerCase().includes(query) || person.last_name.toLowerCase().includes(query)
            })
        }
    },
    async created() {
        const res = await axios("persons.json");
        this.persons = res.data;
        this.filteredPersons = this.persons
    }
});
</script>

<style>

</style>