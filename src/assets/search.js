const search = (name, searchInput) => {
    let nameLowerCase = name.toLowerCase()
    let searchLowerCase = searchInput.toLowerCase()
    return nameLowerCase.startsWith(searchLowerCase)
   }
   
export default search

export const startSearch = ((contacts, searchText) => {
    const result = contacts.filter(contactItem => {
        if (search(contactItem.name, searchText)){
            return contactItem
        } else { 
            return null
        }
    })
    return result
})