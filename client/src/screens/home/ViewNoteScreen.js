import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableHighlight, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getNote, getComments, addComment } from '../../controllers/PostController';

export default class ViewNoteScreen extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			note: this.props.navigation.getParam('note'),
			comments: null,
			comment: '',
		};
	}

	async componentDidMount(){
		this.setState( {comments: await getComments(this.state.note.id)});
	}

	_goBack = () => {
		this.props.navigation.navigate("HomeScreen");
	};

	_addComment = (comment) => {
		addComment(comment);
		this.setState( {comment: ''} );
	};

	_renderComment = ( comment ) => {
		return (
			<View style={styles.commentContainer}>
				<Ionicons name="ios-contact" size={48} color="#000000"/>
				<Text style={styles.comment}>{comment.userId}: {comment.message}</Text>
			</View>
		);
	};

	render() {
		return (
			<View style={styles.pageContainer}>
				<View style={styles.backButtonContainer}>
					<TouchableHighlight
						onPress={this._goBack}
					>
						<Text style={styles.backButton}><Ionicons name="ios-arrow-back" size={18} color="#000000"/> Go Back
						</Text>
					</TouchableHighlight>
				</View>

				<ScrollView style={styles.scrollContainer}>
					<View style={styles.textContainer}>
						<Text style={styles.title}>{this.state.note.title}</Text>
		        		<Text style={styles.description}>{this.state.note.message}</Text>
					</View>

					{
						this.state.comments &&
						<View style={styles.icons}>
							<Ionicons name="ios-heart-empty" size={35} color="#000000"/>
							<Text style={styles.commentNumber}>
								<Ionicons name="ios-chatbubbles" size={35} color="#000000"/> {this.state.comments.length}
							</Text>
						</View>
					}
					<View
					  style={{
					    borderBottomColor: 'gray',
					    borderBottomWidth: 1,
					  }}
					/>

					<View style={styles.addComment}>
						<TextInput
					        placeholder="Comment..."
					        onChangeText={comment => this.setState({ comment })}
            				value={this.state.comment}
					        style={styles.commentPrompt}
					      />
					      <TouchableHighlight
					      	onPress={() => this._addComment(this.state.comment)}
					      	style={styles.commentButton}
					      >
					      	<Text style={styles.commentButtonText}>Send</Text>
					      </TouchableHighlight>
		        	</View>
		        	
		        	<View style={styles.commentsSectionContainer}>
		        		{
		        			this.state.comments && this.state.comments.map(comment => this._renderComment(comment))
		        		}
		        	</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 28,
		fontWeight: '400',
		marginBottom: 2,
	},
	description: {
		fontSize: 22,
		marginBottom: 2,
	},
	textContainer: {
		marginLeft: 8,
		marginRight: 8,
		paddingBottom: 125,
	},
	commentContainer: {
		flexDirection: 'row',
		margin: 2,
		marginLeft: 8,
		marginRight: 40,
	},
	comment: {
		fontSize: 22,
		marginTop: 0,
		marginLeft: 8,	
	},
	scrollContainer: {
		flex: 1,
	},
	commentsSectionContainer: {
		flex: 1,
	},
	backButtonContainer: {
		marginTop: 4,
		marginLeft: 4,
		marginBottom: 14,
	},
	backButton: {
		fontSize: 18,
		fontWeight: '300',
	},
	icons: {
		flexDirection: 'row',
		justifyContent: 'space-around',	
	},
	pageContainer: {
		flex: 1,
	},
	commentNumber: {
		fontSize: 22,
	},
	addComment: {
		flexDirection: 'row',
	},
	commentPrompt: {
		borderColor: '#91afe0',
		borderWidth: 8,
		paddingLeft: 10,
		flex: 1,
	},
	commentButton: {
		backgroundColor: '#629FE7',
		paddingLeft: 10,
		paddingRight: 10,
		justifyContent: 'center',
	},
	commentButtonText: {
		color: 'white',
		fontWeight: '300',
	}
});