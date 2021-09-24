<script>
	import Game from './Game.svelte';
</script>

<main>
	<header>
		<h1>3t</h1>
	</header>

	<div class="game">
		<Game/>
	</div>

</main>

<style>
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	header {
		display: flex;
		justify-content: center;
		border-bottom: 2px solid black;
	}

	header > h1 {
		font-family: 'InconsolataLGCRegular';
		font-weight: 500;
		font-size: 32pt;
	}

	.game {
		height: 30vw;
		width: 30%;
		border: 0.1rem solid black;
	}
</style>
