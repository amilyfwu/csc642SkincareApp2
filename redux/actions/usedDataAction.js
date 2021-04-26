export const setUsedItems = (items) => ({
    type: 'USED ITEMS',
    items,
});

export const setUsedAll = (title,types,price,status,rating,comment,day,night,dateEntered,id) => ({
    type: 'USED ALL',
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

export const setUsedTitle = (title) => ({
    type: 'USED TITLE',
    title,
});

export const setUsedType = (types) => ({
    type: 'USED TYPE',
    types,
});

export const setUsedPrice = (price) => ({
    type: 'USED PRICE',
    price,
});

export const setUsedStatus = (status) => ({
    type: 'USED STATUS',
    status,
});

export const setUsedRating = (rating) => ({
    type: 'USED RATING',
    rating,
});

export const setUsedComment = (comment) => ({
    type: 'USED COMMENT',
    comment,
});

export const setUsedDay = (day) => ({
    type: 'USED DAY',
    day,
});

export const setUsedNight = (night) => ({
    type: 'USED NIGHT',
    night,
});

export const setUsedDate = (dateEntered) => ({
    type: 'USED DATE',
    dateEntered,
});

export const setUsedId = (id) => ({
    type: ' USED ID',
    id,
});