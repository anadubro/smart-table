// import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField = 'search') {
    // const compare = createComparison(
    //     ['skipEmptyTargetValues'],  // имена правил по умолчанию
    //     [rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)] // кастомное правило
    // );

    return (query, state, action) => { // result заменили на query
        return state[searchField] ? Object.assign({}, query, { // проверяем, что в поле поиска было что-то введено
            search: state[searchField] // устанавливаем в query параметр
        }) : query; // если поле с поиском пустое, просто возвращаем query без изменений
    }
}