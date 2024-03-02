<script lang="ts">
	let { cx, cy, r, fill } = $props();
</script>

<circle {cx} {cy} {r} {fill} />

<style>
	circle {
		transition: 1s;
		opacity: 0.8;
	}
</style>
