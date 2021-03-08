import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import Axios from 'axios';
import UploadsImg from './images/uploadsimg.png';

const MortgageDocs = () => {
	const [fileNames, setFileNames] = useState([]);
	const handleDrop = (acceptedFiles) =>
		setFileNames(acceptedFiles.map((file) => file.name));
	const handleClickSend = (event) => {
		event.preventDefault();
		Axios({
			url: '',
			method: 'POST',
			data: '',
		});
	};
	return (
		<div className='dropBoxContainer'>
			<Dropzone onDrop={handleDrop}>
				{({ getRootProps, getInputProps }) => (
					<div {...getRootProps({ className: 'dropzone' })}>
						<input {...getInputProps()} />
						<p>Upload</p>
						<img src={UploadsImg} />
					</div>
				)}
			</Dropzone>
			<br />
			<br />
			<br />
			<div>
				<strong>Files:</strong>
				<ul>
					{fileNames.map((fileName) => (
						<li key={fileName}>{fileName}</li>
					))}
				</ul>
			</div>
			<div>Upload Pre-forclosure Notice</div>
			<div>
				We can use this document to verify your listing, so that you can get the
				help you need.
			</div>
			<button onClick={handleClickSend}>Confirm</button>
		</div>
	);
};

export default MortgageDocs;
