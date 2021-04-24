export const setNewItems = (items) => ({
    type: 'ITEMS',
    items,
});
export const setNewAll = (title,types,price,id) => ({
    type: 'ALL',
    title,
    types,
    price,
    id,
});
export const setNewTitle = (title) => ({
    type: 'TITLE',
    title,
});

export const setNewType = (types) => ({
    type: 'TYPE',
    types,
});

export const setNewPrice = (price) => ({
    type: 'PRICE',
    price,
});
export const setId = (id) => ({
    type: 'ID',
    id,
});