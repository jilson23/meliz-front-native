import {useEffect, useState} from 'react'
import {Picker} from '@react-native-picker/picker';
import { useSelector } from 'react-redux';

   

function SelectTask({setIdTask}){

  const dataUser = useSelector(state => state.dataUser);
  const { activities } = dataUser
  const [selectedActivity, setSelectedActivity] = useState(activities[0]._id);

  useEffect(()=>{
    setIdTask(selectedActivity)
  },[selectedActivity])

  return(
      <Picker
      style={{height: 100, width: 300, marginBottom:50}}
      selectedValue={selectedActivity}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedActivity(itemValue)
      }>
        {
          activities?.map((item)=>(
            <Picker.Item key={item._id} label={item.name} value={item._id} />
          ))
        }
    </Picker>
  )

}

export default SelectTask