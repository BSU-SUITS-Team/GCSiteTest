<script>
	import { Button } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	let clicked = false;
	let poll;
	

	// window.ongamepadconnected=(e) => {console.log(e);}
	onMount(() => {
		console.log(navigator.getGamepads());
	});

	function printconnectedgamepads() {
		console.log(navigator.getGamepads()[0].buttons);
	}

	function plugIn() {
		doFrame();
	}
	function doFrame() {
		var connectedController = navigator.getGamepads()[0];
		if (connectedController == null) {
			return;
		}
		var buttons = connectedController.buttons;
		for (let buttonindex = 0; buttonindex < buttons.length; buttonindex++) {
			const element = buttons[buttonindex];
			if (buttonindex == 0) {
				if (element.pressed) {
					clicked = true;
				} else {
					clicked = false;
				}
			}
		}

		poll = requestAnimationFrame(doFrame);
	}
	function unPlug() {}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:mousedown={() => {
		printconnectedgamepads();
		clicked = true;
	}}
	on:mouseup={() => {
		clicked = false;
	}}
>
	<Button color={clicked ? 'primary' : 'alternative'}>X</Button>
</div>

<svelte:window on:gamepadconnected={plugIn} on:gamepaddisconnected={unPlug} />
