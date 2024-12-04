export const pageview = (url: string) => {
  (window as any).gtag("config", process.env.NEXT_PUBLIC_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const trackAction = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (!(window as any).gtag) return;
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
