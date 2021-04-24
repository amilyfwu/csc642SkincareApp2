const initState = () => ({
    items: [],
    title: '',
    type: '',
    price: 0,
    id: '',
});

const newDataReducer = (state = initState(), action) => {
    switch(action.type){
        case 'ITEMS':
            return {
                ...state,
                items: action.items
            };
        case 'ALL':
            return {
                ...state,
                title: action.title,
                type: action.types,
                price: action.price,
                id: action.price,
            };
        case 'TITLE':
            return {
                ...state,
                title: action.title,
            };
        case 'TYPE':
            return {
                ...state,
                type: action.types,
            };
        case 'PRICE':
            return {
                ...state,
                price: action.price,
            };
        case 'ID':
            return {
                ...state,
                id: action.price,
            };
        default:
            return state;
    }
};

export default newDataReducer;