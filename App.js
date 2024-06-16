import { useState } from "react";
import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	View,
	ScrollView,
	FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [modalIsVisible, setModalIsVisible] = useState(false);

	const addGoalHandler = (enteredGoalText) => {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
		endAddGoalHandler();
	};

	const deleteGoalHandler = (id) => {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((goal) => goal.id !== id);
		});
	};

	const startAddGoalHandler = () => {
		setModalIsVisible(true);
	};

	const endAddGoalHandler = () => {
		setModalIsVisible(false);
	};

	return (
		<>
		<StatusBar style="light" />
		<View style={styles.appContainer}>
			<Button
				title="Add New Goal"
				color={"#a065c0"}
				onPress={startAddGoalHandler}
			/>
			{modalIsVisible && (
				<GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler} />
			)}
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => {
						return (
							<GoalItem
								text={itemData.item.text}
								onDeleteItem={deleteGoalHandler}
								id={itemData.item.id}
							/>
						);
					}}
					alwaysBounceVertical={false}
					keyExtractor={(item, index) => {
						item.id;
					}}
				/>
			</View>
		</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		paddingTop: 50,
		paddingHorizontal: 16,
		flex: 1,
		// backgroundColor: "#1e085a", the color is set in app.json file on all main screens
	},

	goalsContainer: {
		flex: 5,
	},
});
