import axios from 'axios'
import {apiConfig} from '../config/axios.config.js'

export default axios.create({
  baseURL: 'http://192.168.68.128:3001/api',
})
