<script>
	import { Button } from './ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { skills } from '$lib/constants';
</script>

<section id="about" class="container min-h-screen flex-center flex-col">
	<div class="text-center">
		<h2
			class="relative h2-regular italic pb-4 before:inline-block before:w-20 before:h-2 before:bg-primary before:rounded-full before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2"
		>
			About <span>Me</span>
		</h2>
		<p class="py-4">Learn <span>More</span> about your <span>favorite</span> dev</p>
	</div>

	<div class="flex gap-10">
		<div class="flex-1">
			<h3>Get to know me!</h3>
			<p class="text-sm text-justify mb-3">
				Skilled web dev passionate about crafting innovative digital experiences. Detail-oriented
				and committed to tech advancements, excelling in designing and implementing websites that
				exceed client expectations. Proficient in diverse programming languages, frameworks, and
				technologies. Adaptable to the dynamic web development landscape, thriving on turning
				concepts into reality. Dedicated to continuous learning and industry best practices for
				aesthetically pleasing, robust, and scalable solutions. Committed to delivering
				high-quality, efficient, and secure web solutions. Ready to contribute expertise to the
				evolving world of web development.
			</p>

			<a href="#projects"><Button class="text-[#060606] font-semibold px-6">My Project</Button></a>
		</div>
		<div class="flex-1">
			<h3>My skills & tools</h3>
			<div class="flex flex-wrap gap-2 mb-3">
				{#each skills as skill}
					<Badge class="bg-dark-200 text-base rounded-lg px-4">
						{skill}
					</Badge>
				{/each}
			</div>
			<a href="#projects"><Button class="text-[#060606] font-semibold px-6">My Resume</Button></a>
		</div>
	</div>
</section>

<style lang="postcss">
	h2 span,
	p span {
		@apply text-primary;
	}

	h3 {
		@apply text-white font-semibold text-2xl my-3;
	}
</style>
