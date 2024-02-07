export const endpointFetch = ( environment ) => {

    return environment === "staging" ? "https://staging.api.oplayo.blupp.co" : "https://api.oplayo.blupp.co"

}
