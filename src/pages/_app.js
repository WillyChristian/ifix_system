import "../../styles/globals.css";
import { Provider } from "next-auth/client";
import { MyContext} from './components/context/employees'

function MyApp({ Component, pageProps }) {
	return (
		<MyContext>
			<Provider session={pageProps.session}>
				<Component {...pageProps} />
			</Provider>
		</MyContext>
	);
}

export default MyApp;
