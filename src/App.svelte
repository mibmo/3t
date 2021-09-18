<script>
	export let name;
	import Game from './Game.svelte';
</script>

<main>
	<header>
		<h1>3t</h1>
	</header>

	<article>
		<Game/>
	</article>

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

	article {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
</style>
