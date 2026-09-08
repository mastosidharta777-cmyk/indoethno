export const siteMode = process.env.SITE_MODE === 'pilot' ? 'pilot' : 'coming-soon';
export const isPilot = siteMode === 'pilot';
