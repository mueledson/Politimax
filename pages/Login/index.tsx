import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login( { navigation } : any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro Login</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Telefone</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Confirmar Senha</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.btnGroup}>
        <TouchableOpacity onPress={() => navigation.navigate('Gestor')} style={styles.cadastrar}>
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
  
  title:{
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20
  },
  container:{
    marginTop: 150,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  inputGroup:{
    width: '100%',
    alignItems: 'center'
  },

  label:{
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 35,
    alignSelf: 'flex-start'
  },

  input:{
    width: '85%',
    height: 50,
    backgroundColor: '#dfdfdf',
    color: '#1c1c1c',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 7,
    paddingLeft: 15
  },

  btnGroup:{
    marginTop: 30,
    flexDirection: 'row',
  },

  cadastrar:{
    backgroundColor: '#c1c1c1',
    width: 150,
    height: 45,
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 15,
    marginRight: 10,
  },
  cadastrarText:{
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  cancelar:{
    borderColor: '#000',
    backgroundColor: '#000',
    width: 150,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 15
  },

  cancelarText:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  }
});