import dayjs from 'dayjs';
import { Text, View, Button } from 'react-native';
import { useSelector } from 'react-redux';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween)



function Resume ({ navigation }){
  const dataUser = useSelector(state => state.dataUser);

// function know how many days are left
  function calDays(init, exp){
    const initial = dayjs(init)
    const final = dayjs(exp)
    return final.diff(initial, 'day')
  }

  // functions how many money are left to goal

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


  // functions order activities by profits
  // function resume activities and profits
  const activitysResume = dataUser?.activities.map((activity) => {

    const allProfitsByActivity = dataUser?.profits.filter((profit, index) => (
      profit.activityId === activity._id
    ))

    const value = allProfitsByActivity.reduce(
      (sum, value) => (
        typeof value.value == "number" ? sum + value.value : sum), 0
    );
    
    return {
      ...activity,
      value
    }
  })

  // function order activities by profits

  const orderActivities = activitysResume?.sort((a, b) => b.value - a.value )

  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
    <Text>Te quedan { dataUser ? (calDays( dataUser.initPeriod, dataUser.finalPeriod)):(null)} dias y te faltan ${result} para lograr la meta de ${dataUser?.goals[0].value}   {"\n"} {"\n"}</Text>
    <Button title="Añadir una ganancia" onPress={() => navigation.navigate('Register')} />

    <Text> {"\n"} Actividades que más te han generado ingreso en general {"\n"} </Text>
      {
        orderActivities?.map((activity)=>(
          <Text>
          <Text>{activity.name}</Text> <Text> = ${activity.value}</Text>
          </Text>
        ))
      }
    

  </View>
  )
}

export default Resume