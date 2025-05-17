import React, { useState } from 'react'
import {
  AddressFormContainer,
  InputGroup,
  Input,
  Select,
  Label,
  Button,
  Header,
  CloseButton,
  Subtitle
} from './styles'

interface AddressFormProps {
  onClose: () => void
}

const AddressForm: React.FC<AddressFormProps> = ({ onClose }) => {
  const [form, setForm] = useState({
    tipo: '',
    destinatario: '',
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <AddressFormContainer>
      <Header>
        <h2>cadastrar endereço de entrega</h2>
        <Subtitle>
          agora um endereço para entregarmos seus looks <span>😉</span>
        </Subtitle>
        <CloseButton onClick={onClose}>×</CloseButton>
      </Header>

      <InputGroup>
        <Input
          placeholder="ex: Escritório, Casa, etc."
          name="tipo"
          value={form.tipo}
          onChange={handleChange}
        />
        <Input
          placeholder="João de Oliveira"
          name="destinatario"
          value={form.destinatario}
          onChange={handleChange}
        />
      </InputGroup>

      <InputGroup>
        <Input
          placeholder="____-___"
          name="cep"
          value={form.cep}
          onChange={handleChange}
        />
        <a href="#">não sei meu cep 🤔</a>
      </InputGroup>

      <InputGroup>
        <Input
          placeholder="qual é a rua?*"
          name="endereco"
          value={form.endereco}
          onChange={handleChange}
        />
        <Input
          placeholder="e o numero?*"
          name="numero"
          value={form.numero}
          onChange={handleChange}
        />
      </InputGroup>

      <InputGroup>
        <Input
          placeholder="tem complemento?"
          name="complemento"
          value={form.complemento}
          onChange={handleChange}
        />
        <Input
          placeholder="qual o bairro?*"
          name="bairro"
          value={form.bairro}
          onChange={handleChange}
        />
      </InputGroup>

      <InputGroup>
        <Input
          placeholder="e a cidade?*"
          name="cidade"
          value={form.cidade}
          onChange={handleChange}
        />
        <Select name="estado" value={form.estado} onChange={handleChange}>
          <option value="">selecione o estado*</option>
          <option value="PE">PE</option>
          <option value="SP">SP</option>
          <option value="RJ">RJ</option>
        </Select>
      </InputGroup>

      <Input
        placeholder="quer colocar alguma referência?"
        name="referencia"
        onChange={handleChange}
      />

      <Button>cadastrar endereço</Button>
    </AddressFormContainer>
  )
}

export default AddressForm
