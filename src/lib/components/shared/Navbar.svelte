<script>
	import { navLinks } from '$lib/constants/index';
</script>

<header class="w-full px-8 flex-between absolute top-0 bg-dark-100 py-2">
	<a href="/"
		><img
			src="/images/avatar.jpg"
			alt="profile pic"
			class="w-14 h-14 rounded-full border-primary border-[4px]"
		/></a
	>

	<nav>
		<ul class="flex-center gap-10">
			<div class="w-20 h-2 bg-primary rounded-full"></div>
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
