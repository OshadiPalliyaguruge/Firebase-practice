var files = [];
	document.getElementById( "files" ).addEventListener( "change", function ( e ) {
		files = e.target.files;
		for ( let i = 0; i < files.length; i++ ) {
			console.log( files[ i ] );
		}
	} );

	document.getElementById( "uploadImg" ).addEventListener( "click", function () {

		//checks if files are selected
		if ( files.length != 0 ) {
			//Loops through all the selected files
			for ( let i = 0; i < files.length; i++ ) {
				//create a storage reference
				var storage = firebase.storage().ref( 'images/' + files[ i ].name );
				//upload file
				var upload = storage.put( files[ i ] );

				//update progress bar
				upload.on(
					"state_changed",
					function progress( snapshot ) {
						var percentage =
							( snapshot.bytesTransferred / snapshot.totalBytes ) * 100;
						document.getElementById( "progress" ).value = percentage;
					},

					function error() {
						alert( "error uploading file" );
					},

					function complete() {
						document.getElementById(
							"uploading"
						).innerHTML += `Document uploaded successfully.`;
						getFileUrl( 'images/' + files[ i ].name );
					}
				);
			}
			//evt.preventDefault();
		} else {
			alert( "File is not selected." );
		}
	} );

	function getFileUrl( filename ) {
		//create a storage reference
		var storage = firebase.storage().ref( filename );

		//get file url
		storage
			.getDownloadURL()
			.then( function ( url ) {
				document.getElementById(
					"urlUP"
				).innerHTML += `${url}`;
				console.log( url );
			} )
			.catch( function ( error ) {
				console.log( "error encountered" );
			} );
	}