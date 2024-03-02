<script lang="ts">
	import { scaleLinear } from 'd3';

	import Circle from '$lib/component/CircleSVG.svelte';

	let data: { a: Number; b: Number; r: Number; fill: String }[] = $state([]);
	setInterval(() => {
		data = Array.from({ length: 1000 }).map(() => {
			return {
				a: Math.random(),
				b: Math.random(),
				r: Math.random(),
				fill: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
			};
		});
	}, 2000);

	let width = $state(1000);
	let height = $state(500);

	const xScale = $derived(scaleLinear().domain([0, 1]).range([0, width]));

	const yScale = $derived(scaleLinear().domain([0, 1]).range([height, 0]));

	const rScale = $derived(
		scaleLinear()
			.domain([0, 1])
			.range([5, width / 10])
	);
</script>

<figure bind:clientWidth={width} bind:clientHeight={height}>
	<svg {width} {height}>
		{#each data as { a, b, r, fill }}
			<Circle cx={xScale(a)} cy={yScale(b)} r={rScale(r)} {fill} />
		{/each}
	</svg>
</figure>
