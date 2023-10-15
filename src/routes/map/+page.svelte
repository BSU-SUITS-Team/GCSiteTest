<script>
	import Panview from "./Panview.svelte";
    import img from '$lib/images/test.svg';
	import { MapPinAltSolid } from "flowbite-svelte-icons";
	import PinButton from "./PinButton.svelte";
</script>

<div class="pr-96 h-full">
    <div class="flex justify-center items-center h-full w-fit flex-col">
        <div class="mb-4 p-2 shadow-xl rounded-lg flex-row flex">
            <PinButton/>
            <PinButton/>
            <PinButton/>
            <PinButton/>
            <PinButton/>
        </div>
        <div class="rounded-lg overflow-clip shadow-xl flex" style="width: 40rem; height: 40rem;">
            <Panview image={img}>
            </Panview>
        </div>
    </div>
</div>