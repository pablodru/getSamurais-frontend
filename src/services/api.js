export function configToken() {
    const { token } =  JSON.parse(localStorage.getItem('data'));
    
    const object = {headers: {'Authorization': `Bearer ${token}`}};
    return object;
}