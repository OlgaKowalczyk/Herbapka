import React from 'react';
// import firebase from './Firebase/index';
import { storage } from './Firebase';

import { Component } from 'react';

class ImageUpload extends Component {
  
    state = {
        image: null,
        url: "",
        progress: 0
    };

    handleChange = e => {
      if (e.target.files[0]) {
        const image = e.target.files[0];
        this.setState(() => ({ image }));
        console.log('image:', image)
      }
    };
  
    handleUpload = () => {
      const { image } = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ progress });
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              this.setState({ url });
            });
        }
      );
    };
    render() {
      return (
        <>
          <div className="">
          <input 
              type='file' 
              name='file' 
              id='file'
              onChange={this.handleChange}
              className='inputfile' 
              multiple/>
          <label for='file' className='addPhoto-btn form_btn label-btn'>
              Dodaj zdjęcie
          </label>
              {/* <button
                onClick={this.handleUpload}
                className='addPhoto-btn form_btn'
              >
                Zapisz zdjęcie
              </button>  */}
          </div>  
          {/* <img
            src={this.state.url}
            alt="Uploaded Images"
            height="10"
            width="15"
          /> */}
        </>
      );
    }
  }
  
  export default ImageUpload;


// const UploadPhotos = () => {

//     const allInputs = {imgUrl: ''};
//     const [imageFile, setImageFile] = useState('');
//     const [imageUrl, setImageUrl] = useState(allInputs);

//     // console.log('imageFile:', imageFile)
    
//     const handleImageFile = (e) => {
//         const image = e.target.files[0];
//         setImageFile(imageFile => (image));
//     }

//     const handleFireBaseUpload = e => {
//         e.preventDefault()
//         console.log('start of upload')
//         // async magic goes here...
//         if(imageFile === '') {
//             console.error(`not an image, the image file is a ${typeof(imageFile)}`)
//         }
//         const uploadTask = storage().ref(`/images/${imageFile.name}`).put(imageFile)
//         //initiates the firebase side uploading 
//         uploadTask.on('state_changed', 
//         (snapShot) => {
//             //takes a snap shot of the process as it is happening
//             console.log('snapShot::', snapShot)
//         }, (err) => {
//             //catches the errors
//             console.log('imageError:', err)
//         }, () => {
//             // gets the functions from storage refences the image storage in firebase by the children
//             // gets the download url then sets the image from firebase as the value for the imgUrl key:
//             storage().ref('images').child(imageFile.name).getDownloadURL()
//             .then(fireBaseUrl => {
//                 setImageUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
//             })
//         })
//         console.log('imageUrl:', imageUrl);
//     }
    
 
//     return (
//         <div className="uploadPhotos">
//             <form onSubmit={handleFireBaseUpload}>
//                 <input 
//                     type="file"
//                     onChange={handleImageFile}
//                 />
//                 <button>upload to firebase</button>
//             </form>
//             <img src={imageUrl.imgUrl} alt="tea" />

//         </div>
//   );
// }

// export default UploadPhotos;
