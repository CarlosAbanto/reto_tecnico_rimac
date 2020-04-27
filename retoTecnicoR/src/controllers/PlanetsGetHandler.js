
const services = require('../services/PlanetsGetService');
const db = require("../db/PlanetsGetDb");


module.exports.planets = async (event, context) => {
    console.log(event);
    const options = {
      hostname: 'swapi.py4e.com',
      port: 443,
      path: '/api/planets/',
      method: 'GET'
    }
    try {
        let result = await db.obtener_planetas();
        //console.log(result);
        for(let i in result)
        {
            result[i].peliculas = await db.obtener_peliculas(result[i].id);
            result[i].residentes = await db.obtener_residentes(result[i].id);
            //result[i] = await completar_planeta(result[i], db);
        }
        let response = await services.httpRequest(options, null);
        //console.log("response: "+ JSON.stringify(response));
        if(response.results && Array.isArray(response.results))
        {
            for(let i in response.results)
            {
                let p = convertir_a_espanol(response.results[i]);
                //console.log(p);
                result.push(p);
            }
        }
        context.done(null, result);
    }
    catch(error)
    {
        console.error(error);
        context.done(error);
    }
};


function convertir_a_espanol(planet){
    let planeta = {};
    //planeta.id = planet.id;
    planeta.nombre = planet.name;
    planeta.periodo_rotacion = planet.rotation_period;
    planeta.periodo_orbital = planet.orbital_period;
    planeta.diametro = planet.diameter;
    planeta.clima = planet.climate;
    planeta.terreno = planet.terrain;
    planeta.aguas_superficiales = planet.surface_water;
    planeta.poblacion = planet.population;
    planeta.fecha_creacion = planet.created;
    planeta.fecha_modificacion = planet.edited;
    planeta.url = planet.url;
    planeta.peliculas = planet.films;
    planeta.residentes = planet.residents;    
    return planeta;
}

async function completar_planeta(planeta, db)
{
    planeta.peliculas = await db.obtener_peliculas(planeta.id);
    planeta.residentes = await db.obtener_residentes(planeta.id);
    return planeta;
}