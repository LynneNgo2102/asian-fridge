import { substitutes } from '@/data/substitutes';

// `have` holds the user's normalized ingredient names; owned swaps sort first
export function getSwaps(name, have = []) {
  return (substitutes[name] || [])
    .map((s) => ({ ...s, owned: have.includes(s.name) }))
    .sort((a, b) => Number(b.owned) - Number(a.owned));
}