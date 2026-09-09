const isVercelProduction = process.env.VERCEL_ENV === 'production';
const isPilotPreviewBranch =
  process.env.VERCEL_ENV === 'preview' && process.env.VERCEL_GIT_COMMIT_REF === 'pilot';
const isExplicitPilot = process.env.SITE_MODE === 'pilot';

// Keep the public Vercel production deployment on Coming Soon until launch.
// The dedicated `pilot` branch becomes the private Pilot preview automatically.
// SITE_MODE=pilot remains available for local/non-production testing.
export const siteMode =
  !isVercelProduction && (isExplicitPilot || isPilotPreviewBranch) ? 'pilot' : 'coming-soon';

export const isPilot = siteMode === 'pilot';
