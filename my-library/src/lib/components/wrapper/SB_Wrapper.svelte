<script lang="ts">
    import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';
	import Wrapper from './Wrapper.svelte';
	export let blok;
</script>

<div use:storyblokEditable={blok}>
    <Wrapper {...blok}>
        {#each blok.body as body}
        <StoryblokComponent blok={body} />
        {/each}
    </Wrapper>
</div>