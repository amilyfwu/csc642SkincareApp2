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
    id: null,
});

const dataReducer = (state = initState(), action) => {
    console.log("this is reducer page state and action" , state, action);
    switch(action.type){
        case 'ITEMS':
            return {
                ...state,
                items: action.items
              };
        case 'ALL':
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
        case 'TITLE':
            return {
                ...state,
                title: action.title
              };
        case 'TYPE':
            return {
                ...state,
                type: action.types
              };
        case 'PRICE':
            return {
                ...state,
                price: action.price
              };
        case 'STATUS':
            return {
                ...state,
                status: action.status
              };
        case 'RATING':
            return {
                ...state,
                rating: action.rating
              };
        case 'COMMENT':
            return {
                ...state,
                comment: action.comment
              };
        case 'DAY':
            return {
                ...state,
                day: action.day
              };
        case 'NIGHT':
            return {
                ...state,
                night: action.night
              };
        case 'DATE':
            return {
                ...state,
                dateEntered: action.dateEntered
              };
        case 'ID':
            return {
                ...state,
                id: action.id
              };
        default:
            return state;
             
    }
};

export default dataReducer;