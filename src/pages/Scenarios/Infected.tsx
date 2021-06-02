import {
	IonBackButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonImg,
	IonPage,
	IonText,
	IonTitle,
	IonToolbar
} from "@ionic/react"

const Infected: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton />
					</IonButtons>
					<IonTitle>Mode Infecté</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonText>
					Vous faites partie de l’équipe de scientifique chargée de trouver le
					remède. Vous êtes isolé dans une des salles de test. En manipulant une
					fiole, vous la faites tomber. Celle-ci contenait une souche très
					volatile du virus ZOMBID-21. Vous ne pouvez éviter l’inévitable. Vous
					êtes contaminé.
				</IonText>
				<IonImg src="" />
			</IonContent>
		</IonPage>
	)
}

export default Infected
