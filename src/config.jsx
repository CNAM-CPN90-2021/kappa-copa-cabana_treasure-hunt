export const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN

if (!MAPBOX_TOKEN) {
	throw new Error("NO MAPBOX ACCESS TOKEN")
}
