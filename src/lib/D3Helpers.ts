import { derived, type Readable } from 'svelte/store';
import { scaleLinear } from 'd3';

export function createScales(width: Readable<number>, height: Readable<number>) {
  const xScale = derived(width, ($width) =>
    scaleLinear().domain([0, 1]).range([0, $width])
  );

  const yScale = derived(height, ($height) =>
    scaleLinear().domain([0, 1]).range([$height, 0])
  );

  const rScale = derived(width, ($width) =>
    scaleLinear().domain([0, 1]).range([5, $width / 10])
  );

  return {
    xScale,
    yScale,
    rScale,
  };
}