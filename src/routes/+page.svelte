<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home Page</title>
	<meta name="description" content="ARSIS ground station" />
</svelte:head>

<section>
	<div class="justify-center pr-72">
		<h1 class="text-3xl dark:text-white">TODO</h1>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
