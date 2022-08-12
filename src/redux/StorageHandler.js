// SERIALIZACJA ORAZ DESERIALIZACJA DANYCH

const KEY = "reduxState";

// 1. Deserializujemy dane z tekstu do obiektu
export const loadState = () => {
    const serializedState = localStorage.getItem(KEY);
    return JSON.parse(serializedState);
}

// 2. Serializujemy dane z obiektu do tekstu
export const saveState = async (state) => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
}