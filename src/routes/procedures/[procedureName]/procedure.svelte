<script>
	import { Timeline, TimelineItem, Button, Card, Heading } from 'flowbite-svelte';
	import { ArrowRightOutline, PlusSolid } from 'flowbite-svelte-icons';
	import ProcedureStep from './ProcedureStep.svelte';

	export let name;

	// let testProceduralProcedure = {
	//     title: "Install Jetpack",
	//     date: "Step 3",
	//     description: "Update all of the procedure here to see what can be done to improve the expereince of the",
	//     substeps: [
	//         {
	//             title: "Install Jetpack",
	//             date: "Step 1",
	//             description: "Update all of the procedure here to see what can be done to improve the expereince of the"
	//         },
	//         {
	//             title: "Install Jetpack",
	//             date: "Step 1",
	//             description: "Update all of the procedure here to see what can be done to improve the expereince of the"
	//         },
	//         {
	//             title: "Install Jetpack",
	//             date: "Step 1",
	//             description: "Update all of the procedure here to see what can be done to improve the expereince of the"
	//         }
	//     ]
	// }
	let allSteps = [
		{
			title: 'Install Jetpack',
			description:
				'Update all of the procedure here to see what can be done to improve the expereince of the',
			links: ['Battery < 20%', 'Oxygen > 50%']
		},
		{
			title: 'Launch Missiles',
			description:
				'Update all of the procedure here to see what can be done to improve the expereince of the'
		},
		{
			title: 'Propare Tofu',
			description:
				'Update all of the procedure here to see what can be done to improve the expereince of the',
			substeps: [
				{
					title: 'Boil Water',
					date: 'Step 1',
					description:
						'Update all of the procedure here to see what can be done to improve the expereince of the'
				},
				{
					title: '[REDACTED]',
					date: 'Step 1',
					description: '🔥'
				},
				{
					title: 'Serve',
					date: 'Step 1',
					description:
						'Update all of the procedure here to see what can be done to improve the expereince of the'
				}
			]
		}
	];
</script>

<Heading tag="h2" class="mb-3">{name}</Heading>
<Timeline>
	{#each allSteps as step}
		<ProcedureStep {...step} date="Step {allSteps.indexOf(step) + 1}" />
	{/each}
</Timeline>
