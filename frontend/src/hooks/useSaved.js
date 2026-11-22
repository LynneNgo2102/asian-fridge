'use client';
import { useSyncExternalStore } from 'react';
import { subscribe, getSnapshot, getServerSnapshot, toggleSaved } from '@/lib/savedStore';

const noopSubscribe = () => () => {};

export default function useSaved() {
  const ids = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  // false on the server and during hydration, true afterwards (avoids an "empty" flash)
  const ready = useSyncExternalStore(noopSubscribe, () => true, () => false);
  return { ids, ready, isSaved: (id) => ids.includes(id), toggle: toggleSaved };
}