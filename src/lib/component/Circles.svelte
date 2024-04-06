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
  
  <hr />
  
  <div class="chart-container">
	<!-- Y-axis line -->
	<div class="y-axis">
	  <svg width="40" height={$heightStore}>
		<line
                  x1="30"
		  y1={$yScale.range()[0]}
		  x2="30"
		  y2={$yScale.range()[1]+10}
		  stroke="currentColor"
		  stroke-width="2"
		/>
		<text x="10" y={$heightStore / 2} text-anchor="middle" fill="currentColor">Y</text>
	  </svg>
	</div>
  
	<svg id="Circles" bind:clientWidth={$widthStore} bind:clientHeight={$heightStore}>
	  {#each data as { a, b, r, fill }}
		<Circle cx={$xScale(a)} cy={$yScale(b)} r={$rScale(r)} {fill} />
	  {/each}
	</svg>
  </div>
  
  <!-- X-axis line -->
  <div class="x-axis">
	<svg width={$widthStore} height="40">
	  <line
		x1="30"
		y1="10"
		x2={$xScale.range()[1]+30}
		y2="10"
		stroke="currentColor"
		stroke-width="2"
	  />
	  <text x={$widthStore / 2} y="30" text-anchor="middle" fill="currentColor">X</text>
	</svg>
  </div>
  
  <style>
	.chart-container {
	  @apply flex justify-center items-center;
	}
  
	
  
	#Circles {
	  @apply w-full h-screen border;
	}
  
	
  </style>
