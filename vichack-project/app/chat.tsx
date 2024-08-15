import { View, Image } from "react-native";
import { Link } from "expo-router";

/* Stylesheet imports */
import styles from "../assets/styles";


function ChatPage() {

	return (
		<View>
			{/* Header (Friend Profile pic + name, Your profile pic in the corner (takes you to profile)) */}
			<View style={{
					flexDirection: "row",
					justifyContent: "center"
			}}>
				<View>
					<Image />
					Test Name
				</View>
			</View>

			{/* Chat box */}
			<View>
				
			</View>
		</View>
	);
}



export default ChatPage;
