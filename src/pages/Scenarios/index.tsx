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
	IonList,
	IonPage,
	IonToolbar
} from "@ionic/react"

import Infected from "./Infected"

const Scenarios: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons>
						<IonBackButton />
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonItemGroup>
					<IonItem button routerLink="/scenarios/infected">
						Mode Infecté
					</IonItem>
					<IonItem button routerLink="">
						Mode Scientifique
					</IonItem>
				</IonItemGroup>
			</IonContent>
		</IonPage>
	)
}

export default Scenarios
export { Infected as InfectedScenario }
