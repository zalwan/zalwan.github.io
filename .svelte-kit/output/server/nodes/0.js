import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.ba52cdcb.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.5ae4157e.js","_app/immutable/chunks/paths.38ba5e8c.js"];
export const stylesheets = ["_app/immutable/assets/0.62ca8bc8.css"];
export const fonts = [];
