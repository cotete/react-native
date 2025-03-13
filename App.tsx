import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Modal,Button, FlatList, ListRenderItemInfo } from 'react-native';

interface agendaInterface{
  nome:string;
  Telefone:string;
  email:string
}


export default function App() {


  const [mostra,useMostra] = useState(false);

  const contatos:agendaInterface[]=[
    {nome:"Nome",Telefone:"11111111",email:"email@email.com"},
    {nome:"jose",Telefone:"333333333",email:"email@email.com"},
    {nome:"maria",Telefone:"22222222",email:"email@email.com"},
    {nome:"carlos",Telefone:"44444444",email:"email@email.com"},
  ]

  const Butao =({texto}:{texto:string})=>{
    return(
      <Pressable style={{backgroundColor:"#aaf", padding:5,borderRadius:20, minWidth:70}}>
        <Text>{texto}</Text>
      </Pressable>
    )
  }

  const Formulario =({versao}:{versao:string})=>{
    return(
      <View style={{gap:10, borderColor:"#aaf",borderWidth:2, padding:15}}>
        <Text style={{textAlign:'center'}}>Agenda de Contato {versao}</Text>
        <View style={{gap:10}}>
            <InputArea texto='Fundadora' placeholder='nome'/>
            <InputArea texto='Telefone' placeholder='telefone'/>
            <InputArea texto='Email' placeholder='email'/>
            <View style={{display:'flex', flexDirection:'row',gap:10,justifyContent:"space-between"}}>
              <Butao texto='salvar'></Butao>
              <Butao texto='Pesquisar'></Butao>
            </View>
        </View>
      </View>
    )
  }

  const Listagem =(props:ListRenderItemInfo<agendaInterface>)=>{
      return(
        
          <View style={{borderWidth:2,borderColor:"#aaf", padding:8, display:'flex',gap:5}}>
            <Text>Nome: {props.item.nome}</Text>
            <Text>Telefone: {props.item.Telefone}</Text>
            <Text>Email: {props.item.email}</Text>
          </View>
      )
  }

  const InputArea =({texto,placeholder}:{texto:string,placeholder:string})=>{
      return(
        <View>
          <Text>{texto}</Text>
          <TextInput style={{borderColor:"#aafaff",borderWidth:2,borderRadius:12,padding:5}} placeholder={placeholder}></TextInput>
        </View>
      )
  }

  return (
    <View style={styles.container}>
      <Formulario versao='1.0'></Formulario>
      <View style={{borderColor:"#aafaff",borderWidth:2,padding:10,display:'flex',alignItems:'center',width:250, gap:5}}>
          <Text>Agenda Listagem</Text>
          {/*contatos.map(contato=>(<Listagem props={contato}></Listagem>))*/}
          <FlatList data={contatos} renderItem={Listagem} keyExtractor={(item:agendaInterface)=>item.nome}></FlatList>
      </View>
        <Button title='Coisa' onPress={()=>useMostra(!mostra)}></Button>
        <Modal animationType='slide' visible={mostra}>
            <Button title='Sair' onPress={()=>useMostra(!mostra)}></Button>
            <InputArea texto='Usuario' placeholder='Usuario'/>
            <InputArea texto='Senha' placeholder='Senha'></InputArea>
            <Butao texto='Login'></Butao>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"row",
    gap:100
  },
});
