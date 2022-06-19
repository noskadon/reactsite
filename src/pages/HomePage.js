import { Container, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";
import DisplayList from "../features/display/DisplayList";

const HomePage = () => {
	return (
		<Container>
			<SubHeader current="Home" />
			<Row>
				<DisplayList />
			</Row>
		</Container>
	);
};

export default HomePage;
