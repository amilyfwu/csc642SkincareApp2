const initState = () => ({
    items: [],
    title: '',
    type: '',
    price: 0,
    status: '',
    rating: 0,
    comment: '',
    day: false,
    night: false,
    dateEntered: '',
    id: '',
});

const usedDataReducer = (state = initState(), action) => {
    //console.log("this is reducer page state and action" , state, action);
    switch(action.type){
        case 'USED ITEMS':
            return {
                ...state,
                items: action.items
              };
        case 'USED ALL':
            return{
                ...state,
                title: action.title,
                type: action.types,
                price: action.price,
                status: action.status,
                rating: action.rating,
                comment: action.comment,
                day: action.day,
                night:action.night,
                dateEntered: action.dateEntered,
                id: action.id,
            };
        case 'USED TITLE':
            return {
                ...state,
                title: action.title
              };
        case 'USED TYPE':
            return {
                ...state,
                type: action.types
              };
        case 'USED PRICE':
            return {
                ...state,
                price: action.price
              };
        case 'USED STATUS':
            return {
                ...state,
                status: action.status
              };
        case 'USED RATING':
            return {
                ...state,
                rating: action.rating
              };
        case 'USED COMMENT':
            return {
                ...state,
                comment: action.comment
              };
        case 'USED DAY':
            return {
                ...state,
                day: action.day
              };
        case 'USED NIGHT':
            return {
                ...state,
                night: action.night
              };
        case 'USED DATE':
            return {
                ...state,
                dateEntered: action.dateEntered
              };
        case 'USED ID':
            return {
                ...state,
                id: action.id
              };
        default:
            return state;
             
    }
};

export default usedDataReducer;