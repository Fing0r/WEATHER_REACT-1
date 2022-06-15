const STORAGE = {
    getCurrentCity: () => {
        return localStorage.getItem('cityName')
    },
    getsavedCities: () => {
        try {
            return JSON.parse(localStorage.getItem('savedCities'))
        } catch(e) {
            console.log(e.name)
        }
    }
}

export default STORAGE