import { useState } from "react";
import {
	View,
	TextInput,
	Button,
	StyleSheet,
	Modal,
	Image,
} from "react-native";
const GoalInput = (props) => {
	const [enteredGoalText, setEnteredGoalText] = useState("");

	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	};

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText("");
	};

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					source={require("../assets/images/goal.png")}
					style={styles.image}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Cancel" onPress={props.onCancel} color={"#f31282"} />
					</View>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		backgroundColor: "#311b6b",
	},
	textInput: {
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		color: "#120438",
		borderRadius: 6,
		borderWidth: 1,
		width: "100%",
		marginRight: 8,
		padding: 18,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 16,
	},

	button: {
		width: "100",
		marginHorizontal: 8,
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
});
