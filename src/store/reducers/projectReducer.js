const initState = {
    projects: [
        { id: '1', title: 'Hombres de Negro: internacional', content: 'Proyecto de pelicula de extraterrestres' },
        { id: '2', title: 'El señor de los anillos: Las comunidad del anillo', content: 'Primer pelicula de la trilogia del Señor de los anillos' },
        { id: '3', title: 'Zootopia', content: 'Pelicula animada de animales haciendo el papel de humanos' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log('created project error', action.err)
            return state
        default:
            return state
    }
}

export default projectReducer