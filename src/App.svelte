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

	<footer>
		Footer
	</footer>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		flex-direction: column;
		height: screen;
		width: screen;
	}

	header {
		display: flex;
		justify-content: center;
		width: 100%;
		border-bottom: 0.2vh solid black;
		margin-bottom: 3vh;
	}

	header > h1 {
		font-family: 'InconsolataLGCRegular';
		font-weight: 500;
		font-size: 32pt;
	}

	footer {
		display: flex;
		place-content: center;
		margin-top: 5vh;
	}

	.game {
		height: 30vw;
		width: 30%;
		border: 0.1rem solid black;
	}
</style>
