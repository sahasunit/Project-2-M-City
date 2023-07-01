import React, { Component } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import FileUploader from "react-firebase-file-uploader";
import { CircularProgress } from "@material-ui/core";

class Fileuploader extends Component {
	//imagesRef = ref(this.storage, this.props.dir);
	//mountainImagesRef = ref(storage, 'images/mountains.jpg');

	state = {
		name: "", //Name of the file Something.png
		isUploading: false,
		fileURL: "", //http://firebase/host.26635/name.png
	};

	handleUploadStart = (filename) => {
		console.log(filename);
		this.setState({ isUploading: true });
	};

	handleUploadError = (e) => {
		console.log(e);
		this.setState({ isUploading: false });
	};

	handleUploadSuccess = (filename) => {
		console.log(filename);
		this.setState({
			name: filename,
			isUploading: false,
		});
	};

	render() {
		console.log(this.state);
		let imageStorageRef = ref(storage, this.props.dir);
		return (
			<div>
				<FileUploader
					accept="image/*"
					name="image"
					randomizeFilename
					storageRef={uploadBytes(imageStorageRef, this.state)}
					onUploadStart={this.handleUploadStart}
					onUploadError={this.handleUploadError}
					onUploadSuccess={this.handleUploadSuccess}
				/>
			</div>
		);
	}
}

export default Fileuploader;
