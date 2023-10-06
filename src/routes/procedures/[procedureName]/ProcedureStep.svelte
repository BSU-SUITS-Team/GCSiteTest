<script>
	import { Timeline, TimelineItem, Button, Textarea } from 'flowbite-svelte';
	import { ArrowRightOutline, PlusSolid } from 'flowbite-svelte-icons';

	export let title;
	export let date;
	export let description;
	export let links = [];

	export let substeps = [];

	let edit = false;
    let substepedits = [];
</script>

<TimelineItem {title} {date}>
	{#if edit}
		<Textarea
			class="text-base font-normal text-gray-500 dark:text-gray-400 mb-2"
			value={description}
			rows="5"
		>
			{description}
		</Textarea>
		<Button class="mb-2" on:click={() => (edit = !edit)}>Save</Button>
		<br />
	{:else}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<p
			class="text-base font-normal text-gray-500 dark:text-gray-400 mb-4"
			on:click={() => (edit = !edit)}
		>
			{description}
		</p>
	{/if}
	{#if substeps.length > 0}
		<Timeline>
			{#each substeps as substep}
				<TimelineItem title={substep.title} date="{date}.{substeps.indexOf(substep) + 1}">
					<!-- <p class="text-base font-normal text-gray-500 dark:text-gray-400 mb-4">
						{substep.description}
					</p> -->
                    {#if substepedits[substeps.indexOf(substep)]}
                        <Textarea
                            class="text-base font-normal text-gray-500 dark:text-gray-400 mb-2"
                            value={substep.description}
                            rows="5"
                        >
                            {substep.description}
                        </Textarea>
                        <Button class="mb-2" on:click={() => (substepedits[substeps.indexOf(substep)] = !substepedits[substeps.indexOf(substep)])}>Save</Button>
                        <br />
                    {:else}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <p
                            class="text-base font-normal text-gray-500 dark:text-gray-400 mb-4"
                            on:click={() => (substepedits[substeps.indexOf(substep)] = !substepedits[substeps.indexOf(substep)])}
                        >
                            {substep.description}
                        </p>
                    {/if}
				</TimelineItem>
			{/each}
		</Timeline>
	{/if}
	{#each links as link}
		<Button color="alternative" class="m-1">{link}</Button>
	{/each}
	<Button color="alternative" class="m-1">New Condition<PlusSolid class="w-3 h-3 ml-2" /></Button>
</TimelineItem>
