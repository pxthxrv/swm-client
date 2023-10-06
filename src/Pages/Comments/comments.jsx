import React, {useState} from "react";
import { Link } from "react-router-dom";

function Comments({ onFormSubmit }) {
	const [message, setMessage] = useState("");
	const [confirmation, setConfirmation] = useState('');

	const handleInputChange = (e) => {
		setMessage(e.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setConfirmation('Message Sent Successfully')
	}

	return (
		<div className="insight">
			<h3>Tech stocks to rise in near future</h3>
			{confirmation ? <p>{confirmation}</p> : (
				<>
					<p>Tech stocks to rise in the near future due to ...</p>
					<form onSubmit={handleSubmit}>
						<textarea type="textarea" placeholder="Leave a message..." onChange={handleInputChange} value={message} />
						<button type="submit">Submit</button>
					</form>
				</>
			)}
		</div>
	);
}

export default Comments;
