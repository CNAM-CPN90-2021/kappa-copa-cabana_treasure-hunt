import {
	IonBackButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonPage,
	IonToolbar
} from "@ionic/react"

const Infected: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons>
						<IonBackButton />
					</IonButtons>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>Scénario Infecté</IonContent>
		</IonPage>
	)
}

export default Infected
