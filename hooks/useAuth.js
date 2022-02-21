import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { authenticated, login } from '../store/actions';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';

const useAuth = () => {
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      if(jsonValue){
        const decoded = jwt_decode(jsonValue);
        const actualday = dayjs().unix()
        if(decoded.exp < actualday){
          alert('A pasado mucho tiempo, vuelve a Acceder')
        }else{
          dispatch(login(decoded));
          dispatch(authenticated(true));
        }
      }
    } catch(e) {
      console.error('error reading data', e)
    }
  }

  const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@storage_Key', jsonValue)
        getData();
      } catch (e) {
        console.error('error save data', e)
    }
  }

  const deleteData = async () => {
    
    try {
      await AsyncStorage.removeItem('@storage_Key')
    } catch(e) {
      console.error('error delete data', e)
    }
  }

  return {
    storeData,
    getData,
    deleteData
  }
}

export default useAuth;
