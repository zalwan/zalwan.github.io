

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.00a9b8cb.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.5ae4157e.js","_app/immutable/chunks/paths.38ba5e8c.js"];
export const stylesheets = [];
export const fonts = [];