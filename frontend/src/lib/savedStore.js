const KEY = 'saved-recipes';
const EMPTY = [];
let saved = null; //loaded lazyy, in the browser only
const listeners = new Set();

function load() {
    if(saved === null) {
        try {
            const parsed = JSON.parse(localStorage.getItem(KEY));
            saved = Array.isArray(parsed) ? parsed :EMPTY;

        }catch {
            saved = EMPTY;
        }
    }
    return saved;
}

export const getSnapshot = load;
export const getServerSnapshot = () => EMPTY;

export function subscribe(callback) {
    listeners.add(callback);
    //keeps other open tabs in sync
    const onStorage = (e) => {
        if(e.key === KEY) {
            saved = null;
            callback();
        }
    };
    window.addEventListener('storage', onStorage);
    return() => {
        listeners.delete(callback);
        window.removeEventListener('storage', onStorage);
    };
}

export function toggleSaved(id) {
    const current = load();
    saved = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
    try{
        localStorage.setItem(KEY, JSON.stringify(saved));

    }catch {
        //storage full or blocked : it still works
    }
    listeners.forEach((l) => l());
}