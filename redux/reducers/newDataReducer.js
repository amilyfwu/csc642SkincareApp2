const initState = () => ({
    items: [],
    title: '',
    type: '',
    price: 0,
    id: '',
});

const newDataReducer = (state = initState(), action) => {
    console.log("This is new state and action",state,action);
    switch(action.type){
        case 'NEW ITEMS':
            return {
                ...state,
                items: action.items
            };
        case 'NEW ALL':
            return {
                ...state,
                title: action.title,
                type: action.types,
                price: action.price,
                id: action.id,
            };
        case 'NEW TITLE':
            return {
                ...state,
                title: action.title,
            };
        case 'NEW TYPE':
            return {
                ...state,
                type: action.types,
            };
        case 'NEW PRICE':
            return {
                ...state,
                price: action.price,
            };
        case 'NEW ID':
            return {
                ...state,
                id: action.id,
            };
        default:
            return state;
    }
};

export default newDataReducer;