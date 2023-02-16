//Lets assume this file is the return value of an API that will be useful for our Heroes.jsx file.
 
let languages = [
    {
        id: 1,
        name: 'JavaScript',
        description: 'Currently learning'
    },
    {
        id: 2,
        name: 'Pascal',
        description: 'Good for learning basics of programming, but pretty much useless'
    },
    {
        id: 3,
        name: 'Java',
        description: 'Lights and shadows. I did a videogame with this language (Pokemon)'
    },
    {
        id: 4,
        name: 'Assembler',
        description: 'Mortal one 💀'
    }
]

export const getLanguages = () => languages;
export const getLanguage = id => languages.find(language => language.id.toString() === id);

export const deleteLanguage = async(id) => languages = languages.filter(
    language=> language.id !== id //Gets every language except for the one matching id in argument
)