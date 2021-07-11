import { useWatchPosition } from "@capacitor-community/react-hooks/geolocation"
import { useEffect, useState } from "react"

export const useRealPosition = () => {
	const { currentPosition, startWatch, clearWatch } = useWatchPosition()

	useEffect(() => {
		startWatch()

		return () => {
			clearWatch()
		}
	}, [startWatch, clearWatch])

	return currentPosition?.coords
}

export const useSimulatedPosition = () => {
	const from = { latitude: 47.7426476, longitude: 7.340756 },
		to = { latitude: 47.7386289, longitude: 7.3293385 },
		speed = 0.02,
		refresh = 50,
		[currentPosition, setCurrentPosition] = useState(from)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentPosition(position => ({
				latitude: position.latitude + (to.latitude - position.latitude) * speed,
				longitude:
					position.longitude + (to.longitude - position.longitude) * speed
			}))
		}, refresh)

		return () => {
			clearInterval(interval)
		}
	}, [setCurrentPosition, to.latitude, to.longitude])

	return currentPosition
}
