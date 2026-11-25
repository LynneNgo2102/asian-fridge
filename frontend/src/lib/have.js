import { normalize } from '@/lib/match';

// "chicken,rice" (or a repeated ?have=) -> ['chicken', 'rice'], cleaned the same way as typed ingredients
export function parseHave(param) {
  const raw = Array.isArray(param) ? param.join(',') : param || '';
  return [...new Set(raw.split(',').map(normalize).filter(Boolean))].slice(0, 30);
}

// builds /recipes/4?have=chicken,rice (or just /recipes/4 when nothing was typed)
export function recipeHref(id, have = []) {
  return have.length
    ? `/recipes/${id}?have=${have.map(encodeURIComponent).join(',')}`
    : `/recipes/${id}`;
}