import ReactDOM from 'react-dom/client'
import './App.css'
import AppProvider from './components/providers'
import AppRouterProvider from './components/providers/app-router-provider'
import '@mantine/core/styles.css'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	// <React.StrictMode>
	<AppProvider>
		<AppRouterProvider />
	</AppProvider>
)
