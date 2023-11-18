import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Afiliado({ navigation } : any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro Afiliados 1</Text>

      <View style={styles.inputGroup}>
        <TextInput style={styles.input} placeholder='Nome' />
      </View>

      <View style={styles.inputGroup}>
      
        <TextInput style={styles.input} placeholder='E-mail' />
      </View>

      <View style={styles.inputGroup}>
      
        <TextInput style={styles.input} placeholder='CPF' />
      </View>

      <View style={styles.lilInput}>
        <View style={styles.lilInputGroup}>
          <View style={styles.inputGroup}>
            <TextInput style={styles.input} placeholder='CEP' />
          </View>   
      </View>          

        <View style={styles.lilInputGroup}>
          <View style={styles.inputGroup}>
            <TextInput style={styles.input} placeholder='UF' />
          </View>
        </View>
      </View>
      
      <View style={styles.inputGroup}>
        <TextInput style={styles.input} placeholder='Bairro/Distrito' />
      </View>

      <View style={styles.inputGroup}>
        <TextInput style={styles.input} placeholder='Logradouro/Nome' />
      </View>

      <View style={styles.inputGroup}>
  
        <TextInput style={styles.input} placeholder='Complemento' />
      </View>

      <View style={styles.lilInput}>
        <View style={styles.lilInputGroup}>
          <TextInput style={styles.input} placeholder='N. Titulo' />
        </View>

        <View style={styles.lilInputGroup}>
          <TextInput style={styles.input} placeholder='Data Nasc.' />
        </View> 
      </View>

      <View style={styles.inputGroup}>

        <TextInput style={styles.input} placeholder='Zona' />
      </View>

      <View style={styles.inputGroup}>

        <TextInput style={styles.input} placeholder='Seção' />
      </View>

      <View style={styles.btnGroup}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.cadastrar}>
            <Text style={styles.cadastrarText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.cancelar}>
            <Text style={styles.cancelarText}>Cancelar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 80,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },

  btnGroup:{
    flexDirection: 'row',
  },

  title:{
    fontSize: 25,
    fontWeight: 'bold',
  },

  lilInput:{
    width: '40%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  
  lilInputGroup:{
    width: '100%',
    alignItems: 'center'

  },

  inputGroup:{
    width: '100%',
    alignItems: 'center'
  },
  label:{
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 70,
    alignSelf: 'flex-start'
  },
  input:{
    width: '85%',
    padding: 11,
    backgroundColor: '#dfdfdf',
    borderRadius: 5,
    marginTop: 13,
    fontSize: 18,
    paddingHorizontal: 5
  },

  lilLabel:{
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 30,
    alignSelf: 'flex-start'
  },

  cadastrar:{
    borderColor: '#000',
    color: '#000',
    backgroundColor: '#c1c1c1',
    width: 150,
    height: 45,
    justifyContent: 'center',
    
    borderRadius: 5,
    marginTop: 15,
    marginRight: 10,
  },
  cadastrarText:{
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },

  cancelar:{
    borderColor: '#000',
    backgroundColor: '#000',
    width: 150,
    height: 45,
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 15
  },
  cancelarText:{
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
});