<script>    
	import { Timeline, TimelineItem, Button, Card, Heading } from 'flowbite-svelte';
	import { ArrowRightOutline, PlusSolid } from 'flowbite-svelte-icons';

    export let name;
</script>


<Card>
    <Heading tag="h2" class="mb-3">{name}</Heading>
    <Timeline>
        <TimelineItem title="Install Jetpack" date="Step 1">
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
            <p class="text-base font-normal text-gray-500 dark:text-gray-400 mb-4">Here is another test</p>
            <Button color="alternative">New Condition<PlusSolid class="w-3 h-3 ml-2" /></Button>
        </TimelineItem>
        <TimelineItem title="Prepare Tofu" date="Step 3">
            <p class="text-base font-normal text-gray-500 dark:text-gray-400 mb-4">
                This is a long and complicated procedure with multiple substeps
            </p>
            <Timeline>
                <TimelineItem date="Step 3.1">
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400 mb-4">
                        This is a long and complicated procedure with multiple substeps
                    </p>
                </TimelineItem>
                <TimelineItem date="Step 3.2">
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400 mb-4">
                        This is a long and complicated procedure with multiple substeps
                    </p>
                </TimelineItem>
                <TimelineItem date="Step 3.3">
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400 mb-4">
                        This is a long and complicated procedure with multiple substeps
                    </p>
                </TimelineItem>
            </Timeline>
            <Button color="alternative">New Condition<PlusSolid class="w-3 h-3 ml-2" /></Button>
        </TimelineItem>
    </Timeline>
</Card>