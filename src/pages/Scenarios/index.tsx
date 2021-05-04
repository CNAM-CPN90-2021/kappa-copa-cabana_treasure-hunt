import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonCard,
	IonCardTitle,
	IonContent,
	IonHeader,
	IonItem,
	IonItemGroup,
	IonLabel,
	IonList,
	IonPage,
	IonTitle,
	IonToolbar
} from "@ionic/react"

import Infected from "./Infected"

const Scenarios: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton />
					</IonButtons>
					<IonTitle>Choix du mode</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonItemGroup>
					<IonItem button routerLink="/map">
						Mode Infecté
					</IonItem>
					<IonItem button routerLink="/map">
						Mode Scientifique
					</IonItem>
				</IonItemGroup>
			</IonContent>
		</IonPage>
	)
}

export default Scenarios
export { Infected as InfectedScenario }
