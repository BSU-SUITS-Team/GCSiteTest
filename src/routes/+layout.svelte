<script>
	import '../app.postcss';
	import Sidebar from './Sidebar.svelte';
	import { Heading, DarkMode } from 'flowbite-svelte';
</script>

<div class="app h-screen dark:bg-gray-900">
	<aside class="flex-grow-0 flex-shrink-0 w-fit h-full flex-col justify-between flex dark:bg-gray-800 border-x-2">
		<span class="p-8 text-center">
			<Heading tag="h1">
				ARSIS
			</Heading>
		</span>
		<div>
			<Sidebar /> 
		</div>
		<div class="flex-grow"></div>
		<div class="p-4">
			<DarkMode />
		</div>
	</aside>

	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
