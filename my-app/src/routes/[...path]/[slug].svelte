<!-- NOTE: Here be dragons!

In principle this can resolve any path; will request the corresponding content from Storyblok; and, if data is available, 
will feed it into the appropriate components.

If no data is returned we're assuming there's no equivalent page in Storyblok and responding with a 404

-->
<script context="module" lang="ts">
	import { getStoryData } from '../../services/storyblok/storyblok.service';

	export async function load({ params }) {
		console.log("getStoryData", params);
		const { data } = await getStoryData(params);
		if (data) {
			return {
				props: { story: data?.story },
			};
		}

		return {
			status: 404,
			error: 'Page not found',
		};
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
	import type { StoryData } from 'storyblok-js-client/types/index';

	export let story: StoryData;

	onMount(() => {
		useStoryblokBridge(story?.id, (newStory: StoryData) => (story = newStory));
	});
</script>

{#if story}
	<StoryblokComponent blok={story.content} />
{/if}
