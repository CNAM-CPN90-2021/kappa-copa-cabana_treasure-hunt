import {
	IonPage,
	IonHeader,
	IonBackButton,
	IonButtons,
	IonContent,
	IonTitle,
	IonToolbar
} from "@ionic/react"
import React from "react"

const Map: React.FC = () => {
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
				<div className="map__container"></div>
				<p>Description</p>
			</IonContent>
		</IonPage>
	)
}

export default Map
