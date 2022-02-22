import dayjs from 'dayjs';
import { Text, View, Button } from 'react-native';
import { useSelector } from 'react-redux';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween)



function Resume ({ navigation }){
  const dataUser = useSelector(state => state.dataUser);


  function calDays(init, exp){
    const initial = dayjs(init)
    const final = dayjs(exp)
    return final.diff(initial, 'day')
  }

  function between(dateProfit, init, exp){
   return dayjs(dateProfit).isBetween(init, dayjs(exp))
  }

  const allProfits = dataUser?.profits.filter( 
    (profit) => {
      return between(profit.date, dataUser.initPeriod, dataUser.finalPeriod)
    }
  )

  const totalProfits = allProfits?.reduce(
    (sum, value) => (
      typeof value.value == "number" ? sum + value.value : sum), 0
  );

  const result = dataUser?.goals[0].value - totalProfits

  


  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
    <Text>Te quedan { dataUser ? (calDays( dataUser.initPeriod, dataUser.finalPeriod)):(null)} dias y te faltan {result} cantidad para lograr la meta de $ {dataUser?.goals[0].value}   {"\n"} {"\n"}</Text>
    <Text>Actividades que más te han generado ingreso {"\n"} {"\n"}</Text>
    <Text>
    <Text>Caminar - 5000,000 {"\n"} 
        </Text>
    <Text>Cocinar  - 100,000</Text>
    </Text>
    <Button title="Añadir un Registro" onPress={() => navigation.navigate('Register')} />

  </View>
  )
}

export default Resume