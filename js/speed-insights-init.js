/**
 * Vercel Speed Insights initialization
 * This file initializes Vercel Speed Insights for tracking web performance metrics.
 */

import { injectSpeedInsights } from './speed-insights.mjs';

// Initialize Speed Insights when the page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    injectSpeedInsights({
      debug: false, // Set to true to enable debug logging in development
    });
  });
} else {
  // DOMContentLoaded has already fired
  injectSpeedInsights({
    debug: false,
  });
}
