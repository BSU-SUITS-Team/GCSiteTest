<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { Button } from 'flowbite-svelte';


	export let notify;

	function doNotify() {
		notify("aaaaahhhhhhhhhh");
	}
</script>

<svelte:head>
	<title>Home Page</title>
	<meta name="description" content="ARSIS ground station"/>
</svelte:head>

<section>
	<div class="justify-center pr-72">
		<Button on:click={doNotify}>test</Button>
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
