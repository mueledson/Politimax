import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function Home({ navigation } : any) {

  return (
    <View style={styles.container}>

        <Image
          source={require('./assets/img.png')}
          style={ styles.img }
        />

      <View style={styles.btnGroup}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.entrar}>
          <Text style={styles.entrarText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Gestor')} style={styles.cadastrar}>
          <Text style={styles.cadastrarText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  img:{
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  container: {
    flex: 1,
    backgroundColor:'#FFF',
  },

  btnGroup:{
    height: '10%',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    marginTop: '180%',
    padding: 20,
  },

  entrar: {
    backgroundColor: '#FFF',
    width: 150,
    height: 45,
    marginRight: 5,
    justifyContent: 'center',
    borderRadius: 7,
    marginLeft: 15

  },
  entrarText:{
    color: '#000',
    textAlign: 'center',
    marginLeft: 4,
    fontSize: 18,
    fontWeight: 'bold'
  },
  
  cadastrar:{
    backgroundColor: '#000',
    width: 150,
    height: 45,
    justifyContent: 'center',
    borderRadius: 7,
    marginLeft: 15
  },
  cadastrarText:{
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  } 
});