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
            title: "Install Jetpack",
            date: "Step 1",
            description: "Update all of the procedure here to see what can be done to improve the expereince of the",
            links: ["Battery &lt 20%", "Oxygen &gt 50%"]
        },
        {
            title: "Install Jetpack",
            date: "Step 1",
            description: "Update all of the procedure here to see what can be done to improve the expereince of the"
        },
        {
            title: "Install Jetpack",
            date: "Step 1",
            description: "Update all of the procedure here to see what can be done to improve the expereince of the",
            substeps: [
                {
                    title: "Install Jetpack",
                    date: "Step 1",
                    description: "Update all of the procedure here to see what can be done to improve the expereince of the"
                },
                {
                    title: "Install Jetpack",
                    date: "Step 1",
                    description: "Update all of the procedure here to see what can be done to improve the expereince of the"
                },
                {
                    title: "Install Jetpack",
                    date: "Step 1",
                    description: "Update all of the procedure here to see what can be done to improve the expereince of the"
                }
            ]
        }
    ]
</script>

<Card>
	<Heading tag="h2" class="mb-3">{name}</Heading>
	<Timeline>
		<!-- <TimelineItem title="Install Jetpack" date="Step 1">
			<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
				Update all of the procedure here to see what can be done to improve the expereince of the <span
					class="text-primary-700">test</span
				>
			</p>
			<Button color="alternative">Battery &lt 20%</Button>
			<Button color="alternative">Oxygen &gt 50%</Button>
			<Button color="alternative">New Condition<PlusSolid class="w-3 h-3 ml-2" /></Button>
		</TimelineItem>
		<TimelineItem title="Launch Missiles" date="Step 2">
			<p class="text-base font-normal text-gray-500 dark:text-gray-400 mb-4">
				Here is another test
			</p>
			<Button color="alternative">New Condition<PlusSolid class="w-3 h-3 ml-2" /></Button>
		</TimelineItem>
		<ProcedureStep {...testProceduralProcedure} /> -->
        {#each allSteps as step}
            <ProcedureStep {...step} />
        {/each}
	</Timeline>
</Card>
