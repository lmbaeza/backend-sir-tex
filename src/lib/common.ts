export function is_empty(value: any) {
    return typeof value == 'undefined' || value == {} || value == null || value.length == 0;
}
