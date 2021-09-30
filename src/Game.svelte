<script>
	import { onMount } from 'svelte';
	import Cell from './Cell.svelte';
	
	export let gridSize = 3;
	$: cells = [];

	onMount(() => {
		for (let x = 0; x < gridSize; x++) {
			for (let y = 0; y < gridSize; y++) {
				var cell = document.createElement('div');
				cells = [...cells, cell];
			}
		}

		document.getElementById('grid').style['grid-template-columns'] = `repeat(${gridSize}, minmax(0, 1fr))`;
	});
</script>

<div id="grid">
	{#each cells as _, i}
		<Cell x={(i % gridSize) + 1} y={Math.floor(i/gridSize)+1} assignment={i} />
	{/each}
</div>

<style>
	#grid {
		height: 100%;
		width: 100%;
		display: grid;
	}
</style>
