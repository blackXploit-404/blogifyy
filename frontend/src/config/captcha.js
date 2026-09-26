export const RECAPTCHA_SITE_KEY =
  import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6Le_udAtAAAAADtRshA4GYGJakenq3fzcYSVis04';

export const RECAPTCHA_ENABLED = import.meta.env.PROD && Boolean(RECAPTCHA_SITE_KEY);
