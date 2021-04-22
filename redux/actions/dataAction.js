export const setItems = (items) => ({
    type: 'ITEMS',
    items,
});

export const setAll = (title,types,price,status,rating,comment,day,night,dateEntered,id) => ({
    type: 'ALL',
    title,
    types,
    price,
    status,
    rating,
    comment,
    day,
    night,
    dateEntered,
    id,
});

export const setTitle = (title) => ({
    type: 'TITLE',
    title,
});

export const setType = (types) => ({
    type: 'TYPE',
    types,
});

export const setPrice = (price) => ({
    type: 'PRICE',
    price,
});

export const setStatus = (status) => ({
    type: 'STATUS',
    status,
});

export const setRating = (rating) => ({
    type: 'RATING',
    rating,
});

export const setComment = (comment) => ({
    type: 'COMMENT',
    comment,
});

export const setDay = (day) => ({
    type: 'DAY',
    day,
});

export const setNight = (night) => ({
    type: 'NIGHT',
    night,
});

export const setDate = (dateEntered) => ({
    type: 'ID',
    dateEntered,
});

export const setId = (id) => ({
    type: 'ID',
    id,
});