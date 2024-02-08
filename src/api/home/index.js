import { endpointFetch } from "../../functions/endpoint"

export const homeAPI = async ( environment ) => {

    const endpoint = endpointFetch( environment )

    // NETWORK CALL TO GET DATA
    const network_data = await fetch( endpoint + "/home" )
    const data_json = await network_data.json()

    const { home, projects, services, blogs, meta } = data_json.data

    let home_data = {

        // HOME PROPS
        hero : "",
        lets_talk : "",
        insights : "",
        clients : "",
        services : "",
        telephone_number : "",
        location : "",

    }
    home.map( ( data ) => {

        if( data.slug === "hero" )
            home_data.hero = data
        else if( data.slug === "lets-talk" )
            home_data.lets_talk = data
        else if ( data.slug === "insights" )
            home_data.insights = data
        else if ( data.slug === "clients" )
            home_data.clients = data
        else if ( data.slug === "services" )
            home_data.services = data
        else if ( data.slug === "telephone-number" )
            home_data.telephone_number = data
        else if ( data.slug === "location" )
            home_data.location = data

    })

    return { home_data, projects, services, blogs, meta }

}
