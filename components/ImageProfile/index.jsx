import { useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { dataRefresh } from '../../store/actions';

import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { API_URL } from '@env';
import axios from 'axios';
import styles from '../../style';

export default function ImageProfile() {
  console.log(API_URL, 3);
  const dataUser = useSelector((state) => state.dataUser);
  const user = useSelector((state) => state.user);
  const datarefresh = useSelector((state) => state.dataRefresh);
  const dispatch = useDispatch();
  // const [permission, setPermission] = useState(false);
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const PickDocument2 = async () => {
    requestPermission();
    if (status.granted) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true,
      });

      if (!result.cancelled) {
        const file = new Blob([`data:image/jpg;base64,${result.base64}`]);
        const formData = new FormData();
        formData.append('file', file);
        const response = await axios.post(
          `${API_URL}/api/uploads/file/${user._id}`,
          formData,
        );
        console.log(response);
        dispatch(dataRefresh(!datarefresh));
      }
    }
  };

  const PickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync();

    const formData = new FormData();

    if (!result.cancelled) {
      formData.append('file', result.file);
      console.log(result);
      // await axios.post(`${API_URL}/api/uploads/file/${user._id}`, formData);
      // dispatch(dataRefresh(!datarefresh));
    }
  };

  let uploadImage = async () => {
    //Check if any file is selected or not
    if (singleFile != null) {
      //If file selected then create FormData
      const fileToUpload = singleFile;
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file_attachment', fileToUpload);
    } else {
      //if no file selected the show alert
      alert('Please Select File first');
    }
  };

  return (
    <TouchableOpacity style={styles.buttonimage} onPress={PickDocument2}>
      <Image
        style={styles.image}
        source={{
          uri:
            dataUser.profilePhoto === null
              ? 'https://picsum.photos/100/100'
              : dataUser.profilePhoto,
        }}
      />
      <Image
        style={styles.iconprofile}
        source={{
          uri: 'https://res.cloudinary.com/dw46hzlfr/image/upload/v1645435195/editar-texto_robpyv.png',
        }}
      />
    </TouchableOpacity>
  );
}
