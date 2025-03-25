export const fetchMarineData = async (lat, lng) => {
    const response = await fetch(
        `https://marine-api.open-meteo.com/v1/marine?latitude=43.8&longitude=-7.8&timezone=auto`
    );

    console.log(response);
    const data = await response.json();
    console.log(data);
    return {
        latitude: data.latitude,
    };
};
