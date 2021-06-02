import {
	IonBackButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonItem,
	IonItemGroup,
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
					<IonItem button routerLink="/scenarios/infected">
						Mode Infecté
					</IonItem>
					<IonItem button routerLink="/barcode">
						Mode Scientifique
					</IonItem>
				</IonItemGroup>
			</IonContent>
		</IonPage>
	)
}

export default Scenarios
export { Infected as InfectedScenario }
