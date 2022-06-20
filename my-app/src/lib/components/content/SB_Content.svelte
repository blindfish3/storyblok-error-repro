<script lang="ts">
    import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';
	import Content from './Content.svelte';
	export let blok;
</script>

<div use:storyblokEditable={blok}>
    <Content {...blok}>
        { blok.text }
    </Content>
</div>