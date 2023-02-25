<script lang="ts">
	import type {ResponseType} from '$lib/ResponseType'
	import Response from "$lib/Response.svelte";
  	import NextButton from "$lib/NextButton.svelte";

	export let question: string;
	export let flag: string = "";
	export let responses: ResponseType[];
	export let score: number;
	export let end: boolean;
	export let newQuestion: any;

	let clicked: boolean = false;
	let letter = "A";
	let internalClicked: boolean[] = [false, false, false, false];

	function nextLetter() {
		let charCode = letter.charCodeAt(0);
		letter = String.fromCharCode(charCode + 1);
		return (String.fromCharCode(charCode));
	}

	function nextButton() {
		clicked = false;
		internalClicked = [false, false, false, false];
		newQuestion();
	}
</script>

<div class="container">
	<h1>Country quiz</h1>
	<img class="top" src="/undraw_adventure_4hum 1.svg" alt="" />
	<div class="content">
		<img src={flag} alt="" />
		<h1>{question}</h1>
		{#each responses as response, i}
			<Response
				letter={nextLetter()}
				bind:response={response}
				bind:clicked={clicked}
				bind:score={score}
				bind:end={end}
				bind:internalClicked={internalClicked[i]}
			/>
		{/each}
		{#if clicked}
			<NextButton fn={nextButton} />
		{/if}
	</div>
</div>

<style>
	.container {
		transform: translateY(-54px);
	}

	.container h1 {
		font-style: normal;
		font-weight: 700;
		font-size: 36px;
		line-height: 54px;
		text-transform: uppercase;
		color: #F2F2F2;
		margin-bottom: 10px;
	}

	.container img.top {
		position: absolute;
		top: -10px;
		right: 0;
		z-index: 1;
	}

	.content {
		position: relative;
		width: 464px;
		padding: 32px;
		background: #FFFFFF;
		border-radius: 24px;
	}

	.content h1 {
		font-style: normal;
		font-weight: 700;
		font-size: 24px;
		line-height: 36px;
		color: #2F527B;
		text-transform: none;
	}

	.content img {
		filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
		border-radius: 4px;
		width: 84px;
		margin: 28px 0;
	}

	@media screen and (max-width: 560px) {
		.container {
			width: 100%;
		}

		.content {
			width: 100%;
			margin: 0 12px;
		}
	}

	@media screen and (max-height: 600px) {
		.container {
			transform: translateY(0);
		}
	}
</style>
