import { useStoryblokApi } from '@storyblok/svelte';

export async function getStoryData(params) {
	const storyblokApi = useStoryblokApi();
	const { lang, path, slug } = params;

	return await storyblokApi.get(`cdn/stories/${path}/${slug}?language=${lang}`, {
		// NOTE: `version: 'draft'` means we retrieve unpublished content
		// TODO: provide a mechanism to switch between preview and published
		// TODO: ensure only published content is visible on production
		version: 'draft',
	});
}