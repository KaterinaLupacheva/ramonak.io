import { useEffect, useState } from 'react';

export default function useViewsCounter(slug) {
  const [views, setViews] = useState(null);

  useEffect(() => {
    const res = fetch(`/api/views/${slug}`).then((res) => res.json());
    setViews(res);
    // Don't count views on localhost
    // if (process.env.NODE_ENV !== 'production') {
    //   return;
    // }

    // const url = 'https://my-projects-dashboard.vercel.app';

    // fetch(`${url}/api/views/${slug}`)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setViews(json.totalViews);
    //   })
    //   .catch((err) => console.error(err.message));
  }, [slug]);
  return { views };
}
