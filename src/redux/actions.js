export const loginUser = (user) => {
    return {
        type: 'LOGIN_USER',
        value: user
    }
}

export const removeListing = (index) => {
    return {
        type: 'REMOVE_LISTING',
        value: index
    }
}

export const addListing = (listing) => {
    return {
        type: 'ADD_LISTING',
        value: listing
    }
}

export const updateMap = (address) => {
    return {
        type: 'UPDATE_MAP',
        value: address
    }
}

