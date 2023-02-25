<script lang="ts">
	import type {Countrie} from '$lib/Countrie';
	import type {ResponseType} from '$lib/ResponseType'
	import Signature from "$lib/Signature.svelte";
	import Question from "$lib/Question.svelte";
  	import Win from "$lib/Win.svelte";

	export let data;
	const values: Countrie[] = data.values;

	interface QuestionInterface {
		question: string,
		flag: string,
		responses: ResponseType[]
	};
	
	let question: QuestionInterface;
	let score: number = 0;
	let end: boolean = false;

	function getRandom(max: number): number {
		return (Math.floor(Math.random() * max));
	}

	function getFlag(): QuestionInterface {
		const random = getRandom(values.length);
		const countrie: Countrie = values[random];
		let responses: ResponseType[] = [];
		responses.push({response: countrie.name.common, value: true});
		for (let i = 0; i < 3; i++) {
			let newRandom: number;
			do {
				newRandom = getRandom(values.length);
			} while (newRandom == random)
			const newCountrie: Countrie = values[newRandom];
			responses.push({response: newCountrie.name.common, value: false});
		}
		responses.sort(() => Math.random() - 0.5);
		return ({
			question: "Which country dows this flag belong to?",
			flag: countrie.flags.png,
			responses
		});
	}

	function getCapital(): QuestionInterface {
		const random = getRandom(values.length);
		const countrie: Countrie = values[random];
		let responses: ResponseType[] = [];
		responses.push({response: countrie.name.common, value: true});
		for (let i = 0; i < 3; i++) {
			let newRandom: number;
			do {
				newRandom = getRandom(values.length);
			} while (newRandom == random)
			const newCountrie: Countrie = values[newRandom];
			responses.push({response: newCountrie.name.common, value: false});
		}
		responses.sort(() => Math.random() - 0.5);
		return ({
			question: `${countrie.capital[0]} is the capital of`,
			flag: "",
			responses
		});
	}

	function getQuestion(): QuestionInterface {
		switch (getRandom(2)) {
			case 0:
				return (getCapital());
			default:
				return (getFlag());
		}
	}

	let viewEnd = false;
	let refresh = true;

	function newQuestion() {
		viewEnd = end;
		refresh = false;
		question = getQuestion();
		refresh = true;
	}

	function tryAgain() {
		end = false;
		score = 0;
		newQuestion();
	}

	newQuestion();
</script>

<svelte:head>
	<title>Country quiz</title>
</svelte:head>

<Signature />
{#if !viewEnd}
{#if refresh}
	<Question
		bind:score={score}
		bind:end={end}
		question={question.question}
		responses={question.responses}
		flag={question.flag}
		newQuestion={newQuestion}
	/>
{/if}
{:else}
<Win bind:score={score} tryAgain={tryAgain}/>
{/if}
