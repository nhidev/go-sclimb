export function isMobile() {
  return /iphone|android/i.test(navigator.userAgent);
}

export function isTablet() {
  return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
    navigator.userAgent.toLowerCase()
  );
}

export function isMobileAndTablet() {
  return isMobile() || isTablet();
}
