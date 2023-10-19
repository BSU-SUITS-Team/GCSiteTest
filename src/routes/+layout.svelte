<script>
	import '../app.postcss';
	import Sidebar from './Sidebar.svelte';
	import { spring } from 'svelte/motion';
	import { graphdata, keepables } from './store.js';
	import { Heading, DarkMode, Button, Span } from 'flowbite-svelte';
	import { TrashBinOutline, FileEditSolid } from 'flowbite-svelte-icons';
	import Graph from './graph.svelte';
	import TinyGraph from './TinyGraph.svelte';

	$: hasSideBar = Object.keys($keepables).length > 0 || Object.keys($graphdata).length > 0;
</script>

<div class="flex flex-col">
	<div class="h-16 border-b p-4 flex flex-row justify-between">
		<div class="flex flex-row">
			<p class="text-xl pr-12">Oxygen: <Span highlight>96 Minuties</Span></p>			
			<p class="text-xl">32 Minuties Elapsed</p>
		</div>
		<p class="text-xl">Other Important Text That Is Longer and Sort of Just Sits at the Top Providing Status</p>
	</div>
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
	
		<main class="flex flex-col flex-1 ml-64 overflow-y-auto {hasSideBar ? 'mr-72' : ''}">
			<slot />
		</main>
		{#if hasSideBar}
			<div
			class="absolute right-0 h-full p-8 bg-white dark:bg-gray-900 overflow-y-auto"
			style="width: 22rem;"
		>
				{#each new Set([...Object.keys($keepables), ...Object.keys($graphdata)]) as label}
					<div class="border-b flex-row flex pb-2 mb-1 dark:border-gray-700">
						<Heading tag="h4">{label}</Heading>
						<FileEditSolid class="dark:text-gray-400 mr-2 h-7 text-gray-800" href="/rover" />
						<TrashBinOutline class="dark:text-gray-400 h-7 text-gray-800" />
					</div>
	
					{#if $keepables[label]}
						<div class="flex justify-left pr-2 pl-2 flex-wrap">
							{#each $keepables[label] as item}
								<div class="p-1">
									<Button
									color="alternative"
									on:click={() => keepables.removeElement(label, item[0])}
								>
										{item[0]}&nbsp
										<Span highlight>{item[1]}</Span>
									</Button>
								</div>
							{/each}
						</div>
					{/if}
	
					{#if $graphdata[label]}
						{#each Object.keys($graphdata[label]) as graph}
							<div
								class="h-52 flex p-3"
								on:click={() => graphdata.removeGraph(label, graph)}
								role="button"
								tabindex="0"
								on:keydown={() => graphdata.removeGraph(label, graph)}
							>
								<TinyGraph
									graphdata={$graphdata[label][graph]}
									name={graph}
									status={$graphdata[label][graph][$graphdata[label][graph].length - 1]}
								/>
							</div>
						{/each}
					{/if}
				{/each}
			</div>
		{/if}
</div>	
</div>