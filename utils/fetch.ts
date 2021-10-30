import get from 'axios'

export const getRestaurantsFromYelp = async (city: string) => {
	let cors_api_host = 'cors-anywhere.herokuapp.com'
	const res = await get(
		`https://${cors_api_host}/api.yelp.com/v3/businesses/search`,
		{
			params: {
				location: city,
			},
			headers: {
				Authorization:
					'Bearer AjnPSTyhdr-v-Bk6XtU9LrwUp4JZl_pArKBox6YKubJQSpju1P2JhEoQ9RvTashcjVEBjQEIKx0UUi92JZkwCG_r6k4gknNm9J2lCKviDvrSKaW2QBkzXBwkn7p9YXYx',
			},
		}
	)
	return res.data.businesses
}
