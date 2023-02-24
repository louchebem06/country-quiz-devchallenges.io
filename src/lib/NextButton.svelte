<script lang="ts">
	export let fn: any;
</script>

<div class="container">
	<button on:click={fn}>Next</button>
</div>

<style>
	button {
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 27px;
		color: #FFFFFF;
		background: #F9A826;
		box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
		border-radius: 12px;
		width: 116px;
		height: 56px;
		border: none;
		cursor: pointer;
	}

	.container {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}
</style>
