<script lang="ts">
	import Circles from '$lib/component/Circles.svelte';

	export let imgURL =
		'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/IMG-20240112-WA0001-x3fHkx8kppU2AWVrincv0q8Km6reBL.jpg';
	export let figCaption = 'SuvroGhosh.BLOG';
	export let txtHeading = `About this blog`;
	export let txtContent = `Although flippant, this blog is a scratchpad of thoughts, a much-sought-after extension of my
	embarrassing tangle of nerves, unrelated fancies and figments strewn around and rattling loose in
	it, collectibles from the waste basket scraps that should have seen a shredder, or, somewhat more
	crudely, everything about anything. I'm not a prisoner to the usual boundaries that limit most
	people, and I wanted a place where the diarist in me could jot down the wanderings of his
	profligately traveling mind and not feel unwelcome. I presume I would leave the world richer in
	nonsense than anything of substance. But here I explore, when I still can, the vast and forbidden
	realms of human feats and foibles, fucks and farts, feces and fraternities. So whether you're a
	seasoned simulationist or a curious commoner, an android or an amateur, a ponderer or a
	pragmatist, join me in the infinite mosaic of collective nonsense we can explore.`;
</script>

<section>
	<figure>
		<img src={imgURL} alt={figCaption} />
		<figcaption>{figCaption}</figcaption>
	</figure>

	<article>
		<h1>{txtHeading}</h1>

		<p>
			{txtContent}
		</p>
	</article>
</section>
<Circles />
