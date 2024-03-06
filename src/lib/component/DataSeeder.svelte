<!-- DataSeeder.svelte -->
<script lang="ts">
    import { onDestroy } from 'svelte';
  
    export let data: { a: number; b: number; r: number; fill: string }[] = [];
  
    let interval: NodeJS.Timeout;
  
    function seedData() {
      data = Array.from({ length: 1000 }).map(() => {
        return {
          a: Math.random(),
          b: Math.random(),
          r: Math.random(),
          fill: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
        };
      });
    }
  
    interval = setInterval(seedData, 2000);
  
    onDestroy(() => {
      clearInterval(interval);
    });
  </script>