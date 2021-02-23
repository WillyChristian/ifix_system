import "../../styles/globals.css";
import SetProvider from "./components/empContext/provider";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<SetProvider>
				<Component {...pageProps} />;
			</SetProvider>
		</>
	);
}

export default MyApp;
