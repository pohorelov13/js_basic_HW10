const fields = ['name', 'area', 'population', 'main street', 'mayor\'s name']

function getCity(fields) {
    const newCity = {};
    if (Array.isArray(fields)) {
        fields.forEach((f) => {
            newCity[f] = prompt(`Enter your city ${f} :`);
        });
    }
    return newCity;
}

console.log(getCity(fields));