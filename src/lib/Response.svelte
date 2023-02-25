<script lang="ts">
	import type {ResponseType} from '$lib/ResponseType'
	export let letter: string;
	export let response: ResponseType;
	export let clicked: boolean;
	export let score: number;
	export let end: boolean;

	let internalClicked: boolean = false;
</script>

<button
	on:click={() => {
		if (clicked)
			return ;
		clicked = true
		internalClicked = true;
		if (response.value)
			score++;
		else
			end = true;
	}}
	class="response"
	class:green={clicked && response.value}
	class:red={internalClicked && !response.value}
>
	<div class="block">
		<p>{letter}</p>
		<p>{response.response}</p>
	</div>
	{#if response.value && clicked}
		<span class="material-symbols-rounded">
			check_circle
		</span>
	{:else if !response.value && internalClicked && clicked}
		<span class="material-symbols-rounded" hidden>
			cancel
		</span>
	{/if}
</button>

<style>
	.response {
		width: 100%;
		display: flex;
		padding: 10px 19px;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 27px;
		color: rgba(96, 102, 208, 0.8);
		background: #FFFFFF;
		border: 2px solid rgba(96, 102, 208, 0.7);
		border-radius: 12px;
		margin: 25px auto;
		cursor: pointer;
		justify-content: space-between;
		align-items: center;
	}

	.block {
		display: flex;
		gap: 16px;
	}

	.response:hover {
		background: #F9A826;
		border: 2px solid #F9A826;
		color: white;
	}

	.red {
		background: #EA8282!important;
		border: 2px solid #EA8282!important;
		color: white;
	}

	.green {
		background: #60BF88!important;
		border: 2px solid #60BF88!important;
		color: white;
	}
</style>
