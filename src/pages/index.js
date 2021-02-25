import React from "react";
import Login from "./login/index";
import UserHome from "./authorized/home";
import { useSession } from "next-auth/client";

const Home = () => {
	const [session, loading] = useSession();

	if (!session) return <Login />;
	if (session) return <UserHome />;
};
export default Home;
