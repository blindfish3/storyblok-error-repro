<script context="module" lang="ts">
	import { storyblokInit, apiPlugin } from '@storyblok/svelte';
	// importing from the linked library leads to an error
    import { SB_Wrapper, SB_Content, SB_Page } from 'my-library/components';
	// import local version of library files to confirm they work
	// import { SB_Wrapper, SB_Content, SB_Page } from '../lib/components';


// Storyblok config
	storyblokInit({
		accessToken: import.meta.env.VITE_API_KEY_PREVIEW,
		use: [apiPlugin],
		// components with schemas defined in Storyblok should be added to this list
		// with the id of the Storyblok component definition on the left and the
		// Svelte component on the right.
		components: {
			wrapper: SB_Wrapper,
			content: SB_Content,
            page: SB_Page,
		},
	});
</script>

<slot />