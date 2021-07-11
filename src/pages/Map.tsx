import {
	IonPage,
	IonHeader,
	IonBackButton,
	IonButtons,
	IonContent,
	IonTitle,
	IonToolbar
} from "@ionic/react"
// import { Marker } from "mapbox-gl"
import React, { useState } from "react"
import ReactMapGL, { Marker } from "react-map-gl"
import { useRealPosition, useSimulatedPosition } from "../hooks/usePosition"
import distance from "@turf/distance"
import { point } from "@turf/helpers"

const Map: React.FC = () => {
	const [viewPort, setViewPort] = useState({
		width: "100%",
		height: "10",
		latitude: 49.2536,
		longitude: 4.0354,
		zoom: 5
	})

	const position = useSimulatedPosition()

	const marker = {
		offsetLeft: (-1 * 30) / 2,
		offsetTop: (1 * 30) / 2
	}

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
					>
						<Marker
							{...marker}
							latitude={position?.latitude ?? 0}
							longitude={position?.longitude ?? 0}
						>
							<div
								style={{
									background: "red",
									height: "30px",
									width: "30px",
									borderRadius: "50%"
								}}
							/>
						</Marker>
					</ReactMapGL>
				</div>
				<p>Description</p>
			</IonContent>
		</IonPage>
	)
}

export default Map
