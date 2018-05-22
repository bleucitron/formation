import { Tweet } from './interfaces';

export default function(url: string): Promise<Tweet[]> {
  return fetch(url).then(resp => resp.json());
}
