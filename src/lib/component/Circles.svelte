<script lang="ts">
	import { writable } from 'svelte/store';
	import { createScales } from '$lib/D3Helpers';
	import DataSeeder from '$lib/component/DataSeeder.svelte';
	import Circle from '$lib/component/CircleSVG.svelte';
  
	const widthStore = writable(0);
	const heightStore = writable(0);
  
	const { xScale, yScale, rScale } = createScales(widthStore, heightStore);
  
	let data: { a: number; b: number; r: number; fill: string }[] = [];
  </script>
  
  <DataSeeder bind:data />
  
  <svg id="Circles" bind:clientWidth={$widthStore} bind:clientHeight={$heightStore}>
	{#each data as { a, b, r, fill }}
	  <Circle cx={$xScale(a)} cy={$yScale(b)} r={$rScale(r)} {fill} />
	{/each}
  </svg>