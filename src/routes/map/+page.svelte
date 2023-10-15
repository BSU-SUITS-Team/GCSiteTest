<script>
	import Panview from "./Panview.svelte";
    import img from '$lib/images/test.svg';
	import { MapPinAltSolid } from "flowbite-svelte-icons";
	import PinButton from "./PinButton.svelte";
	import { Heading } from "flowbite-svelte";
</script>

<div class="pr-96 h-full">
    <div class="flex justify-center items-center h-full w-fit flex-col">
        <Heading class="pb-3">Map</Heading>
        <div class="rounded-lg overflow-clip shadow-xl flex" style="width: 40rem; height: 40rem;">
            <Panview 
                image={img}
                initalSize=10
                minScale=1
                maxScale=20
                xRange={[-1000, 0]}
                yRange={[-1000, 0]}
            >
            </Panview>
        </div>
    </div>
</div>