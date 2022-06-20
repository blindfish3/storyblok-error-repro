<script lang="ts">
    import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';
	export let blok;
</script>

<div use:storyblokEditable={blok}>
        {#each blok.body as body}
        <StoryblokComponent blok={body} />
        {/each}
</div>