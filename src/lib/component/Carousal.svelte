<script lang="ts">
	import { fade } from 'svelte/transition';
	import { sectionStyle } from '$lib/global';
	
	export let images = []; // Array of image URLs
	export let intervalDuration = 5000; // Duration between image changes
	export let fadeDuration = 300; // Fade in/out duration

	import { onMount } from 'svelte';
	onMount(() => {
		const interval = setInterval(updateIndex, intervalDuration);
		return () => clearInterval(interval);
	});

	let currentIndex = 0;

	// Logic to update currentIndex for the carousel
	const updateIndex = () => {
		currentIndex = (currentIndex + 1) % images.length;
	};
</script>

<div class={sectionStyle}>
	{#each images as image, index}
		<li
			class="clearfix -mr-4 -mt-6 overflow-x-hidden bg-neutral-300"
			class:hidden={index !== currentIndex}
			in:fade={{ duration: fadeDuration }}
			out:fade={{ duration: fadeDuration }}
		>
			<img src={image} alt={`Image ${index}`} />
		</li>
	{/each}
</div>
