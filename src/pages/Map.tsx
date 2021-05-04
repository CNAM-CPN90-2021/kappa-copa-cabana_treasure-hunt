import {
	IonPage,
	IonHeader,
	IonBackButton,
	IonButtons,
	IonContent,
	IonTitle,
	IonToolbar
} from "@ionic/react"
import React, { useState } from "react"
import ReactMapGL, { Layer } from "react-map-gl"
import { MAPBOX_ACCESS_TOKEN } from "../config"

const Map: React.FC = () => {
	const layer = {
		source: ""
	}

	const [viewPort, setViewPort] = useState({
		width: "100%",
		height: "100%",
		latitude: 49.2536,
		longitude: 4.0354,
		zoom: 8
	})

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton />
					</IonButtons>
					<IonTitle>Carte</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<div
					className="map__container"
					style={{ width: "100%", height: "90vh" }}
				>
					<ReactMapGL
						{...viewPort}
						mapStyle="mapbox://styles/thomashnrt/cko9rpubj6d3917qsgmumi2rg"
						onViewportChange={(
							newViewPort: React.SetStateAction<{
								width: string
								height: string
								latitude: number
								longitude: number
								zoom: number
							}>
						) => setViewPort(newViewPort)}
					></ReactMapGL>
				</div>
				<p>Description</p>
			</IonContent>
		</IonPage>
	)
}

export default Map
