import { Plugins } from "@capacitor/core"

export const useBarcodeScanner = () => {
	const { BarcodeScanner } = Plugins

	const prepare = () => {
		BarcodeScanner.prepare()
	}

	const startScan = async () => {
		BarcodeScanner.hideBackground()

		const result = await BarcodeScanner.startScan()

		if (result.hasContent) {
			return result.content
		}
		return null
	}

	const stopScan = () => {
		BarcodeScanner.showBackground()
		BarcodeScanner.stopScan()
	}

	return { startScan, stopScan, prepare }
}
