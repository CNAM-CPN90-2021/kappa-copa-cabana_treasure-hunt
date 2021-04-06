import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonContent,
	IonFooter,
	IonHeader,
	IonItem,
	IonPage,
	IonRouterLink,
	IonTabButton,
	IonTitle,
	IonToolbar
} from "@ionic/react"
import "./Home.css"

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonContent fullscreen>
				<IonCard>
					<IonCardHeader>
						<IonCardTitle>Appocalypse ZOMBID-21</IonCardTitle>
					</IonCardHeader>
					<img
						src="https://raw.githubusercontent.com/CNAM-CPN90-2021/kappa-copa-cabana_treasure-hunt/main/public/assets/img/zombie.jpg"
						alt="ZOMBIE"
					/>
					<IonCardContent>
						<IonCardSubtitle>15 novembre 2050...</IonCardSubtitle>
						Un virus s'est abattu sur notre monde. Les premières personnes
						touchées inquiètent énormément les scientifiques du monde entier.
						Ces cas présentent des décolorations de la peau, des cheveux et des
						yeux et deviennent extrêmement violent. Très vite, le virus se
						propage et touche la majeure partie de la population. Seules
						quelques personnes y ont réchappées et cherchent un remède ou
						essaient simplement de survivre.
					</IonCardContent>
					<IonItem button>
						<IonRouterLink routerLink="/scenarios">
							Tenter de sauver le monde...
						</IonRouterLink>
					</IonItem>
				</IonCard>
			</IonContent>
		</IonPage>
	)
}

export default Home
