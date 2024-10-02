<template>
    <div class="w-5/6 mx-auto">
        <h1 class="text-center text-4xl my-3">ListView</h1>
        <div v-if="persons" class="flex flex-col items-center">
            <label for="search">Search contacts</label>
            <input type="text" name="search" class="border-sky-200 border-2 rounded-sm">

            <div v-for="(person, index) in persons" :key="index" class="w-52 bg-slate-50 rounded-lg mt-2 px-3 py-2">
                <div class="flex flex-row items-center gap-3">
                    <div class="rounded-full bg-sky-300 w-1/3 aspect-square flex justify-center items-center">
                        <span class="text-2xl">
                            {{ person.first_name.charAt(0) }}{{ person.last_name.charAt(0) }}
                        </span>
                    </div>
                    <div>
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
            persons: null as [Person] | null
        }
    },
    async created() {
        const res = await axios("persons.json");
        this.persons = res.data;
    }
});
</script>

<style>

</style>