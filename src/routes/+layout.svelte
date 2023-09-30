<script>
	import '../app.postcss';
	import Sidebar from './Sidebar.svelte';
	import { spring } from 'svelte/motion';
	import { keepables } from './store.js';
	import { Heading, DarkMode, Button, Span } from 'flowbite-svelte';
	import { TrashBinOutline, FileEditSolid } from 'flowbite-svelte-icons';
</script>

<div class="app h-screen dark:bg-gray-900 flex overflow-hidden">
	<aside
		class="absolute flex-grow-0 flex-shrink-0 w-fit h-full
				flex-col justify-between flex dark:bg-gray-800 border-r dark:border-gray-700"
	>
		<span class="p-8 text-center">
			<Heading tag="h1">ARSIS</Heading>
		</span>
		<div>
			<Sidebar />
		</div>
		<div class="flex-grow" />
		<div class="p-4">
			<DarkMode />
		</div>
	</aside>

	<main class="flex flex-col flex-1 ml-72 overflow-y-auto mr-72">
		<slot />
	</main>

	<div class="absolute right-0 h-full p-8 bg-white dark:bg-gray-900" style="width: 22rem;">
		{#each Object.keys($keepables) as keepable}
			<div class="border-b flex-row flex pb-2">
				<Heading tag="h4">{keepable}</Heading>
				<FileEditSolid class="dark:text-gray-400 mr-2 h-7 text-gray-800" href="/rover" />
				<TrashBinOutline class="dark:text-gray-400 h-7 text-gray-800" />
			</div>
			<div class="flex justify-left p-4 flex-wrap">
				{#each $keepables[keepable] as item}
					<div class="p-1">
						<Button color="alternative" on:click={() => keepables.removeElement(keepable, item[0])}>
							{item[0]}&nbsp 
							<Span highlight>{item[1]}</Span>
						</Button>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>
