import * as React from 'react';
import {createStackNavigator,CardStyleInterpolators, HeaderStyleInterpolators, TransitionSpecs} from '@react-navigation/stack';
 

const Stack = createStackNavigator();

export default function StackCreater(props) {
    const{routs, screenOptions } =props 
  return (
    <Stack.Navigator 
    screenOptions={{headerShown: false,
     cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,  
     ...screenOptions
     }}
  
     >
      {routs?.map((item, key) => {
        const {name, component,options:{title}} = item;
        return <Stack.Screen        
        /* options={{  
          header:(props)=><CustomHeader {...props}  item={item} /> 
        }} */
        // options={{ headerTintColor:appColors.primaryFont, title,headerTitleStyle:{  fontFamily:'Metropolis-Bold', fontSize:scale(22) }  }}
         key={key}  name={name} component={component} />;
      })}
    </Stack.Navigator>
  );
}
