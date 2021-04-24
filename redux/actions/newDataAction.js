export const setNewItems = (items) => ({
    type: 'NEW ITEMS',
    items,
});
export const setNewAll = (title,types,price,id) => ({
    type: 'NEW ALL',
    title,
    types,
    price,
    id,
});
export const setNewTitle = (title) => ({
    type: 'NEW TITLE',
    title,
});

export const setNewType = (types) => ({
    type: 'NEW TYPE',
    types,
});

export const setNewPrice = (price) => ({
    type: 'NEW PRICE',
    price,
});
export const setId = (id) => ({
    type: 'NEW ID',
    id,
});