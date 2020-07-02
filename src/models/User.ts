import mongoose, { Schema, Document } from 'mongoose';

export interface UserInterface extends Document{
  userId: String;
  name: String;
  email: String;
  celular: String;
  endereco: Object;
  dataNascimento: Date;
  genero: String;
  cpf: String;
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    minlength: 5,
  },
  celular: {
    type: Number,
    unique: true,
    required: true,
    minlength: 9,
  },
  endereco: {
    rua: {
      type: String,
      required: true,
      minlength: 5,
    },
    numero: {
      type: String,
      required: true,
      minlength: 1,
    },
    complemento: {
      type: String,
      required: false,
    },
    bairro: {
      type: String,
      required: true,
      minlength: 5,
    },
    cidade: {
      type: String,
      required: true,
      minlength: 5,
    },
    estado: {
      type: String,
      required: true,
      minlength: 2,
    },
    pais: {
      type: String,
      required: true,
      minlength: 5,
    },
    cep: {
      type: String,
      required: true,
      minlength: 5,
    },
  },
  dataNascimento: {
    type: Date,
    required: true,
    minlength: 5,
  },
  genero: {
    type: String,
    required: true,
    minlength: 5,
  },
  cpf: {
    type: Number,
    unique: true,
    required: true,
    minlength: 10,
  },
});

const User = mongoose.model<UserInterface>('User', UserSchema);

export default User;
