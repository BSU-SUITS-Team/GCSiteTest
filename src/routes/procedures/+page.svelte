<script>
	import { Breadcrumb, BreadcrumbItem, Heading, Span } from 'flowbite-svelte';
	import { Timeline, TimelineItem, Button, Card } from 'flowbite-svelte';
	import { ArrowRightOutline, PlusSolid } from 'flowbite-svelte-icons';

	let prodecureNames = [
		'Test Procedure 1',
		'How to make a sandwich',
		'Emergency Snack Procedure',
		'Deploy Parachute',
		'Do EVA',
		'Test Procedure 5'
	];
</script>

<div class="w-fit h-fit m-4">
	<Breadcrumb solid class="mb-4">
		<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
		<BreadcrumbItem href="/procedures">Procedures</BreadcrumbItem>
	</Breadcrumb>
	<Heading tag="h2" class="mb-3">Procedures</Heading>
	<div class="flex flex-row flex-wrap">
		{#each prodecureNames as prcedure}
			<Button href="/procedures/{prcedure}" class="m-1 flex" color="alternative">{prcedure}</Button>
		{/each}
	</div>
</div>
