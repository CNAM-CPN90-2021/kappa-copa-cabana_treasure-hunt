import {
	IonHeader,
	IonPage,
	IonToolbar,
	IonButtons,
	IonBackButton,
	IonTitle,
	IonContent,
	IonFabButton,
	IonFab,
	IonButton,
	useIonToast
} from "@ionic/react"

import React, { useState } from "react"
import { useBarcodeScanner } from "../hooks/useBarcodeScanner"

const Barcode: React.FC = () => {
	const [toast] = useIonToast()
	const [isScanning, setIsScanning] = useState(false)
	const { startScan, stopScan, prepare } = useBarcodeScanner()

	if (isScanning)
		return (
			<IonFab>
				<IonFabButton
					onClick={() => {
						setIsScanning(false)
						stopScan()
					}}
				></IonFabButton>
			</IonFab>
		)

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton />
					</IonButtons>
					<IonTitle>QR Code</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonButton
					onClick={async () => {
						setIsScanning(true)
						prepare()

						const answer = await startScan()
						if (answer === "good") {
							toast("BRAVO !", 2000)
						} else if (answer === "wrong") {
							toast("PERDU", 2000)
						} else {
							toast("Code inconnu", 2000)
						}

						stopScan()
					}}
				>
					Scanner un QR Code
				</IonButton>
			</IonContent>
		</IonPage>
	)
}

export default Barcode
