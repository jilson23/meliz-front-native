import dayjs from 'dayjs';
import { Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../../style';
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
    <Text style={styles.spaces}> 
      <Text>Te quedan </Text>
      <Text style={styles.title1}>{ dataUser ? (calDays( dataUser.initPeriod, dataUser.finalPeriod)):(null)} dias </Text>
      <Text>y te faltan</Text>
    </Text>
    
    <Text style={styles.title2}>${result}</Text>
    
    <Text style={styles.spaces}>
      <Text>para lograr la meta de </Text>
    </Text>
    <Text style={styles.title1}>${dataUser?.goals[0].value}</Text>
    

    

    <Text style={styles.title1}> {"\n"} Actividades con más ganancias: </Text>
      {
        orderActivities?.map((activity)=>(
          <Text key={activity._id}>
          <Text>{activity.name}</Text> <Text> = ${activity.value}</Text>
          </Text>
        ))
      }

    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
      <Text style={styles.buttontext}>Añadir una ganancia</Text>
    </TouchableOpacity>
    

  </View>
  )
}

export default Resume