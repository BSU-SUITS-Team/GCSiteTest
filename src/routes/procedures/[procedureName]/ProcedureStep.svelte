<script>
    import {Timeline, TimelineItem, Button} from 'flowbite-svelte';    
	import { ArrowRightOutline, PlusSolid } from 'flowbite-svelte-icons';

    export let title;
    export let date;
    export let description;
    export let links = [];

    export let substeps = [];
</script>


<TimelineItem title={title} date={date}>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400 mb-4">
        {description}
    </p>
    {#if substeps.length > 0}
        <Timeline>
            {#each substeps as substep}
                <TimelineItem title={substep.title} date="Step {substeps.indexOf(substep) + 1}">
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400 mb-4">
                        {substep.description}
                    </p>
                </TimelineItem>
            {/each}
        </Timeline>
    {/if}
    {#each links as link}
        <Button color="alternative"  class="m-1">{link}</Button>
    {/each}
    <Button color="alternative" class="m-1">New Condition<PlusSolid class="w-3 h-3 ml-2" /></Button>
</TimelineItem>