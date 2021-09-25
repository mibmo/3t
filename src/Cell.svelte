<script>
	export let pos = { x: 0, y: 0 };
	export let assignment;
</script>

<div class="cell">
	<span class="cell-position">(11{pos.x}, {pos.y})</span>
	<span class="cell-assignment">{assignment}</span>
</div>

<style>
	.cell {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
	}
	
	.cell:nth-child(odd) {
		background-color: #eee;
	}

	.cell-position {
		position: relative;
		height: 100%;
		width: 100%;
		margin-left: 0.4rem;
		margin-top: 0.4rem;
		text-align: left;
		color: grey;
	}

	.cell-assignment {
		position: absolute;
		font-size: 400%;
	}

</style>
