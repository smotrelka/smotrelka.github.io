import type { LayoutLoad } from './$types';

export const prerender = true;
export const trailingSlash = 'never';

export const load = (async () => {
	return {};
}) satisfies LayoutLoad;
