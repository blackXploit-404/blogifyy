export const RECAPTCHA_SITE_KEY =
  import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6Le_udAtAAAAADtRshA4GYGJakenq3fzcYSVis04';

// Turned off for now: the widget kept failing to load on the deployed domain and
// blocked sign in. Re-enable by flipping this to true, after the deployed domain is
// whitelisted on the site key in the Google reCAPTCHA console.
export const RECAPTCHA_ENABLED = false;
