<script lang="ts">
	import Signature from "$lib/Signature.svelte";
	import Question from "$lib/Question.svelte";

	let score: number = 0;
	let end: boolean = false;
</script>

<svelte:head>
	<title>Country quiz</title>
</svelte:head>

<Signature />
<Question
	bind:score={score}
	bind:end={end}
	question="Work in progress"
	responses={
		[
			{
				response: "First response",
				value: true
			},
			{
				response: "Second response",
				value: false
			},
			{
				response: "Other response",
				value: false
			}
		]
	}
/>
