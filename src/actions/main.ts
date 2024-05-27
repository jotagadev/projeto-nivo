export async function fetchPrice(moeda : string) {
    try {
        const response = await fetch(`https://api.exchange.cryptomkt.com/api/3/public/price/rate?from=${moeda}&to=BRL`);
        if (!response.ok) {
            throw new Error('Falha na requisição');
        }
        const responseData = await response.json();
        
        if (responseData[moeda] && responseData[moeda].price) {
            const formattedData = { id: moeda, value: responseData[moeda].price };
            return formattedData;
        } else {
            throw new Error('Erro');
        }
    } catch (error) {
        console.error('Erro:', error);
        return null;
    }
}
