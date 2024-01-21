<script>
	import { navLinks } from '$lib/constants/index';
</script>

<header class="w-full px-8 flex-between fixed top-0 bg-dark-100">
	<a href="/"
		><img
			src="/images/profile.jpg"
			alt="profile pic"
			class="w-20 h-20 rounded-full border-primary border-[4px]"
		/></a
	>

	<div class="w-20 h-3 bg-primary rounded-full"></div>

	<nav>
		<ul class="flex gap-10">
			{#each navLinks as { href, title }}
				<li>
					<a {href}>
						{title}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
