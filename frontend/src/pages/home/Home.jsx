import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex md:flex-row sm:flex-col sm:h-[450px] md:h-[550px] rounded-lg overflow-x-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 -mt-12'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
