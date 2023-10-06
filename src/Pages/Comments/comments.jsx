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
		<div className="comment">
			<h3 className="comment__title">Tech stocks to rise in near future</h3>
			{confirmation ? <p>{confirmation}</p> : (
				<>
					<p className="comment__text">Tech stocks to rise in the near future due to ...</p>
					<form onSubmit={handleSubmit}>
						<textarea className="text-area" type="textarea" placeholder="Leave a message..." onChange={handleInputChange} value={message} />
						<button className="" type="submit">Submit</button>
					</form>
				</>
			)}
		</div>
	);
}

export default Comments;
