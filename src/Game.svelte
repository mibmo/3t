<script>
	import { onMount } from 'svelte';
	import Cell from './Cell.svelte';
	
	let gridSize = 3;

	$: cells = [];

	function addCell(el) {
		cells = [...cells, el];
	}

	onMount(() => {
		for (let x = 0; x < gridSize; x++) {
			for (let y = 0; y < gridSize; y++) {
				var cell = document.createElement('div');
				cell.className += "cell";
				cell.innerHTML = `${x}, ${y}`;
				addCell(cell);
			}
		}
	});
</script>

<div id="grid">
	{#each cells as _, i}
		<Cell assignment="{i}" />
	{/each}
</div>

<style>
	#grid {
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
</style>
