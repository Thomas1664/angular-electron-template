import { contextBridge, ipcRenderer } from 'electron'

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('api', {
	send: (channel: string, data: any) => {
		// whitelist channels
		const validChannels = ['example-send']
		if (validChannels.includes(channel)) {
			ipcRenderer.send(channel, data)
		}
	},
	receive: (channel:string, func: (...args: any) => any) => {
		let validChannels = ['example-receive']

		if (validChannels.includes(channel)) {
			ipcRenderer.on(channel, (event, ...args) => {
				func(...args)
			})
		}
	}
})