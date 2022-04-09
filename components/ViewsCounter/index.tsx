import fetcher from 'lib/fetcher';
import useSWR from 'swr';
import type { Views } from 'ts';

import { EyeIcon, ViewsContainer, ViewsCount } from './styles';

export default function ViewsCounter({ slug }) {
  const { data } = useSWR<Views>(`/api/views/ramonak: ${slug}`, fetcher);
  const views = new Number(data?.total);

  return (
    <ViewsContainer>
      <EyeIcon />
      <ViewsCount>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</ViewsCount>
    </ViewsContainer>
  );
}
