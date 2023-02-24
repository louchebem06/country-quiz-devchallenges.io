<script lang="ts">
	export let score: number;
	export let end: boolean;
</script>

<div class="container">
	<h1>Country quiz</h1>
	<div class="content">
		<img src="/undraw_winners_ao2o 2.svg" alt="" />
		<h2>Results</h2>
		<p>You got <b>{score}</b> correct answers</p>
		<button>Try again</button>
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

	.content {
		position: relative;
		width: 464px;
		padding: 32px;
		background: #FFFFFF;
		border-radius: 24px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.content h2 {
		font-style: normal;
		font-weight: 700;
		font-size: 48px;
		line-height: 72px;
		color: #1D355D;
		margin-top: 72px;
		margin-bottom: 10px;
	}

	.content p {
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 27px;
		color: #1D355D;
	}

	.content p b {
		color: #6FCF97;
		font-weight: 700;
		font-size: 36px;
	}

	.content button {
		margin-top: 71px;
		font-style: normal;
		font-weight: 600;
		font-size: 18px;
		line-height: 27px;
		color: #1D355D;
		width: 209px;
		height: 62px;
		border: 2px solid #1D355D;
		border-radius: 12px;
		background-color: transparent;
		cursor: pointer;
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
</style>
