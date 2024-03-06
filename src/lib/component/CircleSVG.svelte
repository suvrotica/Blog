<script lang="ts">
	let { cx=0, cy=0, r=0, fill="#000" } = $props();
</script>

<circle {cx} {cy} {r} {fill} />

<style>
	circle {
		transition: 1s;
		opacity: 0.8;
	}
</style>
