import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Gestor({ navigation } : any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro Gestor 2</Text>

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
        <TouchableOpacity onPress={() => navigation.navigate('Afiliados')} style={styles.cadastrar}>
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
  btnGroup:{
    flexDirection: 'row',
  },

  title:{
    fontSize: 25,
    fontWeight: 'bold',
  },

  container:{
    marginTop: 225,
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
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 50,
    alignSelf: 'flex-start'
  },
  input:{
    width: '80%',
    height: 45,
    backgroundColor: '#dfdfdf',
    color: '#A0A0A0',
    borderRadius: 5
  },

  cadastrar:{
    marginRight: 5,
    backgroundColor: '#000',
    width: 150,
    height: 45,
    borderRadius: 5,
    marginTop: 15,
    justifyContent: 'center'
  },
  cadastrarText:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  cancelar:{
    backgroundColor: '#000',
    width: 150,
    height: 45,
    borderRadius: 5,
    marginTop: 15,
    justifyContent: 'center'
  },
  cancelarText:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});