<script>
	import Button from './ui/button/button.svelte';
</script>

<section
	class="w-screen h-screen bg-[url('/images/landing.png')] bg-cover flex-center flex-col gap-5"
>
	<h1 class="text-[42px] leading-[53.6px] anonymous-pro-regular-italic">
		Hey, I'm <span>ZAK</span>
	</h1>
	<p class="text-center">
		Experienced web developer who <span>enjoys</span> building <span>fast</span> <br />
		and <span>accessible</span> digital products.
	</p>
	<a href="#about"><Button class="text-[#060606]">About Me</Button></a>
</section>

<style lang="postcss">
	h1 span,
	p span {
		@apply text-primary;
	}
</style>
